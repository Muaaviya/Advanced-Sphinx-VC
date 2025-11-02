import { useEffect, useRef } from "react";
import { Check } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-element");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started",
      features: [
        "10 AI-curated deals per month",
        "Basic search filters",
        "Email notifications",
        "Community access",
      ],
      recommended: false,
    },
    {
      name: "Pro",
      price: "$12",
      period: "/month",
      description: "Our most popular plan for couples",
      features: [
        "Unlimited AI-curated deals",
        "Advanced filters & preferences",
        "Priority notifications",
        "Exclusive partner discounts",
        "Joint account features",
        "Savings analytics",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations and teams",
      features: [
        "Everything in Pro",
        "Custom integrations",
        "Dedicated account manager",
        "API access",
        "White-label options",
        "Priority support",
      ],
      recommended: false,
    },
  ];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-24 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="fade-element text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Simple, <span className="font-semibold">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto font-light">
            Choose the plan that works best for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`fade-element glass-card p-8 rounded-3xl hover:bg-white/20 transition-all duration-300 relative ${
                plan.recommended ? "ring-2 ring-primary shadow-[0_0_40px_hsl(var(--glow-primary)/0.3)]" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm rounded-full font-medium">
                  Recommended
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-light mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-light tracking-tight">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-subtle ml-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-subtle font-light">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check
                      size={20}
                      weight="bold"
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <span className="text-sm font-light text-subtle">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.recommended ? "neumorphic" : "glass"}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
