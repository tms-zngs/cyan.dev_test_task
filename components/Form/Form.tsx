"use client";

import { useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

interface FormData {
  name: string;
  tg: string;
  email: string;
}

interface FormProps {
  onSuccess?: () => void;
}

export default function Form({ onSuccess }: FormProps) {
  const t = useTranslations("form");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    tg: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [hasToast, setHasToast] = useState(false);

  useEffect(() => {
    if (status === "success" && !hasToast) {
      toast.success("відправленно!");
      setHasToast(true);
      onSuccess?.();
    } else if (status === "error" && !hasToast) {
      toast.error("помилка!");
      setHasToast(true);
    }
  }, [status, onSuccess, hasToast]);

  useEffect(() => {
    if (status === "idle") {
      setHasToast(false);
    }
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await axios.post("/api/send-to-telegram", formData);

      if (response.status === 200) {
        setStatus("success");
        setFormData({ name: "", tg: "", email: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("помилка при відправці в Telegram:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-[19.81rem] h-full">
      <div className="flex flex-col">
        <h2 className="font-bold text-[1.5rem] uppercase text-center text-white mb-[36px] mt-[160px] lg:mt-[0px]">
          {t("h2")}
        </h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder={t("name")}
            value={formData.name}
            onChange={handleChange}
            required
            className="placeholder:text-[#0c0117] placeholder:font-normal placeholder:text-[14px] pl-5 rounded-[0.88rem] w-full h-[2.88rem] bg-white shadow-[0_10px_78px_1px_rgba(121,121,121,0.12)]"
          />
          <input
            type="text"
            name="tg"
            placeholder={t("tg")}
            value={formData.tg}
            onChange={handleChange}
            required
            className="placeholder:text-[#0c0117] placeholder:font-normal placeholder:text-[14px] pl-5 rounded-[0.88rem] w-full h-[2.88rem] bg-white shadow-[0_10px_78px_1px_rgba(121,121,121,0.12)]"
          />
          <input
            type="email"
            name="email"
            placeholder={t("email")}
            value={formData.email}
            onChange={handleChange}
            required
            className="placeholder:text-[#0c0117] placeholder:font-normal placeholder:text-[14px] pl-5 rounded-[0.88rem] w-full h-[2.88rem] bg-white shadow-[0_10px_78px_1px_rgba(121,121,121,0.12)]"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="font-semibold text-[14px] leading-[1.42857] text-center text-[#0c0117] mt-auto lg:mt-[40px] mb-[40px] rounded-[0.62rem] w-full h-[3.12rem] py-[15px] cursor-pointer bg-white transition-opacity duration-300 hover:opacity-80 disabled:opacity-50"
      >
        {isSubmitting ? "sending..." : t("btn")}
      </button>
    </form>
  );
}
