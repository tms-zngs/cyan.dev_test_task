"use client";

import Container from "../Container/Container";
import PriceContainer from "../PriceContainer/PriceContainer";
import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { Tariff, fetchTariffs } from "@/lib/getTariffs"; // путь к твоему файлу с fetchTariffs

const Tarifs = () => {
  const locale = useLocale();
  const [tariffs, setTariffs] = useState<Tariff[]>([]);

  useEffect(() => {
    fetchTariffs(locale).then(setTariffs).catch(console.error);
  }, [locale]);

  // стили по индексам карточек
  const cardStyles = [
    {
      background: "#0c0117",
      boxShadow: "inset 4px 6px 10px 4px rgba(167, 93, 243, 0.2)",
      textColor: "text-white",
    },
    {
      background: "#fff",
      boxShadow: "inset 4px 6px 10px 4px rgba(167, 93, 243, 0.2)",
      textColor: "text-black",
    },
    {
      background:
        "linear-gradient(121deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)",
      boxShadow: "inset 4px 6px 10px 4px rgba(167, 93, 243, 0.2)",
      textColor: "text-white",
    },
  ];

  return (
    <section id="tarifs" className="mb-[132px]">
      <Container>
        <div className="flex flex-col gap-[26px]">
          <h2 className="font-bold text-[1.5rem] uppercase text-center text-white">
            Тарифи
          </h2>

          {tariffs.map((tariff, index) => (
            <PriceContainer
              key={tariff.id}
              background={cardStyles[index].background}
              boxShadow={cardStyles[index].boxShadow}
            >
              <h3
                className={`text-2xl font-bold mb-4 ${cardStyles[index].textColor}`}
              >
                {tariff.tarif}
              </h3>

              <div
                className={`flex items-baseline gap-2 mb-4 ${cardStyles[index].textColor}`}
              >
                <span className="text-3xl font-extrabold">
                  {tariff.price} $
                </span>
                {tariff.oldPrice && (
                  <span className="line-through text-gray-400">
                    {tariff.oldPrice} $
                  </span>
                )}
              </div>

              <ul
                className={`mb-6 list-disc list-inside space-y-1 text-sm ${cardStyles[index].textColor}`}
              >
                {tariff.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <button className="w-full py-2 bg-purple-500 text-white rounded-lg hover:opacity-90 transition">
                {locale === "ua" ? "Придбати" : "Buy"}
              </button>
            </PriceContainer>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Tarifs;
