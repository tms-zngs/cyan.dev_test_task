import Discover from "@/componets/Discover/Discover";
import Header from "@/componets/Header/Header";
import Hero from "@/componets/Hero/Hero";
import Tarifs from "@/componets/Tarifs/Tarifs";
import { routing } from "@/i18n/routing";

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const HomePage = async () => {
  // const t = await getTranslations("HomePage");
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
