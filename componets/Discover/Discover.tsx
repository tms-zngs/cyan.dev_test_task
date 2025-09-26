"use client";
import { useState } from "react";
import Container from "../Container/Container";
import DiscountButton from "../DiscountButton/DiscountButton";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";
import { useTranslations } from "next-intl";

const Discover = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const t = useTranslations("discover");
  const m = useTranslations("form");
  return (
    <section id="discover" className="mb-[48px]">
      <Container>
        <h2 className="font-bold text-[1.25rem] uppercase text-center text-white leading-[1.3] mb-[20px]">
          {t("h2_start")}
          <span
            className="block bg-[linear-gradient(84deg,#5bdbfd_0%,#7375ff_40.3%,#df93ff_79.87%,#e56f8c_100%)] 
               bg-clip-text text-transparent font-bold text-[1.25rem] text-center"
          >
            {t("h2_span")}
          </span>
        </h2>
        <h3 className="font-medium text-[0.88rem] text-center text-white px-[20px] mb-[62px]">
          {t("p")}
        </h3>
        <div className="flex items-center justify-center">
          <DiscountButton
            width="16.75rem"
            text={t("btn")}
            textOffset="-2rem"
            onClick={() => setIsModalOpen(true)}
            background="linear-gradient(121deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)"
            boxShadow="inset 4px 6px 10px 4px rgba(167, 93, 243, 0.2)"
          />
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

export default Discover;
