import Discover from "@/components/Discover/Discover";
import GlowCircle from "@/components/GlowCircle/GlowCircle";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Tarifs from "@/components/Tarifs/Tarifs";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations("HomePage");
  const BASE_URL =
    "https://cyan-dev-test-task-e3j18z6uh-tomas-zingis-projects.vercel.app";
  const currentPath = "/";
  const alternates = routing.locales.map((lang: string) => ({
    hrefLang: lang,
    href: `${BASE_URL}/${lang}${currentPath}`,
  }));
  alternates.push({
    hrefLang: "x-default",
    href: `${BASE_URL}/${routing.defaultLocale}${currentPath}`,
  });

  return {
    title: t("seo_title"),
    description: t("seo_description"),
    alternates: {
      canonical: `${BASE_URL}/${locale}${currentPath}`,
      languages: alternates,
    },
  };
}

const HomePage = async () => {
  return (
    <div className="relative flex flex-col bg-[#0c0117] overflow-hidden">
      <GlowCircle className="absolute top-[500px] left-[-55px]" />
      <GlowCircle className="absolute top-[185px] right-[-10px] bg-[#a75df3]" />
      <GlowCircle className="absolute top-[970px] right-[-90px]" />
      <Header />
      <Hero />
      <Tarifs />
      <Discover />
    </div>
  );
};

export default HomePage;
