export interface ChapterFileSet {
  pdf: string;
  notebookRepo: string; // directory file name used for notebook (for display)
}

export interface Chapter {
  number: number;
  displayNumber: string; // persian ordinal word e.g. "اول"
  titleEn: string;
  titleFa: string;
  v1: { pdfUrl: string; notebookUrl: string } | null;
  v2: { pdfUrl: string; notebookUrl: string } | null;
}

const REPO = "IAU-Shiraz-Courses/IR-Textbook";
const RAW_BASE = `https://raw.githubusercontent.com/${REPO}/main`;
const BLOB_BASE = `https://github.com/${REPO}/blob/main`;

function links(version: "V1" | "V2", chFolder: string, pdfName: string, ipynbName: string) {
  return {
    pdfUrl: `${RAW_BASE}/${version}/${chFolder}/${pdfName}`,
    notebookUrl: `${BLOB_BASE}/${version}/${chFolder}/${ipynbName}`,
  };
}

const persianOrdinals: Record<number, string> = {
  1: "اول",
  2: "دوم",
  3: "سوم",
  4: "چهارم",
  5: "پنجم",
  6: "ششم",
  7: "هفتم",
  8: "هشتم",
  11: "یازدهم",
  13: "سیزدهم",
  14: "چهاردهم",
  15: "پانزدهم",
  19: "نوزدهم",
  20: "بیستم",
  21: "بیست و یکم",
};

interface RawChapterDef {
  number: number;
  folder: string;
  titleEn: string;
  titleFa: string;
  v1Pdf: string;
  v1Ipynb: string;
  v2Pdf: string;
  v2Ipynb: string;
}

