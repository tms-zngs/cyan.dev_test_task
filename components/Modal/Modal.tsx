"use client";

import { useEffect, useState } from "react";
import GlowCircle from "../GlowCircle/GlowCircle";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = "";

      return () => clearTimeout(timeout);
    }
  }, [isOpen, onClose]);

  if (!isOpen && !isVisible) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
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
        <button
          className="absolute top-4 right-4 cursor-pointer"
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
      <GlowCircle className="absolute top-[220px] left-[-150px]" />
      <GlowCircle className="absolute bottom-[-60px] right-[-100px] bg-[#a75df3]" />
    </div>,
    document.body
  );
}
