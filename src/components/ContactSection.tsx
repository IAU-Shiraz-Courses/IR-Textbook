import { useLanguage } from "../context/LanguageContext";
import { CONTACT_EMAIL, ISSUES_URL } from "../data/chapters";
import { ExternalLinkIcon, GitHubIcon, MailIcon } from "./icons";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-[#0a1018] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">{t.contactTitle}</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/55 sm:text-base">{t.contactDesc}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center gap-2 rounded-xl bg-[#FF6700] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#e85e00]"
          >
            <MailIcon className="h-4 w-4" />
            {t.contactEmail}
          </a>
          <a
            href={ISSUES_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            <GitHubIcon className="h-4 w-4" />
            {t.contactIssues}
            <ExternalLinkIcon className="h-3.5 w-3.5 opacity-60" />
          </a>
        </div>

        <p className="mt-6 break-all text-xs text-white/40" dir="ltr">
          {CONTACT_EMAIL}
        </p>
      </div>
    </section>
  );
}
