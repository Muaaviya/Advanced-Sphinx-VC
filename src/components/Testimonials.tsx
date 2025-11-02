import { useEffect, useRef, useState } from "react";
import { Star } from "@phosphor-icons/react";

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const testimonials = [
    {
      name: "Sarah & Michael",
      location: "New York, NY",
      text: "Advanced Sphinx transformed how we discover deals. We've saved over $5,000 on date nights and getaways this year alone!",
      result: "Saved $5,000+ annually",
      rating: 5,
    },
    {
      name: "Emma & James",
      location: "Los Angeles, CA",
      text: "The AI recommendations are spot-on. It's like having a personal concierge for luxury experiences at fraction of the cost.",
      result: "Found 200+ exclusive deals",
      rating: 5,
    },
    {
      name: "Lisa & David",
      location: "Chicago, IL",
      text: "We love how elegant and easy to use the app is. Planning romantic evenings has never been this affordable and glamorous.",
      result: "Saved 60% on experiences",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="fade-element py-24 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Loved by <span className="font-semibold">Couples</span>
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto font-light">
            Hear what our community has to say about their experience
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full px-4"
                >
                  <div className="glass-card p-12 rounded-3xl text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={24}
                          weight="fill"
                          className="text-primary"
                        />
                      ))}
                    </div>
                    <p className="text-xl font-light mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="inline-block px-6 py-2 rounded-full bg-primary/10 mb-6">
                      <p className="text-sm font-medium text-primary">
                        {testimonial.result}
                      </p>
                    </div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-subtle">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
