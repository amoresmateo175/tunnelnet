const plans = [
  {
    name: "Basic",
    price: "$49/mo",
    features: ["Monitoring", "Alerts", "Basic Support"],
  },
  {
    name: "Professional",
    price: "$99/mo",
    popular: true,
    features: ["Everything in Basic", "Firewall", "VPN", "Priority Support"],
  },
  {
    name: "Premium",
    price: "$199/mo",
    features: ["Everything in Pro", "24/7 Support", "Cybersecurity"],
  },
];

export default function Pricing() {
  return (
    <section id="plans" className="py-28 px-6">
      
      <h2 className="text-4xl font-bold text-center mb-16">
        Plans Built for Reliability
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto items-stretch">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`h-full flex flex-col p-8 rounded-2xl border shadow-lg backdrop-blur ${
              plan.popular
                ? "border-accent"
                : "border-secondary"
            }`}
          >
            {/* Header */}
            <div className="mb-6">
              {plan.popular && (
                <p className="text-accent font-semibold mb-2">
                  Most Popular
                </p>
              )}

              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-3xl mt-2">{plan.price}</p>
            </div>

            {/* Features */}
            <ul className="space-y-3 text-secondary mb-8">
              {plan.features.map((f, idx) => (
                <li key={idx}>✔ {f}</li>
              ))}
            </ul>

            {/* Push button to bottom */}
            <button className="mt-auto w-full bg-accent text-black py-3 rounded-xl font-semibold hover:scale-105 transition">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}