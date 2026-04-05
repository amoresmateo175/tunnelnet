export default function About() {
  return (
    <section id="services" className="py-28 px-6 border-t border-secondary">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for Businesses That Can’t Afford{" "}
            <span className="text-accent">Downtime</span>
          </h2>

          <p className="text-secondary mb-6 text-lg">
            TunnelNet delivers enterprise-grade network management,
            proactive monitoring, and cybersecurity solutions designed
            to keep your infrastructure secure, optimized, and always online.
          </p>

          <p className="text-secondary mb-8">
            We don’t just react to problems — we prevent them. Our team
            continuously monitors your systems, identifies risks early,
            and ensures your network performs at peak efficiency.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold text-accent">99.99%</p>
              <p className="text-secondary text-sm">Uptime</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-accent">24/7</p>
              <p className="text-secondary text-sm">Monitoring</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-accent">&lt;1h</p>
              <p className="text-secondary text-sm">Response Time</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (FEATURE CARDS) */}
        <div className="grid gap-6">
          
          <div className="p-6 rounded-2xl border border-secondary hover:border-accent transition">
            <h3 className="text-xl font-semibold mb-2">
              Proactive Monitoring
            </h3>
            <p className="text-secondary">
              Detect and resolve issues before they impact your business operations.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-secondary hover:border-accent transition">
            <h3 className="text-xl font-semibold mb-2">
              Advanced Security
            </h3>
            <p className="text-secondary">
              Protect your infrastructure with enterprise-level cybersecurity solutions.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-secondary hover:border-accent transition">
            <h3 className="text-xl font-semibold mb-2">
              Scalable Infrastructure
            </h3>
            <p className="text-secondary">
              Grow your network seamlessly with flexible and scalable solutions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}