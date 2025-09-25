import Image from "next/image";
import Menu from "@/public/images/menu.png";
import LocaleSwitcher from "@/componets/LocaleSwitcher/LocaleSwitcher";
import Container from "@/componets/Container/Container";

const Header = () => {
  return (
    <section id="header" className="mb-[3.125rem]">
      <Container>
        <div className="flex items-center justify-between bg-amber-300">
          <h2 className="font-sansation font-bold text-base uppercase text-white">
            Aleko Sokurashvili
          </h2>
          <LocaleSwitcher />
          <Image src={Menu} alt="menu" className="w-[26px] h-[17px]" />
        </div>
      </Container>
    </section>
  );
};

export default Header;
