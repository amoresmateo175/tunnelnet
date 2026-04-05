export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-secondary">
      <h1 className="text-2xl font-bold text-accent">TunnelNet</h1>

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
    </nav>
  );
}