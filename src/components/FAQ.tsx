import { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
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

  const faqs = [
    {
      question: "How does Advanced Sphinx work?",
      answer:
        "Advanced Sphinx uses advanced AI algorithms trained on years of consumer behavior data to curate personalized discount and coupon recommendations. Simply tell us your preferences, and our AI will continuously learn and improve its suggestions for you.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use bank-level encryption to protect your data. We never sell your information to third parties, and you have complete control over your privacy settings.",
    },
    {
      question: "Can I use Advanced Sphinx as a couple?",
      answer:
        "Yes! Our Pro plan includes joint account features specifically designed for couples. Share discoveries, plan together, and track your combined savings.",
    },
    {
      question: "What types of deals can I find?",
      answer:
        "We curate deals across dining, entertainment, travel, shopping, and experiences. From fine dining to weekend getaways, our AI finds opportunities that match your lifestyle and preferences.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time with no cancellation fees. Your benefits will continue until the end of your billing period.",
    },
  ];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="fade-element py-24 px-4"
    >
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Frequently Asked <span className="font-semibold">Questions</span>
          </h2>
          <p className="text-lg text-subtle font-light">
            Everything you need to know about Advanced Sphinx
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-card px-6 rounded-2xl border-0"
            >
              <AccordionTrigger className="text-left font-light hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-subtle font-light leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
