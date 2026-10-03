import { useLanguage } from "../context/LanguageContext";
import { chapters, type Chapter } from "../data/chapters";
import { SectionHeading } from "./VersionsSection";
import { DownloadIcon, NotebookIcon, PdfIcon } from "./icons";

export function ChaptersSection() {
  const { t } = useLanguage();

  return (
    <section id="chapters" className="bg-[#0d1520] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.chaptersTitle} subtitle={t.chaptersSubtitle} />

        <div className="mt-12 space-y-5">
          {chapters.map((chapter) => (
            <ChapterCard key={chapter.number} chapter={chapter} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChapterCard({ chapter }: { chapter: Chapter }) {
  const { t, lang } = useLanguage();

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-white/20">
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-start gap-4 sm:items-center">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6700]/25 to-[#3A9679]/15 text-sm font-extrabold text-[#FF9248]">
            {chapter.number}
          </span>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#3A9679]">
              {t.chapterLabel} {lang === "fa" ? chapter.displayNumber : chapter.number}
            </p>
            <h3 className="mt-0.5 text-base font-extrabold text-white sm:text-lg" dir="ltr">
              {chapter.titleEn}
            </h3>
            {lang === "fa" && <p className="mt-0.5 text-sm text-white/55">{chapter.titleFa}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:min-w-[380px]">
          {chapter.v1 && <VersionDownloads label="1.0" pdfUrl={chapter.v1.pdfUrl} notebookUrl={chapter.v1.notebookUrl} />}
          {chapter.v2 && <VersionDownloads label="2.0" pdfUrl={chapter.v2.pdfUrl} notebookUrl={chapter.v2.notebookUrl} />}
        </div>
      </div>
    </div>
  );
}

function VersionDownloads({ label, pdfUrl, notebookUrl }: { label: string; pdfUrl: string; notebookUrl: string }) {
  const { t } = useLanguage();
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-3">
      <p className="mb-2 text-center text-[11px] font-bold text-white/45">
        {t.version} {label}
      </p>
      <div className="flex gap-2">
        <a
          href={pdfUrl}
          download
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#FF6700]/15 px-2 py-2 text-xs font-bold text-[#FF9248] transition hover:bg-[#FF6700]/25"
          title={t.downloadPdf}
        >
          <PdfIcon className="h-3.5 w-3.5" />
          PDF
          <DownloadIcon className="h-3 w-3 opacity-60" />
        </a>
        <a
          href={notebookUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#3A9679]/15 px-2 py-2 text-xs font-bold text-[#4fbf9a] transition hover:bg-[#3A9679]/25"
          title={t.downloadNotebook}
        >
          <NotebookIcon className="h-3.5 w-3.5" />
          Notebook
          <DownloadIcon className="h-3 w-3 opacity-60" />
        </a>
      </div>
    </div>
  );
}
