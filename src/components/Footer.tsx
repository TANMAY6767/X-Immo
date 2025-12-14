import {
  Building2,
  Mail,
  MapPin,
  Phone,
  Home,
  Zap,
  Workflow,
  Shield,
  FileText,
  Cookie,
  Twitter,
  Linkedin,
  Facebook,
  Instagram
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer = ({ onNavigate }: FooterProps) => {
  const { t } = useLanguage();

  const platformLinks = [
    { id: "home", label: t.footer.links.home, icon: Home },
    { id: "features", label: t.footer.links.features, icon: Zap },
    { id: "how-it-works", label: t.footer.links.howItWorks, icon: Workflow },
  ];

  const companyLinks = [
    { id: "about", label: t.footer.links.about, icon: Building2 },
    { id: "contact", label: t.footer.links.contact, icon: Mail },
    { id: "privacy-policy", label: t.footer.links.privacyPolicy, icon: Shield },
  ];

  const legalLinks = [
    { id: "terms", label: t.footer.links.terms, icon: FileText },
    { id: "privacy", label: t.footer.links.privacy, icon: Shield },
    { id: "cookies", label: t.footer.links.cookies, icon: Cookie },
  ];

  const socialLinks = [
    { name: t.footer.social.twitter, icon: Twitter, url: "#" },
    { name: t.footer.social.linkedin, icon: Linkedin, url: "#" },
    { name: t.footer.social.facebook, icon: Facebook, url: "#" },
    { name: t.footer.social.instagram, icon: Instagram, url: "#" },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-lg text-gray-900">
                {t.footer.brand.name}
              </span>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              {t.footer.brand.description}
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center
                             text-gray-500 hover:text-blue-600 hover:border-blue-600 transition"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              {t.footer.sections.platform}
            </h4>
            <ul className="space-y-2">
              {platformLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              {t.footer.sections.company}
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              {t.footer.sections.contact}
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                {t.footer.contactInfo.address}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {t.footer.contactInfo.email}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {t.footer.contactInfo.phone}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            {t.footer.legal.copyright(new Date().getFullYear())}
          </p>

          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="text-xs text-gray-400 hover:text-blue-600 transition"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};