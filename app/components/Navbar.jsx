"use client";

import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState(0);

  // Ajusta la altura del menú para la animación
  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    }
  }, [menuRef, isOpen]);

  return (
    <nav className="relative flex items-center justify-between px-8 py-5 border-b border-secondary bg-white z-50">
      <h1 className="text-2xl font-bold text-accent">TunnelNet</h1>

      {/* Menú para pantallas grandes */}
      <div className="hidden md:flex gap-8 items-center">
        <a href="#plans" className="hover:text-accent transition">
          Plans
        </a>
        <a
          href="#contact"
          className="bg-accent text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
        >
          Contact
        </a>
      </div>

      {/* Botón hamburguesa para móviles */}
      <button
        className="md:hidden flex flex-col gap-1 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`block w-6 h-0.5 bg-accent transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-accent transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-accent transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Menú desplegable para móviles con animación */}
      <div
        ref={menuRef}
        style={{ maxHeight: isOpen ? `${menuHeight}px` : "0px" }}
        className="absolute top-full left-0 w-full overflow-hidden bg-white shadow-md flex flex-col items-center gap-4 py-0 md:hidden transition-[max-height] duration-500 ease-in-out"
      >
        <a
          href="#plans"
          className="hover:text-accent transition py-2"
          onClick={() => setIsOpen(false)}
        >
          Plans
        </a>
        <a
          href="#contact"
          className="bg-accent text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}