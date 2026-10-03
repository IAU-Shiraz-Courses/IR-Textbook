import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { VersionsSection } from "./components/VersionsSection";
import { ChaptersSection } from "./components/ChaptersSection";
import { AcademicSection } from "./components/AcademicSection";
import { LicenseSection } from "./components/LicenseSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function AppShell() {
  const { dir, lang } = useLanguage();

  return (
    <div
      dir={dir}
      lang={lang}
      className="min-h-screen bg-[#0d1520] font-[Vazirmatn,Inter,sans-serif] antialiased"
    >
      <Header />
      <main>
        <Hero />
        <VersionsSection />
        <ChaptersSection />
        <AcademicSection />
        <LicenseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  );
}
