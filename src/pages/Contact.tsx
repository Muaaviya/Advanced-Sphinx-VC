import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-24 px-4 gradient-bg min-h-screen">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">
              Get in <span className="font-semibold">Touch</span>
            </h1>
            <p className="text-lg text-subtle max-w-2xl mx-auto font-light">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8 rounded-3xl animate-fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-light mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-white/50 border-white/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-light mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-white/50 border-white/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-light mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                    className="bg-white/50 border-white/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-light mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={6}
                    className="bg-white/50 border-white/20 resize-none"
                  />
                </div>

                <Button type="submit" variant="neumorphic" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div
              className="space-y-8 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="glass-card p-6 rounded-3xl">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <EnvelopeSimple
                    size={24}
                    weight="light"
                    className="text-white"
                  />
                </div>
                <h3 className="text-xl font-light mb-2">Email</h3>
                <p className="text-subtle font-light">
                  hello@advancedsphinx.com
                </p>
              </div>

              <div className="glass-card p-6 rounded-3xl">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Phone size={24} weight="light" className="text-white" />
                </div>
                <h3 className="text-xl font-light mb-2">Phone</h3>
                <p className="text-subtle font-light">+1 (555) 123-4567</p>
              </div>

              <div className="glass-card p-6 rounded-3xl">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <MapPin size={24} weight="light" className="text-white" />
                </div>
                <h3 className="text-xl font-light mb-2">Office</h3>
                <p className="text-subtle font-light">
                  123 Innovation Drive
                  <br />
                  San Francisco, CA 94103
                  <br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
