import { useLanguage } from "../context/LanguageContext";
import { ExternalLinkIcon } from "./icons";

const authors = [
  {
    name: "حمید نامجو",
    link: "https://hamidnamjoo.com/",
  },
  {
    name: "امیرحسین همتی",
    link: "https://github.com/AmirHosseinHemati",
  },
  {
    name: "علی مجاهد",
    link: "https://github.com/alim0jahed",
  },
  {
    name: "علی نیکوان",
    link: "",
  },
  {
    name: "امیرمحمد اسدجو",
    link: "https://github.com/Amir-Mohammd-Asadjoo",
  },
];

const professorLink = "https://www.linkedin.com/in/amin-eskandari-1756a73b/";

export function AcademicSection() {
  const { t } = useLanguage();

  const rows: Array<[string, string]> = [
    [t.university, t.universityVal],
    [t.faculty, t.facultyVal],
    [t.course, t.courseVal],
    [t.term, t.termVal],
    [t.professor, t.professorVal],
  ];

  return (
    <section className="bg-[#0a1018] py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            {t.academicTitle}
          </h2>

          <dl className="mt-8 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            {rows.map(([label, value], index) => (
              <div
                key={`${label}-${index}`}
                className="flex items-center justify-between gap-4 px-5 py-4 text-sm sm:text-base"
              >
                <dt className="font-semibold text-white/45">{label}</dt>

                <dd className="text-right font-bold text-white">
                  {label === t.professor && professorLink ? (
                    <a
                      href={professorLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 transition hover:text-[#3A9679]"
                    >
                      {value}
                      <ExternalLinkIcon className="h-4 w-4" />
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            {t.authorsTitle}
          </h2>

          <p className="mt-3 text-sm leading-7 text-white/55">
            {t.authorsSubtitle}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {authors.map((author, index) => {
              const content = (
                <>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#3A9679] to-[#1B263B] text-sm font-extrabold text-white">
                      {author.name.charAt(0)}
                    </span>

                    <div className="flex min-w-0 items-center gap-2">
                      <p className="text-sm font-extrabold text-white">
                        {author.name}
                      </p>

                      {author.link && (
                        <ExternalLinkIcon className="h-3.5 w-3.5 shrink-0 text-white/40 transition group-hover:text-[#3A9679]" />
                      )}
                    </div>
                  </div>

                  <p className="mt-3 text-xs leading-6 text-white/50">
                    {t.authorRole}
                  </p>
                </>
              );

              return author.link ? (
                <a
                  key={`${author.name}-${index}`}
                  href={author.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#3A9679]/50"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={`${author.name}-${index}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
