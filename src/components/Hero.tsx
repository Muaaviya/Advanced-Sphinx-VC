import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import mockupImage from "@/assets/mockup.png";
import Spline from "@splinetool/react-spline";

const Hero = () => {
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

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center pt-24 pb-0 px-4 relative overflow-hidden"
    >
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/KwEBDnp-hSKfn0Fu/scene.splinecode" />
      </div>

      {/* Gradient Overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-background/50 to-background z-[5]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="fade-element space-y-6">
            <div className="flex items-center gap-3 text-sm mb-6">
              <span className="text-primary font-medium">We're hiring</span>
              <a
                href="#team"
                className="text-subtle hover:text-foreground transition-colors flex items-center gap-1"
              >
                See open positions
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            <h1 className="text-5xl md:text-7xl font-light tracking-tighter leading-tight">
              Discover Luxury
              <br />
              <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Savings Together
              </span>
            </h1>

            <p className="text-lg md:text-xl text-subtle max-w-xl font-light">
              Neura helps you gently organize thoughts, turning scattered ideas
              into clarity. Plan for better days with AI-powered insights
              designed for couples.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="neumorphic" size="lg">
                Get started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent hover:bg-foreground/5"
              >
                Learn more →
              </Button>
            </div>
          </div>

          {/* Right Column - Mockup Image */}
          <div className="fade-element">
            <div className="relative max-w-lg mx-auto ">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl rounded-full" />
              <img
                src={mockupImage}
                alt="Advanced Sphinx App Interface"
                className="relative z-10 w-full drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
