import { useEffect, useRef } from "react";

const Mission = () => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="fade-element py-24 px-4 gradient-bg"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
          Our <span className="font-semibold">Mission</span>
        </h2>
        <p className="text-xl font-light text-subtle leading-relaxed mb-6">
          We believe that everyone deserves access to luxury experiences without
          compromising their financial wellbeing. Advanced Sphinx was born from
          years of scientific research in artificial intelligence and consumer
          behavior.
        </p>
        <p className="text-xl font-light text-subtle leading-relaxed">
          Our mission is to empower couples to discover, plan, and enjoy
          glamorous moments together while making smart financial decisions. We
          combine cutting-edge AI with an elegant, intuitive interface to bring
          you the best deals on experiences that matter most.
        </p>
      </div>
    </section>
  );
};

export default Mission;
