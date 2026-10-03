import { useLanguage } from "../context/LanguageContext";
import { REPO_URL } from "../data/chapters";
import { BookIcon, GitHubIcon } from "./icons";

export function Footer() {
  const { t, lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#070c13] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF6700] to-[#ff8c3a] text-white">
            <BookIcon className="h-4 w-4" />
          </span>
          <span className="text-sm font-extrabold text-white">
            {lang === "fa" ? "جزوه بازیابی اطلاعات" : "IR Textbook"}
          </span>
        </div>

        <p className="text-xs text-white/40 sm:text-sm">
          © {year} حمید نامجو، امیرحسین همتی، علی مجاهد، علی نیکوان، امیرمحمد اسدجو — {t.footerRights}
        </p>
        <p className="text-xs text-white/30">{t.footerLicenseShort}</p>

        <a
          href={REPO_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-white/50 transition hover:text-white"
        >
          <GitHubIcon className="h-3.5 w-3.5" />
          IAU-Shiraz-Courses/IR-Textbook
        </a>
      </div>
    </footer>
  );
}
