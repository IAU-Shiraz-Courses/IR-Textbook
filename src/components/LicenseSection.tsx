import { useLanguage } from "../context/LanguageContext";
import { LICENSE_V1_URL, LICENSE_V2_URL } from "../data/chapters";
import { CheckIcon, ExternalLinkIcon, ScaleIcon, XIcon } from "./icons";
import { SectionHeading } from "./VersionsSection";

export function LicenseSection() {
  const { t } = useLanguage();

  return (
    <section id="license" className="bg-[#0d1520] py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.licenseTitle} />

        <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 sm:p-10">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF6700]/15 text-[#FF6700]">
              <ScaleIcon className="h-6 w-6" />
            </span>
            <p className="text-sm font-bold leading-6 text-white sm:text-base">{t.licenseName}</p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-5">
              <div className="flex items-center gap-2 font-extrabold text-emerald-400">
                <CheckIcon className="h-5 w-5" />
                {t.licenseAllowedTitle}
              </div>
              <p className="mt-3 text-sm leading-7 text-white/65">{t.licenseAllowed}</p>
            </div>
            <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.06] p-5">
              <div className="flex items-center gap-2 font-extrabold text-red-400">
                <XIcon className="h-5 w-5" />
                {t.licenseForbiddenTitle}
              </div>
              <p className="mt-3 text-sm leading-7 text-white/65">{t.licenseForbidden}</p>
            </div>
          </div>

          <p className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-4 text-xs leading-6 text-amber-200/80 sm:text-sm">
            ⚠️ {t.licenseWarning}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-[#0d1520] transition hover:bg-[#FF6700] hover:text-white sm:text-sm"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              CC BY-NC-ND 4.0
            </a>
            <a
              href={LICENSE_V2_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-white/10 sm:text-sm"
            >
              {t.licenseLink} (V2)
            </a>
            <a
              href={LICENSE_V1_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-white/10 sm:text-sm"
            >
              {t.licenseLink} (V1)
            </a>
          </div>
        </div>

        <CitationBlock />
      </div>
    </section>
  );
}

function CitationBlock() {
  const { t } = useLanguage();
  return (
    <div className="mt-16">
      <h3 className="text-center text-2xl font-extrabold text-white sm:text-3xl">{t.citationTitle}</h3>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-xs font-extrabold uppercase tracking-wider text-[#3A9679]">{t.citationFa}</p>
          <p className="mt-3 text-sm leading-7 text-white/70">{t.citationTextFa1}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-xs font-extrabold uppercase tracking-wider text-[#3A9679]">{t.citationEn}</p>
          <p className="mt-3 text-sm leading-7 text-white/70" dir="ltr">
            {t.citationTextEn1}
          </p>
        </div>
      </div>
    </div>
  );
}
