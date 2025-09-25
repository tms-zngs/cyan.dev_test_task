import Container from "../Container/Container";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import Image from "next/image";
import Menu from "@/public/images/menu.png";
import { sansation } from "@/fonts";

const Header = () => {
  return (
    <section id="header" className="mb-6 mt-6">
      <Container>
        <div className="flex items-center justify-between">
          <h2
            className={
              sansation.className + " font-bold text-base uppercase text-white"
            }
          >
            Aleko <span className="text-gradient">Sokurashvili</span>
          </h2>
          <LocaleSwitcher />
          <Image src={Menu} alt="menu" className="w-[26px] h-[17px]" />
        </div>
      </Container>
    </section>
  );
};

export default Header;
