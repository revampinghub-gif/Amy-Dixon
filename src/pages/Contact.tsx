import { useState } from "react";
import Footer from "@/components/Footer";
import { Mail, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-fade-in pt-16">
      <section className="bg-executive-dark py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto reveal">
          <div className="gold-line mb-6" />
          <h1 className="text-3xl md:text-4xl font-display font-semibold text-white tracking-tight">
            Contact
          </h1>
          <p className="text-sm font-body text-white/50 mt-3">
            Represented for executive opportunities
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="reveal">
            <h2 className="text-xl font-display font-semibold text-executive-dark mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <a href="mailto:Amyslittletreat@hotmail.co.uk" className="flex items-center gap-3 text-sm font-body text-executive-slate hover:text-executive-gold transition-colors">
                <Mail size={18} className="text-executive-gold" />
                Amyslittletreat@hotmail.co.uk
              </a>
              <a href="https://www.linkedin.com/in/amylouisedixon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-body text-executive-slate hover:text-executive-gold transition-colors">
                <Linkedin size={18} className="text-executive-gold" />
                linkedin.com/in/amylouisedixon
              </a>
            </div>
            <p className="text-xs font-body text-executive-slate/60 mt-8 tracking-wide">
              Available for executive search mandates and strategic leadership opportunities.
            </p>
          </div>

          {/* Form */}
          <div className="reveal reveal-delay-2">
            {submitted ? (
              <div className="p-8 rounded border border-executive-gold/30 bg-executive-warm text-center">
                <p className="font-display text-lg font-semibold text-executive-dark">Thank you</p>
                <p className="text-sm font-body text-executive-slate mt-2">Your message has been received.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-body uppercase tracking-[0.12em] text-executive-slate mb-1.5 block">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded border border-border bg-executive-warm text-sm font-body text-executive-dark focus:outline-none focus:ring-2 focus:ring-executive-gold/40 transition-shadow"
                  />
                </div>
                <div>
                  <label className="text-xs font-body uppercase tracking-[0.12em] text-executive-slate mb-1.5 block">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded border border-border bg-executive-warm text-sm font-body text-executive-dark focus:outline-none focus:ring-2 focus:ring-executive-gold/40 transition-shadow"
                  />
                </div>
                <div>
                  <label className="text-xs font-body uppercase tracking-[0.12em] text-executive-slate mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded border border-border bg-executive-warm text-sm font-body text-executive-dark focus:outline-none focus:ring-2 focus:ring-executive-gold/40 transition-shadow resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-body font-medium tracking-wide bg-executive-gold text-executive-dark rounded hover:brightness-110 transition-all active:scale-[0.97]"
                >
                  <Send size={15} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
