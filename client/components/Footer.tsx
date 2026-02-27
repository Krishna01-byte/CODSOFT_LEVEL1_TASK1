import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Security", "Updates"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Press"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Cookies", "Contact"],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-950 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800/50">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
              Brand
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building excellence and transforming businesses, one project at a time.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Instagram, label: "Instagram" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href="#"
                    aria-label={social.label}
                    className="p-3 rounded-lg bg-gray-800/50 hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 text-gray-400 hover:text-white transition-all transform hover:scale-110"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-white mb-6 text-lg">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-300 transition-colors relative group"
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-gray-500 text-center md:text-left text-sm">
            &copy; {currentYear} Brand. All rights reserved. Built with ❤️
          </p>

          {/* Bottom Links */}
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Sitemap
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Status
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Changelog
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
