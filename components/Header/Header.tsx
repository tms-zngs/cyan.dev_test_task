"use client";

import Container from "../Container/Container";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import Image from "next/image";
import Menu from "@/public/images/menu.png";
import { sansation } from "@/fonts";
import DesktopLinks from "../DesktopLinks/DesktopLinks";
import { useTranslations } from "next-intl";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";
import DesktopBtn from "../DesktopBtn/DesktopBtn";
import { useState } from "react";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations("hero");
  return (
    <header
      id="header"
      className="
          mt-[50px] mb-[24px] lg:mt-[40px] lg:mb-[68px] 
          transition-all duration-300
        "
    >
      <Container>
        <div className="flex items-center justify-between py-[8px]">
          <h2
            className={
              sansation.className +
              " font-bold text-base uppercase text-white lg:text-lg"
            }
          >
            Aleko <span className="text-gradient">Sokurashvili</span>
          </h2>
          <div className="hidden lg:block">
            <DesktopLinks />
          </div>
          <LocaleSwitcher />
          <div className="lg:hidden">
            <Image src={Menu} alt="menu" className="w-[26px] h-[17px]" />
          </div>
          <div className="hidden lg:block">
            <DesktopBtn
              text={t("btn")}
              showCircle={false}
              onClick={() => setIsModalOpen(true)}
              style={{
                padding: "0px 16px",
                height: "40px",
                width: "190px",
                color: "#fff",
                background:
                  "linear-gradient(84deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)",
              }}
            />
          </div>
        </div>
      </Container>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Form onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </header>
  );
};

export default Header;
