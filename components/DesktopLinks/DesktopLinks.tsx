"use client";

import { useTranslations } from "next-intl";

const DesktopLinks = () => {
  const t = useTranslations("DesktopLinks");
  return (
    <ul className="flex flex-row gap-[28px]">
      <li className="text-white font-medium text-[16px] cursor-pointer">
        {t("1")}
      </li>
      <li className="text-white font-medium text-[16px] cursor-pointer">
        {t("2")}
      </li>
      <li className="text-white font-medium text-[16px] cursor-pointer">
        {t("3")}
      </li>
      <li className="text-white font-medium text-[16px] cursor-pointer">
        {t("4")}
      </li>
      <li className="text-white font-medium text-[16px] cursor-pointer">
        {t("5")}
      </li>
    </ul>
  );
};

export default DesktopLinks;