const defs: RawChapterDef[] = [
  {
    number: 1,
    folder: "ch1",
    titleEn: "Boolean Retrieval",
    titleFa: "بازیابی بولی",
    v1Pdf: "IR-Ch1.pdf",
    v1Ipynb: "ch1.ipynb",
    v2Pdf: "ch1.pdf",
    v2Ipynb: "ch1.ipynb",
  },
  {
    number: 2,
    folder: "ch2",
    titleEn: "The Term Vocabulary and Postings Lists",
    titleFa: "واژگان اصطلاحات و فهرست‌های پستینگ",
    v1Pdf: "ch2.pdf",
    v1Ipynb: "ch2.ipynb",
    v2Pdf: "ch2.pdf",
    v2Ipynb: "ch2.ipynb",
  },
  {
    number: 3,
    folder: "ch3",
    titleEn: "Dictionaries and Tolerant Retrieval",
    titleFa: "دیکشنری‌ها و بازیابی مدارا با خطا",
    v1Pdf: "Ch3.pdf",
    v1Ipynb: "Ch3.ipynb",
    v2Pdf: "Ch3.pdf",
    v2Ipynb: "Ch3.ipynb",
  },
  {
    number: 4,
    folder: "ch4",
    titleEn: "Index Construction",
    titleFa: "ساخت نمایه",
    v1Pdf: "ch4.pdf",
    v1Ipynb: "ch4.ipynb",
    v2Pdf: "ch4.pdf",
    v2Ipynb: "ch4.ipynb",
  },
  {
    number: 5,
    folder: "ch5",
    titleEn: "Index Compression",
    titleFa: "فشرده‌سازی نمایه",
    v1Pdf: "ch5.pdf",
    v1Ipynb: "ch5.ipynb",
    v2Pdf: "ch5.pdf",
    v2Ipynb: "ch5.ipynb",
  },
  {
    number: 6,
    folder: "ch6",
    titleEn: "Scoring, Term Weighting and the Vector Space Model",
    titleFa: "امتیازدهی، وزن‌دهی ترم و مدل فضای برداری",
    v1Pdf: "ch6.pdf",
    v1Ipynb: "ch6.ipynb",
    v2Pdf: "ch6.pdf",
    v2Ipynb: "ch6.ipynb",
  },
  {
    number: 7,
    folder: "ch7",
    titleEn: "Computing Scores in a Complete Search System",
    titleFa: "محاسبهٔ امتیازات در یک سیستم جستجوی کامل",
    v1Pdf: "ch7.pdf",
    v1Ipynb: "ch7.ipynb",
    v2Pdf: "ch7.pdf",
    v2Ipynb: "ch7.ipynb",
  },
  {
    number: 8,
    folder: "ch8",
    titleEn: "Evaluation in Information Retrieval",
    titleFa: "ارزیابی در بازیابی اطلاعات",
    v1Pdf: "ch8.pdf",
    v1Ipynb: "ch8.ipynb",
    v2Pdf: "ch8.pdf",
    v2Ipynb: "ch8.ipynb",
  },
  {
    number: 11,
    folder: "ch11",
    titleEn: "Probabilistic Information Retrieval",
    titleFa: "بازیابی اطلاعات احتمالاتی",
    v1Pdf: "ch11.pdf",
    v1Ipynb: "ch11.ipynb",
    v2Pdf: "ch11.pdf",
    v2Ipynb: "ch11.ipynb",
  },
  {
    number: 13,
    folder: "ch13",
    titleEn: "Text Classification and Naive Bayes",
    titleFa: "دسته‌بندی متن و بیز ساده",
    v1Pdf: "ch13.pdf",
    v1Ipynb: "ch13.ipynb",
    v2Pdf: "ch13.pdf",
    v2Ipynb: "ch13.ipynb",
  },
  {
    number: 14,
    folder: "ch14",
    titleEn: "Vector Space Classification",
    titleFa: "دسته‌بندی در فضای برداری",
    v1Pdf: "ch14.pdf",
    v1Ipynb: "ch14.ipynb",
    v2Pdf: "ch14.pdf",
    v2Ipynb: "ch14.ipynb",
  },
  {
    number: 15,
    folder: "ch15",
    titleEn: "Support Vector Machines and Machine Learning on Documents",
    titleFa: "ماشین بردار پشتیبان و یادگیری ماشین روی اسناد",
    v1Pdf: "ch15.pdf",
    v1Ipynb: "ch15.ipynb",
    v2Pdf: "ch15.pdf",
    v2Ipynb: "ch15.ipynb",
  },
  {
    number: 19,
    folder: "ch19",
    titleEn: "Web Search Basics",
    titleFa: "مبانی جستجوی وب",
    v1Pdf: "ch19.pdf",
    v1Ipynb: "ch19.ipynb",
    v2Pdf: "ch19.pdf",
    v2Ipynb: "ch19.ipynb",
  },
  {
    number: 20,
    folder: "ch20",
    titleEn: "Web Crawling and Indexes",
    titleFa: "خزش وب و نمایه‌ها",
    v1Pdf: "ch20.pdf",
    v1Ipynb: "ch20.ipynb",
    v2Pdf: "ch20.pdf",
    v2Ipynb: "ch20.ipynb",
  },
  {
    number: 21,
    folder: "ch21",
    titleEn: "Link Analysis",
    titleFa: "تحلیل پیوند",
    v1Pdf: "ch21.pdf",
    v1Ipynb: "ch21.ipynb",
    v2Pdf: "ch21.pdf",
    v2Ipynb: "ch21.ipynb",
  },
];

export const chapters: Chapter[] = defs.map((d) => ({
  number: d.number,
  displayNumber: persianOrdinals[d.number] ?? String(d.number),
  titleEn: d.titleEn,
  titleFa: d.titleFa,
  v1: links("V1", d.folder, d.v1Pdf, d.v1Ipynb),
  v2: links("V2", d.folder, d.v2Pdf, d.v2Ipynb),
}));

export const REPO_URL = `https://github.com/${REPO}`;
export const V1_FOLDER_URL = `${BLOB_BASE}/V1`;
export const V2_FOLDER_URL = `${BLOB_BASE}/V2`;
export const LICENSE_V1_URL = `${BLOB_BASE}/V1/LICENSE`;
export const LICENSE_V2_URL = `${BLOB_BASE}/V2/LICENSE`;
export const CONTACT_EMAIL = "hamidrezanamjoomanesh@gmail.com";
export const ISSUES_URL = `${REPO_URL}/issues`;
