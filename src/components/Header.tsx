import { useLanguage } from "../context/LanguageContext";
import { REPO_URL } from "../data/chapters";
import { BookIcon, GitHubIcon, GlobeIcon } from "./icons";

export function Header() {
  const { t, toggleLang, lang } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d1520]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6700] to-[#ff8c3a] text-white shadow-lg shadow-orange-900/30">
            <BookIcon className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-extrabold text-white sm:text-base">
              {lang === "fa" ? "جزوه بازیابی اطلاعات" : "IR Textbook"}
            </span>
            <span className="text-[11px] font-medium text-[#3A9679] sm:text-xs">IAU Shiraz</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#versions" className="text-sm font-medium text-white/70 transition hover:text-white">
            {t.versionsTitle}
          </a>
          <a href="#chapters" className="text-sm font-medium text-white/70 transition hover:text-white">
            {t.chaptersTitle}
          </a>
          <a href="#license" className="text-sm font-medium text-white/70 transition hover:text-white">
            {t.licenseTitle}
          </a>
          <a href="#contact" className="text-sm font-medium text-white/70 transition hover:text-white">
            {t.contactTitle}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            title={lang === "fa" ? "Switch to English" : "تغییر به فارسی"}
            className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white transition hover:border-[#3A9679] hover:bg-[#3A9679]/10 sm:text-sm"
          >
            <GlobeIcon className="h-4 w-4 text-[#3A9679]" />
            {t.translateBtn}
          </button>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#0d1520] transition hover:bg-[#FF6700] hover:text-white sm:flex sm:text-sm"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
