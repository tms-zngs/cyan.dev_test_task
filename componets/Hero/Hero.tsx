"use client";

import { useState } from "react";
import Container from "../Container/Container";
import Image from "next/image";
import DiscountButton from "../DiscountButton/DiscountButton";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="hero" className="mb-[132px]">
      <Container>
        <div className="relative">
          <Image
            src="/images/image-hero-mobile.jpg"
            width={320}
            height={350}
            quality={100}
            priority
            alt="hero"
            className="rounded-[1.3rem]"
          />
          <div className="absolute left-1/2 -translate-x-1/2 top-[273px] flex flex-col items-center gap-[4px]">
            <h2
              className="text-[1.31rem] font-bold text-center 
              bg-[linear-gradient(151deg,#90e8ff_0%,#9c9eff_40.3%,#e3a1ff_79.87%,#e56f8c_100%)] 
              bg-clip-text text-transparent whitespace-nowrap"
            >
              Від 0 до 100,000 за 90 днів
            </h2>
            <h1 className="font-extrabold text-[3.38rem] uppercase text-center text-white leading-[1.1]">
              Секрети вирусних відео
            </h1>
          </div>
        </div>

        <p className="text-white text-[0.88rem] font-normal text-center mt-[170px] leading-[1.2] mb-[44px]">
          Стати відомим лише за 3 місяці без витрат на рекламу! Дізнайтеся ключ
          до створення вірусного контенту та перетворите свої ідеї на мільйонні
          перегляди.
        </p>

        <DiscountButton
          width="19.56rem"
          text="Придбати зі знижкою"
          discount="-50%"
          onClick={() => setIsModalOpen(true)}
          background="#fff"
          boxShadow="inset 4px 6px 11px 4px rgba(167, 93, 243, 0.2)"
        />

        <div className="flex justify-center items-center gap-2 mt-[11px]">
          <span className="font-semibold text-[1.25rem] leading-[1.07974] text-[#ff4a77]">
            1000 грн
          </span>
          <span className="font-semibold text-[0.88rem] leading-[1.54248] text-[#c5c5c5] line-through">
            2000 грн
          </span>
        </div>
      </Container>

      {/* Модалка с формой */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="font-bold text-[1.5rem] uppercase text-center text-white mb-[36px] mt-[160px]">
          Укажіть свої дані
        </h2>
        <Form />
      </Modal>
    </section>
  );
}
