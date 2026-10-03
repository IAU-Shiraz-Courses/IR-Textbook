import { useLanguage } from "../context/LanguageContext";
import { V1_FOLDER_URL, V2_FOLDER_URL } from "../data/chapters";
import { CheckIcon, ExternalLinkIcon } from "./icons";

interface VersionInfo {
  id: string;
  version: string;
  date: string;
  authors: string[];
  isNew: boolean;
  url: string;
  descKey: "v1Desc" | "v2Desc";
}

const versions: VersionInfo[] = [
  {
    id: "v2",
    version: "2.0",
    date: "October 2026",
    authors: ["حمید نامجو", "امیرحسین همتی", "علی مجاهد", "علی نیکوان", "امیرمحمد اسدجو"],
    isNew: true,
    url: V2_FOLDER_URL,
    descKey: "v2Desc",
  },
  {
    id: "v1",
    version: "1.0",
    date: "May 2026",
    authors: ["حمید نامجو", "امیرحسین همتی", "علی مجاهد"],
    isNew: false,
    url: V1_FOLDER_URL,
    descKey: "v1Desc",
  },
];

export function VersionsSection() {
  const { t } = useLanguage();

  return (
    <section id="versions" className="bg-[#0a1018] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.versionsTitle} subtitle={t.versionsSubtitle} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {versions.map((v) => (
            <div
              key={v.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.015] p-7 transition hover:border-[#FF6700]/40"
            >
              {v.isNew && (
                <span className="absolute left-5 top-5 rounded-full bg-[#FF6700] px-3 py-1 text-[11px] font-bold text-white rtl:left-auto rtl:right-5">
                  {t.versionNewBadge}
                </span>
              )}
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">V{v.version}</span>
              </div>

              <p className="mt-4 text-sm leading-7 text-white/60">{t[v.descKey]}</p>

              <dl className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="font-semibold text-white/40">{t.versionDate}</dt>
                  <dd className="text-white/80" dir="ltr">
                    {v.date}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="shrink-0 font-semibold text-white/40">{t.versionAuthors}</dt>
                  <dd className="text-right text-white/80 rtl:text-right ltr:text-left">
                    {v.authors.join("، ")}
                  </dd>
                </div>
              </dl>

              <a
                href={v.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-bold text-white transition group-hover:border-[#3A9679] group-hover:bg-[#3A9679]/10"
              >
                <ExternalLinkIcon className="h-4 w-4" />
                {t.versionDownloadAll}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <h3 className="flex items-center gap-2 text-base font-extrabold text-white sm:text-lg">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF6700]/20 text-[#FF6700]">
              ✦
            </span>
            {t.newUpdates}
          </h3>
          <ul className="mt-4 space-y-3">
            {t.newUpdatesItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-7 text-white/65">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3A9679]/20 text-[#3A9679]">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-sm leading-7 text-white/55 sm:text-base">{subtitle}</p>}
    </div>
  );
}
