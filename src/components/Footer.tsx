import { LinkedinLogo, TwitterLogo, InstagramLogo, FacebookLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-white/40 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Advanced Sphinx</h3>
            <p className="text-sm text-subtle font-light leading-relaxed">
              AI-powered discount discovery for couples seeking glamorous experiences.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-sm text-subtle hover:text-foreground transition-colors font-light">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-subtle hover:text-foreground transition-colors font-light">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm text-subtle hover:text-foreground transition-colors font-light">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#team" className="text-sm text-subtle hover:text-foreground transition-colors font-light">
                  Team
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-subtle hover:text-foreground transition-colors font-light">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-subtle hover:text-foreground transition-colors font-light">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={24} weight="light" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <TwitterLogo size={24} weight="light" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <InstagramLogo size={24} weight="light" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <FacebookLogo size={24} weight="light" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-center text-sm text-subtle font-light">
            © {new Date().getFullYear()} Advanced Sphinx. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
