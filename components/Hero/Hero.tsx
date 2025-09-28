"use client";

import { useState } from "react";
import Container from "../Container/Container";
import Image from "next/image";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import { useTranslations } from "next-intl";
import MainBtn from "../MainBtn/MainBtn";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const t = useTranslations("hero");

  return (
    <section id="hero" className="mb-[132px]">
      <Container>
        <div className="relative lg:mb-[42px]">
          <div className="lg:hidden">
            <Image
              src="/images/image-hero-mobile.jpg"
              width={320}
              height={350}
              quality={100}
              priority
              alt="hero"
              className="rounded-[1.3rem]"
            />
          </div>
          <div className="hidden lg:block">
            <Image
              src="/images/image-hero-desktop.jpg"
              width={644}
              height={466}
              quality={100}
              priority
              alt="hero"
              className="rounded-[1.3rem]"
            />
          </div>
          <div className="absolute top-[280px] flex flex-col items-center gap-[4px] lg:gap-[15px] lg:top-[210px] lg:left-[570px] lg:items-baseline">
            <h2
              className="text-[20px] font-bold text-center lg:text-[32px]
              bg-[linear-gradient(151deg,#90e8ff_0%,#9c9eff_40.3%,#e3a1ff_79.87%,#e56f8c_100%)] 
              bg-clip-text text-transparent whitespace-nowrap"
            >
              {t("h2")}
            </h2>
            <h1 className="font-extrabold text-[54px] uppercase text-center text-white leading-[1.1] lg:text-left lg:text-[96px]">
              {t("h1")}
            </h1>
          </div>
          <p className="text-white text-[14px] hidden font-normal text-center leading-[1.2] lg:absolute lg:top-[84px] lg:right-[60px] lg:text-[18px] lg:w-[396px] lg:block">
            {t("p")}
          </p>
        </div>

        <p className="text-white text-[14px] font-normal text-center mt-[170px] leading-[1.2] mb-[44px] lg:hidden">
          {t("p")}
        </p>
        <div className="flex flex-col items-center lg:items-start lg:w-[534px]">
          <MainBtn
            text={t("btn")}
            onClick={() => setIsModalOpen(true)}
            style={{ padding: "18px 50px", fontSize: "22px" }}
            className="w-full lg:w-[534px] lg:h-[74px] text-[22px] lg:ml-0"
          />
          <div className="flex self-center lg:self-center gap-2 mt-[10px]">
            <span className="font-semibold text-[1.25rem] leading-[1.07974] text-[#ff4a77]">
              {t("price1")}
            </span>
            <span className="font-semibold text-[0.88rem] leading-[1.54248] text-[#c5c5c5] line-through">
              {t("price2")}
            </span>
          </div>
        </div>
      </Container>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Form onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </section>
  );
}
