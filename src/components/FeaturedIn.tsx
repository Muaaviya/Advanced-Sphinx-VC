import { useEffect, useRef } from "react";
const FeaturedIn = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const publications = ["TechCrunch", "Forbes", "Wired", "The Verge", "Fast Company"];
  return <section ref={sectionRef} className="fade-element py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <p className="text-center text-subtle mb-12 tracking-wide uppercase font-bold text-lg">FEATURED IN</p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {publications.map(pub => <div key={pub} className="text-2xl md:text-3xl font-light text-muted-foreground/60 hover:text-foreground transition-colors">
              {pub}
            </div>)}
        </div>
      </div>
    </section>;
};
export default FeaturedIn;