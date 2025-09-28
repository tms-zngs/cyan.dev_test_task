"use client";

import Container from "../Container/Container";
import PriceContainer from "../PriceContainer/PriceContainer";
import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Tariff, fetchTariffs } from "@/lib/getTariffs";
import { manrope } from "@/fonts";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";
import LevelBadge from "../LevelBadge/LevelBadge";
import GlowCircle from "../GlowCircle/GlowCircle";

const Tarifs = () => {
  const locale = useLocale();
  const [tariffs, setTariffs] = useState<Tariff[]>([]);
  const t = useTranslations("Tarifs");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchTariffs(locale).then(setTariffs).catch(console.error);
  }, [locale]);

  return (
    <section id="tarifs" className="mb-[132px]">
      <Container>
        <div className="flex flex-col gap-[28px] lg:gap-[80px]">
          <h2 className="font-bold text-[24px] uppercase text-center text-white lg:text-[48px]">
            {t("h2")}
          </h2>
          <div className="flex flex-col gap-[26px] lg:flex-row lg:gap-[20px]">
            <PriceContainer
              className="relative overflow-hidden"
              style={{
                background: "#0c0117",
                boxShadow: "inset 4px 6px 10px 4px rgba(167, 93, 243, 0.2)",
              }}
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3
                    className={`flex items-center font-semibold text-[16px] lg:text-[20px] uppercase mb-[18px] text-white lg:h-[48px]`}
                  >
                    {tariffs[0]?.tarif}
                  </h3>
                  <div
                    className={`flex justify-between items-end text-white`}
                    style={{ marginBottom: "30px" }}
                  >
                    <span
                      className={`${manrope.className} font-bold text-[64px] lg:text-[74px] uppercase leading-none`}
                    >
                      {tariffs[0]?.price} $
                    </span>
                    {tariffs[0]?.oldPrice && (
                      <span
                        className={`${manrope.className} font-bold text-[1.25rem] uppercase line-through text-white`}
                      >
                        {tariffs[0].oldPrice} $
                      </span>
                    )}
                  </div>
                  <ul className="flex flex-col gap-[14px]">
                    {tariffs[0]?.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`flex items-center gap-[8px] uppercase font-semibold text-[1rem] leading-[1.4375] text-white`}
                      >
                        <svg
                          className={`w-[20px] h-[20px] flex-shrink-0 fill-current text-white`}
                        >
                          <use href="/sprite.svg#icon-point-list" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className={`mt-auto rounded-[3.25rem] py-[14px] lg:py-[18px] flex items-center justify-center cursor-pointer transition hover:opacity-90 font-semibold text-[14px] lg:text-[16px] text-[#0c0117] hover:shadow-lg duration-200 hover:scale-105`}
                  style={{ backgroundColor: "#fff" }}
                  onClick={() => setIsModalOpen(true)}
                >
                  {locale === "ua" ? "Купити" : "Buy"}
                </button>
              </div>
              <GlowCircle className="absolute top-[360px] left-[-86px]" />
              <GlowCircle className="absolute top-[-70px] right-[-160px] bg-[#a75df3] " />
            </PriceContainer>
            <div className="relative">
              <div
                className="absolute left-1/2 transform -translate-x-1/2 z-10"
                style={{ top: `-${2.62 / 2}rem` }}
              >
                <LevelBadge
                  text="BEST SELLER"
                  style={{
                    boxShadow: "0 4px 16px 1px rgba(0, 0, 0, 0.25)",
                    background:
                      "linear-gradient(121deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)",
                    color: "#fff",
                    padding: "12px 34px",
                    fontWeight: "700",
                    fontSize: "16px",
                    textTransform: "uppercase",
                  }}
                />
              </div>
              <PriceContainer
                style={{
                  background: "#fff",
                  boxShadow: "inset 4px 6px 10px 4px rgba(167, 93, 243, 0.2)",
                }}
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex flex-row justify-between items-center mb-[18px]">
                      <h3
                        className={`font-semibold text-[16px] lg:text-[20px] uppercase text-black`}
                      >
                        {tariffs[1]?.tarif}
                      </h3>
                      <LevelBadge
                        text="PRO"
                        style={{
                          background: "#0c0117",
                          padding: "12px 34px",
                          fontWeight: "700",
                          fontSize: "16px",
                          textTransform: "uppercase",
                        }}
                        textStyle={{
                          background:
                            "linear-gradient(121deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      />
                    </div>
                    <div
                      className={`flex justify-between items-end text-black`}
                      style={{ marginBottom: "30px" }}
                    >
                      <span
                        className={`${manrope.className} font-bold text-[64px] lg:text-[74px] uppercase leading-none`}
                      >
                        {tariffs[1]?.price} $
                      </span>
                      {tariffs[1]?.oldPrice && (
                        <span
                          className={`${manrope.className} font-bold text-[1.25rem] uppercase line-through text-black`}
                        >
                          {tariffs[1].oldPrice} $
                        </span>
                      )}
                    </div>
                    <ul className="flex flex-col gap-[14px]">
                      {tariffs[1]?.features.map((feature, i) => (
                        <li
                          key={i}
                          className={`flex items-center gap-[8px] uppercase font-semibold text-[1rem] leading-[1.4375] text-black`}
                        >
                          <svg
                            className={`w-[20px] h-[20px] flex-shrink-0 fill-current text-black`}
                          >
                            <use href="/sprite.svg#icon-point-list" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    className={`mt-auto rounded-[3.25rem] py-[14px] lg:py-[18px] flex items-center cursor-pointer justify-center transition hover:opacity-90 font-semibold text-[14px] lg:text-[16px] text-white hover:shadow-lg duration-200 hover:scale-105`}
                    style={{ backgroundColor: "#000" }}
                    onClick={() => setIsModalOpen(true)}
                  >
                    {locale === "ua" ? "Купити" : "Buy"}
                  </button>
                </div>
              </PriceContainer>
            </div>
            <PriceContainer
              style={{
                background:
                  "linear-gradient(121deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)",
                boxShadow: "inset 4px 6px 10px 4px rgba(167, 93, 243, 0.2)",
              }}
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-row justify-between items-center mb-[18px]">
                    <h3
                      className={`font-semibold text-[16px] lg:text-[20px] uppercase text-white`}
                    >
                      {tariffs[2]?.tarif}
                    </h3>
                    <LevelBadge
                      text="EXPERT"
                      style={{
                        background: "#fff",
                        padding: "12px 34px",
                        fontWeight: "700",
                        fontSize: "16px",
                        textTransform: "uppercase",
                      }}
                      textStyle={{
                        background:
                          "linear-gradient(121deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    />
                  </div>
                  <div
                    className={`flex justify-between items-end text-white`}
                    style={{ marginBottom: "30px" }}
                  >
                    <span
                      className={`${manrope.className} font-bold text-[64px] lg:text-[74px] uppercase leading-none`}
                    >
                      {tariffs[2]?.price} $
                    </span>
                    {tariffs[2]?.oldPrice && (
                      <span
                        className={`${manrope.className} font-bold text-[1.25rem] uppercase line-through text-white`}
                      >
                        {tariffs[2].oldPrice} $
                      </span>
                    )}
                  </div>
                  <ul className="flex flex-col gap-[14px]">
                    {tariffs[2]?.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`flex items-center gap-[8px] uppercase font-semibold text-[1rem] leading-[1.4375] text-white`}
                      >
                        <svg
                          className={`w-[20px] h-[20px] flex-shrink-0 fill-current text-white`}
                        >
                          <use href="/sprite.svg#icon-point-list" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className={`mt-auto rounded-[3.25rem] py-[14px] lg:py-[18px] flex items-center justify-center cursor-pointer transition hover:opacity-90 font-semibold text-[14px] lg:text-[16px] text-white hover:shadow-lg duration-200 hover:scale-105`}
                  style={{ backgroundColor: "#000" }}
                  onClick={() => setIsModalOpen(true)}
                >
                  {locale === "ua" ? "Купити" : "Buy"}
                </button>
              </div>
            </PriceContainer>
          </div>
        </div>
      </Container>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Form onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </section>
  );
};

export default Tarifs;
