"use client";

import { useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Управляем появлением/исчезновением
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 300); // время анимации
      document.body.style.overflow = "";
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0c0117] transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative w-full h-full flex flex-col justify-center items-center bg-[#0c0117] transform transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        {/* Кнопка закрытия */}
        <button
          className="absolute top-4 right-4 cursor-pointer"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg className="stroke-white fill-white w-[17px] h-[17px]">
            <use href="/sprite.svg#icon-close"></use>
          </svg>
        </button>

        {/* Контент */}
        <div className="w-full h-full flex flex-col justify-center items-center px-4">
          {children}
        </div>
      </div>
    </div>
  );
}
