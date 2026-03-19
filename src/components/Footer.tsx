import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import logoMospi from "@/assets/logo-mospi.png";
import logoNegd from "@/assets/logo-negd.png";
import digitalIndiaLogo from "@/assets/footer-digital-india.png";

const Footer = () => {
  const categories = [
    { title: "Category 1", items: ["Item", "Item", "Item", "Item", "Item"] },
    { title: "Category 2", items: ["Item", "Item", "Item", "Item", "Item"] },
    { title: "Category 3", items: ["Item", "Item", "Item", "Item", "Item"] },
    { title: "Category 4", items: ["Item", "Item", "Item", "Item", "Item"] },
  ];

  const socialIcons = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Youtube, href: "#" },
    { Icon: Facebook, href: "#" },
  ];

  return (
    <footer className="bg-gov-navy text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2">
              <img
                src={logoMospi}
                alt=""
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-xs text-white/70 mb-4 mt-3">
              Description or tagline about the product or company
            </p>
            <div className="flex flex-wrap gap-2 max-w-[140px]">
              {socialIcons.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>
          {categories.map((cat, i) => (
            <div key={i}>
              <h4 className="font-semibold text-sm mb-3">{cat.title}</h4>
              <ul className="space-y-2">
                {cat.items.map((item, j) => (
                  <li key={j}>
                    <a href="#" className="text-xs text-white/70 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <img src={logoNegd} alt="National e-Governance Division (NeGD)" className="h-8 w-auto object-contain mb-2" />
            <p className="text-xs text-white/70 mb-1">Ministry of Electronics & IT</p>
            <p className="text-xs text-white/70 mb-3">(MeitY), Government of India</p>
            <p className="text-xs text-white/70 mb-3">Digital India Corporation</p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/80">Powered by</span>
              <img src={digitalIndiaLogo} alt="Digital India" className="h-8 w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-4 relative z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/70">
          <div className="text-left">
            © 2026 - Copyright UX4G. All rights reserved. Powered by NeGD | MeitY Government of India®2026 UX4G
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
