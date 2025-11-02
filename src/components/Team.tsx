import { useEffect, useRef } from "react";
import { LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";
import ceoImage from "@/assets/ceo.png";
import ctoImage from "@/assets/cto.png";
import designerImage from "@/assets/designer.png";

const Team = () => {
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

  const teamMembers = [
    {
      name: "Dr. Alexandra Chen",
      role: "Co-Founder & CEO",
      bio: "PhD in AI from Stanford. Former researcher at DeepMind with 10+ years in machine learning.",
      image: ceoImage,
    },
    {
      name: "Marcus Rodriguez",
      role: "Co-Founder & CTO",
      bio: "Ex-Google engineer with expertise in building scalable consumer platforms.",
      image: ctoImage,
    },
    {
      name: "Sophie Laurent",
      role: "Head of Design",
      bio: "Award-winning designer previously at Apple, passionate about creating delightful experiences.",
      image: designerImage,
    },
  ];

  return (
    <section id="team" ref={sectionRef} className="py-24 px-4 gradient-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="fade-element text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Meet the <span className="font-semibold">Team</span>
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto font-light">
            A passionate group dedicated to transforming how couples discover
            savings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="fade-element glass-card p-8 rounded-3xl hover:bg-white/20 transition-all duration-300 text-center group ring-2 ring-primary shadow-[0_0_40px_hsl(var(--glow-primary)/0.3)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto mb-6 rounded-full object-cover group-hover:scale-105 transition-transform"
              />
              <h3 className="text-xl font-light mb-1">{member.name}</h3>
              <p className="text-sm text-primary mb-4">{member.role}</p>
              <p className="text-sm text-subtle font-light leading-relaxed mb-6">
                {member.bio}
              </p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogo size={20} weight="light" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <TwitterLogo size={20} weight="light" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
