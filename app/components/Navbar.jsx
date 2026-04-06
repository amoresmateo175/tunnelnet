import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-secondary">
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

      {/* Botón hamburguesa para pantallas pequeñas */}
      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-6 h-0.5 bg-accent"></span>
        <span className="block w-6 h-0.5 bg-accent"></span>
        <span className="block w-6 h-0.5 bg-accent"></span>
      </button>

      {/* Menú desplegable para móviles */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
          <a href="#plans" className="hover:text-accent transition" onClick={() => setIsOpen(false)}>
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
      )}
    </nav>
  );
}