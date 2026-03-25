import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/bio", label: "Executive Bio" },
  { to: "/experience", label: "Experience" },
  { to: "/swot", label: "SWOT Analysis" },
  { to: "/impact", label: "Leadership Impact" },
  { to: "/documents", label: "Documents" },
  { to: "/contact", label: "Contact" },
];

export default function Navigation() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-executive-dark border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <Link to="/" className="font-display text-lg tracking-wide text-white/90 hover:text-white transition-colors">
          Amy <span className="text-executive-gold">Dixon</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-xs font-body uppercase tracking-[0.15em] transition-colors ${
                pathname === l.to
                  ? "text-executive-gold"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white/70 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-executive-dark border-t border-white/5 pb-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-body tracking-wide transition-colors ${
                pathname === l.to
                  ? "text-executive-gold"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
