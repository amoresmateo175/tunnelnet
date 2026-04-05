export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-28 max-w-5xl mx-auto">
      
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
        Secure & Scalable{" "}
        <span className="text-accent">Network Solutions</span>
      </h1>

      <p className="text-lg text-secondary mb-10 max-w-2xl">
        TunnelNet delivers enterprise-grade network monitoring,
        cybersecurity, and infrastructure management.
      </p>

      <div className="flex gap-4">
        <button className="bg-accent text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
          Free Audit
        </button>

        <button className="border border-secondary px-8 py-4 rounded-xl hover:border-accent transition">
          Learn More
        </button>
      </div>
    </section>
  );
}