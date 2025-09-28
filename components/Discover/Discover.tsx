"use client";
import { useState } from "react";
import Container from "../Container/Container";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";
import { useTranslations } from "next-intl";
import GlowCircle from "../GlowCircle/GlowCircle";
import BuyBtn from "../MainBtn/MainBtn";

const Discover = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const t = useTranslations("discover");
  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <section
      id="discover"
      className="mb-[48px] lg:mt-[60px] lg:mb-[66px] relative overflow-hidden"
    >
      <Container>
        <div className="py-[114px] lg:py-[62px] z-10">
          <h2 className="font-bold text-[20px] lg:text-[36px] uppercase text-center text-white leading-[1.3] mb-[20px] lg:w-[500px] lg:mx-auto">
            {t("h2_start")}
            <span
              className="block bg-[linear-gradient(84deg,#5bdbfd_0%,#7375ff_40.3%,#df93ff_79.87%,#e56f8c_100%)]
                bg-clip-text text-transparent font-bold text-[20px] lg:text-[36px] text-center"
            >
              {t("h2_span")}
            </span>
          </h2>
          <h3 className="font-medium text-[14px] lg:text-[24px] lg:w-[460px] lg:mx-auto text-center text-white px-[20px] mb-[62px] lg:mb-[44px]">
            {t("p")}
          </h3>
          <div className="flex items-center justify-center">
            <BuyBtn
              text={t("btn")}
              onClick={openModal}
              style={{
                padding: "24px 50px",
                boxShadow: "inset 4px 6px 10px 4px rgba(167, 93, 243, 0.2)",
                background:
                  "linear-gradient(121deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)",
              }}
              className="w-[268px] lg:w-[534px] lg:h-[74px] flex items-center justify-start lg:justify-center pl-[16px] lg:pl-0"
            />
          </div>
        </div>
      </Container>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Form onSuccess={() => setIsModalOpen(false)} />
      </Modal>
      <GlowCircle className="absolute top-[-120px] left-[-120px] " />
      <GlowCircle className="absolute bottom-[-120px] right-[-120px] " />
    </section>
  );
};

export default Discover;
