"use client";

import Container from "../Container/Container";
import PriceContainer from "../PriceContainer/PriceContainer";
import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Tariff, fetchTariffs } from "@/lib/getTariffs";
import { manrope } from "@/fonts";
import TarifBadge from "../TarifBadge/TarifBadge";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";

const Tarifs = () => {
  const locale = useLocale();
  const [tariffs, setTariffs] = useState<Tariff[]>([]);
  const t = useTranslations("Tarifs");
  const m = useTranslations("form");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchTariffs(locale).then(setTariffs).catch(console.error);
  }, [locale]);

  const cardStyles = [
    {
      background: "#0c0117",
      boxShadow: "inset 4px 6px 10px 4px rgba(167, 93, 243, 0.2)",
      textColor: "text-white",
      oldPriceColor: "text-white",
      buttonBg: "#fff",
      buttonTextColor: "text-black",
    },
    {
      background: "#fff",
      boxShadow: "inset 4px 6px 10px 4px rgba(167, 93, 243, 0.2)",
      textColor: "text-black",
      oldPriceColor: "text-black",
      buttonBg: "#000",
      buttonTextColor: "text-white",
    },
    {
      background:
        "linear-gradient(121deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)",
      textColor: "text-white",
      oldPriceColor: "text-white",
      buttonBg: "#000",
      buttonTextColor: "text-white",
    },
  ];

  return (
    <section id="tarifs" className="mb-[132px]">
      <Container>
        <div className="flex flex-col gap-[26px]">
          <h2 className="font-bold text-[1.5rem] uppercase text-center text-white">
            {t("h2")}
          </h2>

          {/* --- Первая карточка --- */}
          <PriceContainer
            background={cardStyles[0].background}
            boxShadow={cardStyles[0].boxShadow}
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3
                  className={`font-semibold text-[1rem] uppercase mb-4 ${cardStyles[0].textColor}`}
                >
                  {tariffs[0]?.tarif}
                </h3>

                <div
                  className={`flex justify-between items-end ${cardStyles[0].textColor}`}
                  style={{ marginBottom: "30px" }}
                >
                  <span
                    className={`${manrope.className} font-bold text-[4rem] uppercase leading-none`}
                  >
                    {tariffs[0]?.price} $
                  </span>
                  {tariffs[0]?.oldPrice && (
                    <span
                      className={`${manrope.className} font-bold text-[1.25rem] uppercase line-through ${cardStyles[0].oldPriceColor}`}
                    >
                      {tariffs[0].oldPrice} $
                    </span>
                  )}
                </div>

                <ul className="flex flex-col gap-[14px]">
                  {tariffs[0]?.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-center gap-[8px] uppercase font-semibold text-[1rem] leading-[1.4375] ${cardStyles[0].textColor}`}
                    >
                      <svg
                        className={`w-[20px] h-[20px] flex-shrink-0 fill-current ${cardStyles[0].textColor}`}
                      >
                        <use href="/sprite.svg#icon-point-list" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-auto rounded-[3.25rem] w-[16.56rem] h-[2.94rem] flex items-center justify-center cursor-pointer transition hover:opacity-90 ${cardStyles[0].buttonTextColor}`}
                style={{ backgroundColor: cardStyles[0].buttonBg }}
                onClick={() => setIsModalOpen(true)}
              >
                {locale === "ua" ? "Купити" : "Buy"}
              </button>
            </div>
          </PriceContainer>

          {/* --- Вторая карточка --- */}
          <div className="relative">
            {/* Бэйдж поверх карточки */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 z-10"
              style={{ top: `-${2.62 / 2}rem` }}
            >
              <TarifBadge
                text="BEST SELLER"
                background="linear-gradient(121deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)"
                textColor="#fff"
                boxShadow="0 4px 16px 1px rgba(0, 0, 0, 0.25)"
              />
            </div>

            {/* Сама карточка */}
            <PriceContainer
              background={cardStyles[1].background}
              boxShadow={cardStyles[1].boxShadow}
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-row justify-between items-center mb-4">
                    <h3
                      className={`font-semibold text-[1rem] uppercase ${cardStyles[1].textColor}`}
                    >
                      {tariffs[1]?.tarif}
                    </h3>
                    <TarifBadge
                      text="PRO"
                      background="#000" // или "black"
                      textColor="#fff"
                      boxShadow="0 4px 16px 1px rgba(0, 0, 0, 0.25)"
                    />
                  </div>

                  <div
                    className={`flex justify-between items-end ${cardStyles[1].textColor}`}
                    style={{ marginBottom: "30px" }}
                  >
                    <span
                      className={`${manrope.className} font-bold text-[4rem] uppercase leading-none`}
                    >
                      {tariffs[1]?.price} $
                    </span>
                    {tariffs[1]?.oldPrice && (
                      <span
                        className={`${manrope.className} font-bold text-[1.25rem] uppercase line-through ${cardStyles[1].oldPriceColor}`}
                      >
                        {tariffs[1].oldPrice} $
                      </span>
                    )}
                  </div>

                  <ul className="flex flex-col gap-[14px]">
                    {tariffs[1]?.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`flex items-center gap-[8px] uppercase font-semibold text-[1rem] leading-[1.4375] ${cardStyles[1].textColor}`}
                      >
                        <svg
                          className={`w-[20px] h-[20px] flex-shrink-0 fill-current ${cardStyles[1].textColor}`}
                        >
                          <use href="/sprite.svg#icon-point-list" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`mt-auto rounded-[3.25rem] w-[16.56rem] h-[2.94rem] flex items-center cursor-pointer justify-center transition hover:opacity-90 ${cardStyles[1].buttonTextColor}`}
                  style={{ backgroundColor: cardStyles[1].buttonBg }}
                  onClick={() => setIsModalOpen(true)}
                >
                  {locale === "ua" ? "Купити" : "Buy"}
                </button>
              </div>
            </PriceContainer>
          </div>

          {/* --- Третья карточка --- */}
          <PriceContainer
            background={cardStyles[2].background}
            boxShadow={cardStyles[2].boxShadow}
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex flex-row justify-between items-center mb-4">
                  <h3
                    className={`font-semibold text-[1rem] uppercase ${cardStyles[2].textColor}`}
                  >
                    {tariffs[2]?.tarif}
                  </h3>
                  <TarifBadge
                    text="EXPERT  "
                    background="#000" // или "black"
                    textColor="#6495ED"
                    boxShadow="0 4px 16px 1px rgba(0, 0, 0, 0.25)"
                  />
                </div>

                <div
                  className={`flex justify-between items-end ${cardStyles[2].textColor}`}
                  style={{ marginBottom: "30px" }}
                >
                  <span
                    className={`${manrope.className} font-bold text-[4rem] uppercase leading-none`}
                  >
                    {tariffs[2]?.price} $
                  </span>
                  {tariffs[2]?.oldPrice && (
                    <span
                      className={`${manrope.className} font-bold text-[1.25rem] uppercase line-through ${cardStyles[2].oldPriceColor}`}
                    >
                      {tariffs[2].oldPrice} $
                    </span>
                  )}
                </div>

                <ul className="flex flex-col gap-[14px]">
                  {tariffs[2]?.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-center gap-[8px] uppercase font-semibold text-[1rem] leading-[1.4375] ${cardStyles[2].textColor}`}
                    >
                      <svg
                        className={`w-[20px] h-[20px] flex-shrink-0 fill-current ${cardStyles[2].textColor}`}
                      >
                        <use href="/sprite.svg#icon-point-list" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-auto rounded-[3.25rem] w-[16.56rem] h-[2.94rem] flex items-center justify-center cursor-pointer transition hover:opacity-90 ${cardStyles[2].buttonTextColor}`}
                style={{ backgroundColor: cardStyles[2].buttonBg }}
                onClick={() => setIsModalOpen(true)}
              >
                {locale === "ua" ? "Купити" : "Buy"}
              </button>
            </div>
          </PriceContainer>
        </div>
      </Container>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="font-bold text-[1.5rem] uppercase text-center text-white mb-[36px] mt-[160px]">
          {m("h2")}
        </h2>
        <Form onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </section>
  );
};

export default Tarifs;
