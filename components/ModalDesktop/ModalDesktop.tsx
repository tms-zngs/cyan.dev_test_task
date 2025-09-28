"use client";

import { useEffect, useState } from "react";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export default function ModalDesktop({
  isOpen,
  onClose,
  children,
}: ModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Логика блокировки скролла и управления видимостью...
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = "";
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Закрытие по клику на фон (оверлей)
    if (e.target === e.currentTarget) onClose();
  };

  return (
    // 1. ВНЕШНИЙ DIV: ОВЕРЛЕЙ И ЦЕНТРИРОВАНИЕ
    <div
      // Стиль оверлея: Фиксированный, на весь экран, с фоном, центрирование Flexbox
      className={`
        fixed inset-0 z-50 flex items-center justify-center 
        bg-black/70 backdrop-blur-sm 
        transition-opacity duration-300 
        ${isOpen ? "opacity-100" : "opacity-0"}
      `}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      {/* 2. ВНУТРЕННИЙ DIV: САМО ОКНО МОДАЛКИ С ФИКСИРОВАННЫМИ РАЗМЕРАМИ И СТИЛЯМИ */}
      <div
        // Стиль окна: Фиксированные размеры, фон, тени, анимация масштаба
        className={`
          relative rounded-[28px] w-[410px] h-[491px] 
          bg-[#0c0117] shadow-[0_0_50px_rgba(167,93,243,0.3),_inset_4px_6px_10px_4px_rgba(167,93,243,0.2)]
          transform transition-transform duration-300
          ${isOpen ? "scale-100" : "scale-95"}
        `}
        // Убираем onClick={handleBackdropClick} с этого div!
      >
        <button
          className="absolute top-4 right-4 cursor-pointer z-10" // z-10 добавлено для уверенности
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg className="stroke-white fill-white w-[17px] h-[17px]">
            <use href="/sprite.svg#icon-close"></use>
          </svg>
        </button>
        <div className="w-full h-full flex flex-col justify-center items-center px-4">
          {children}
        </div>
      </div>
    </div>
  );
}
// <div className="rounded-[28px] w-[410px] h-[491px] bg-[#0c0117] shadow-[inset_4px_6px_10px_4px_rgba(167,93,243,0.2)] overflow-hidden p-6">
//   {children}
// </div>
