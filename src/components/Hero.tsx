import { useLanguage } from "../context/LanguageContext";
import { REPO_URL, chapters } from "../data/chapters";
import { GitHubIcon } from "./icons";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#0d1520] pb-20 pt-16 sm:pb-28 sm:pt-20"
    >
      {/* background glows */}
      <div className="pointer-events-none absolute -left-32 -top-20 h-80 w-80 rounded-full bg-[#FF6700]/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-[#3A9679]/20 blur-[110px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/80 sm:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF6700]" />
          {t.badge}
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-[1.25] text-white sm:text-5xl md:text-6xl">
          {t.heroTitle}
          <span className="block bg-gradient-to-r from-[#FF6700] to-[#ff9a52] bg-clip-text text-transparent">
            {t.heroTitleEn}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-8 text-white/60 sm:text-lg">
          {t.heroSubtitle}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-[#FF6700] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-900/30 transition hover:bg-[#e85e00] sm:text-base"
          >
            <GitHubIcon className="h-5 w-5" />
            {t.viewRepo}
          </a>
          <a
            href="#chapters"
            className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 sm:text-base"
          >
            {t.scrollDown}
          </a>
        </div>

        <p className="mt-5 break-all text-xs text-white/40 sm:text-sm" dir="ltr">
          {t.repoLabel} <span className="text-[#3A9679]">{REPO_URL}</span>
        </p>

        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4">
          <Stat value={String(chapters.length)} label={t.heroStat1} />
          <Stat value="2" label={t.heroStat2} />
          <Stat value="5" label={t.heroStat3} />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-5">
      <div className="text-2xl font-extrabold text-white sm:text-3xl">{value}</div>
      <div className="mt-1 text-[11px] font-medium text-white/50 sm:text-xs">{label}</div>
    </div>
  );
}
