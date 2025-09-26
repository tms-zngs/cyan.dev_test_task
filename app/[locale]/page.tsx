import Discover from "@/componets/Discover/Discover";
import Header from "@/componets/Header/Header";
import Hero from "@/componets/Hero/Hero";
import Tarifs from "@/componets/Tarifs/Tarifs";
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
    <div className="flex flex-col bg-[#0c0117]">
      <Header />
      <Hero />
      <Tarifs />
      <Discover />
    </div>
  );
};

export default HomePage;
