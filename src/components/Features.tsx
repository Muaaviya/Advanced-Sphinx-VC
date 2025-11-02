import { useEffect, useRef } from "react";
import { Sparkle, Heart, TrendUp, Lock } from "@phosphor-icons/react";

const Features = () => {
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

  const features = [
    {
      icon: Sparkle,
      title: "AI-Powered Discovery",
      description:
        "Our advanced algorithms learn your preferences to surface the most relevant discounts and coupons tailored for you.",
    },
    {
      icon: Heart,
      title: "Designed for Couples",
      description:
        "Share discoveries with your partner and plan glamorous experiences together while saving smart.",
    },
    {
      icon: TrendUp,
      title: "Smart Algorithms",
      description:
        "Years of scientific research distilled into intelligent recommendations that adapt to your lifestyle.",
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description:
        "Your data is encrypted and protected. We never share your information with third parties.",
    },
  ];

  return (
    <section id="features" ref={sectionRef} className="pt-8 pb-24 px-4 gradient-bg relative">
      <div className="container mx-auto max-w-6xl">
        <div className="fade-element text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Features That <span className="font-semibold">Delight</span>
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto font-light">
            Everything you need to discover and save on experiences that matter
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="fade-element glass-card p-8 rounded-3xl hover:bg-white/20 transition-all duration-500 group relative overflow-hidden hover:shadow-[0_0_60px_hsl(var(--primary)/0.4),0_0_100px_hsl(var(--accent)/0.2)] hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon size={28} weight="light" className="text-white" />
              </div>
              <h3 className="text-2xl font-light mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-subtle font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
