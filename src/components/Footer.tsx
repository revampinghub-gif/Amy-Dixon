import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-executive-dark text-white/40 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-sm text-white/60">
          Amy <span className="text-executive-gold">Dixon</span>
        </p>
        <p className="text-xs font-body tracking-wide">
          © {new Date().getFullYear()} Amy Dixon — Executive Portfolio
        </p>
        <Link to="/contact" className="text-xs font-body uppercase tracking-[0.15em] text-white/50 hover:text-executive-gold transition-colors">
          Contact
        </Link>
      </div>
    </footer>
  );
}
