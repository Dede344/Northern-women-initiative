import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container-section py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-2">Stay Connected</h3>
              <p className="text-primary-foreground/80">Join our newsletter for updates and inspiration.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 min-w-[250px]"
              />
              <Button variant="gold">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-section py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Northern Women Initiative" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/80 mb-6">
              Empowering Northern women socially, emotionally, academically, and economically through community support and sustainable programs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:info@northernwomen.org" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Programs", "Events", "Get Involved", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Programs</h4>
            <ul className="space-y-3">
              {["Women Empowerment", "Educational Support", "Community Outreach", "Northern Women Enterprise"].map((item) => (
                <li key={item}>
                  <Link
                    to="/programs"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-secondary" />
                <span className="text-primary-foreground/80">Northern Nigeria</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-1 flex-shrink-0 text-secondary" />
                <span className="text-primary-foreground/80">+234 XXX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-1 flex-shrink-0 text-secondary" />
                <span className="text-primary-foreground/80">info@northernwomen.org</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-section py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 Northern Women Initiative. All rights reserved.</p>
            <p className="font-medium text-primary-foreground/80">Built to Empower. Designed for Impact.</p>
            <p>Designed by <span className="text-secondary font-semibold">Seraczone Tech</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
