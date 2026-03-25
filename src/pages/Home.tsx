import { Link } from "react-router-dom";
import { ArrowRight, Download, Target, Users, TrendingUp, Shield, BarChart3, Briefcase, Mic } from "lucide-react";
import Footer from "@/components/Footer";
import headshot from "@/assets/headshot.jpg";

const metrics = [
  { value: "15+", label: "Years Experience" },
  { value: "3×", label: "User Engagement Growth" },
  { value: "75,000+", label: "Corporate Clients Supported" },
  { value: "2.5M+", label: "End Users Impacted" },
];

const capabilities = [
  { icon: Target, title: "Strategic Leadership", desc: "Driving commercial strategy across global benefits portfolios with measurable impact on revenue and engagement." },
  { icon: Users, title: "Stakeholder Management", desc: "Partnering with senior HR, Finance, and Operations leaders to align incentive programs with business objectives." },
  { icon: TrendingUp, title: "Revenue Growth", desc: "Consistently exceeding annual commercial targets through data-driven decision making and strategic planning." },
  { icon: Shield, title: "Governance & Compliance", desc: "Embedding regulatory frameworks that align commercial performance with compliance requirements." },
  { icon: BarChart3, title: "Data & Analytics", desc: "Leveraging CRM systems, SQL-based reporting, and analytics to drive operational excellence." },
  { icon: Briefcase, title: "Team Development", desc: "Building high-performing teams with scalable onboarding frameworks and a 40% internal promotion rate." },
  { icon: Mic, title: "Public Speaking & Networking", desc: "Regular presentations at industry events including CIPD, Benefits Live, and Property Mark Conference." },
];

const highlights = [
  { metric: "3×", text: "User engagement and spend growth across key incentive programs" },
  { metric: "40%", text: "Internal promotion rate within managed teams" },
  { metric: "75K+", text: "Corporate clients supported through strategic portfolio management" },
  { metric: "100%", text: "Consistent achievement of annual commercial targets" },
];

export default function Home() {
  return (
    <div className="page-fade-in">
      {/* Hero */}
      <section className="min-h-screen flex items-center bg-executive-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03]"
          style={{ background: "repeating-linear-gradient(45deg, transparent, transparent 40px, white 40px, white 41px)" }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Headshot */}
            <div className="shrink-0 reveal">
              <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-executive-gold/30 shadow-2xl">
                <img src={headshot} alt="Amy Dixon" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="max-w-3xl text-center lg:text-left">
              <div className="gold-line mb-8 reveal mx-auto lg:mx-0" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white leading-[1.1] tracking-tight reveal reveal-delay-1">
                Amy Dixon
              </h1>
              <p className="text-lg md:text-xl font-body font-light text-executive-gold mt-4 tracking-wide reveal reveal-delay-2">
                Commercial Benefits & Incentives Leader
              </p>
              <p className="text-base md:text-lg font-body text-white/50 mt-6 max-w-xl leading-relaxed reveal reveal-delay-3 mx-auto lg:mx-0" style={{ textWrap: "pretty" }}>
                Driving engagement, revenue growth, and governance across global portfolios
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10 reveal reveal-delay-4">
                <Link
                  to="/bio"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-body font-medium tracking-wide bg-executive-gold text-executive-dark rounded hover:brightness-110 transition-all active:scale-[0.97]"
                >
                  View Executive Bio <ArrowRight size={16} />
                </Link>
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-body font-medium tracking-wide border border-white/20 text-white/80 rounded hover:border-executive-gold hover:text-executive-gold transition-all active:scale-[0.97]"
                >
                  View Career Experience
                </Link>
                <a
                  href="/documents/Amy_Louise_Dixon_CV_16.3.26.docx"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-body font-medium tracking-wide border border-white/10 text-white/50 rounded hover:border-white/30 hover:text-white/70 transition-all active:scale-[0.97]"
                >
                  <Download size={15} /> Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((m, i) => (
            <div key={m.label} className={`text-center reveal reveal-delay-${i + 1}`}>
              <p className="text-3xl md:text-4xl font-display font-semibold text-executive-dark">{m.value}</p>
              <p className="text-xs font-body uppercase tracking-[0.15em] text-executive-slate mt-2">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Executive Summary */}
      <section className="section-padding bg-executive-warm">
        <div className="max-w-3xl mx-auto text-center reveal">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-executive-dark mb-6">
            Executive Summary
          </h2>
          <p className="font-body text-executive-slate leading-relaxed" style={{ textWrap: "pretty" }}>
            Commercial Benefits & Incentives Account Management Leader with 15+ years' experience driving employee engagement, revenue growth, and operational performance across global benefit platforms, PropTech software and client portfolios. Proven record of leading multi-layered client account teams, scaling initiative programs, increasing commercial uptake and embedding governance frameworks aligned with regulatory and organisational standards.
          </p>
          <p className="font-body text-executive-slate leading-relaxed mt-4" style={{ textWrap: "pretty" }}>
            Experienced in strategic roadmap ownership, cross-functional leadership, performance management and stakeholder alignment across HR, Finance, Operations and Executive Teams. Recognised for transforming engagement models, redesigning communication lifecycles, increasing stakeholder engagement and satisfaction, and increasing market visibility through industry networking and events.
          </p>
          <Link
            to="/bio"
            className="inline-flex items-center gap-2 mt-8 text-sm font-body font-medium tracking-wide text-executive-gold hover:brightness-110 transition-all"
          >
            Read Full Bio <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16 reveal">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-executive-dark">
              Core Capabilities
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`p-8 rounded-lg border border-executive-dark/5 bg-executive-warm/50 hover:shadow-lg hover:border-executive-gold/20 transition-all duration-300 reveal reveal-delay-${(i % 4) + 1}`}
              >
                <cap.icon size={28} className="text-executive-gold mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-display font-semibold text-executive-dark mb-3">{cap.title}</h3>
                <p className="text-sm font-body text-executive-slate leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="section-padding bg-executive-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ background: "repeating-linear-gradient(-45deg, transparent, transparent 60px, white 60px, white 61px)" }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="text-center mb-16 reveal">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-white">
              Proven Results
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((h, i) => (
              <div
                key={h.metric}
                className={`flex items-start gap-6 p-8 rounded-lg border border-white/5 bg-white/[0.02] reveal reveal-delay-${i + 1}`}
              >
                <span className="text-3xl md:text-4xl font-display font-semibold text-executive-gold shrink-0 w-20 text-right">
                  {h.metric}
                </span>
                <p className="font-body text-white/60 leading-relaxed pt-2">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="section-padding bg-executive-warm">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-12 reveal">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-executive-dark">
              Leadership Approach
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 reveal reveal-delay-1">
            <div>
              <h3 className="text-lg font-display font-semibold text-executive-dark mb-4">Data-Driven Strategy</h3>
              <p className="font-body text-executive-slate leading-relaxed text-sm" style={{ textWrap: "pretty" }}>
                Combining commercial acumen with analytical rigour, leveraging CRM systems and SQL-based reporting to inform strategic decisions. Every initiative is measured against clear KPIs to ensure tangible commercial outcomes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-display font-semibold text-executive-dark mb-4">People & Performance</h3>
              <p className="font-body text-executive-slate leading-relaxed text-sm" style={{ textWrap: "pretty" }}>
                Building high-performing teams through structured development programmes, scalable onboarding frameworks, and a culture of accountability. A 40% internal promotion rate reflects a commitment to growing talent from within.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-display font-semibold text-executive-dark mb-4">Cross-Functional Alignment</h3>
              <p className="font-body text-executive-slate leading-relaxed text-sm" style={{ textWrap: "pretty" }}>
                Partnering with HR, Finance, Operations, Product, and Marketing teams to influence roadmap development, pricing alignment, and revenue expansion strategies across the enterprise.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-display font-semibold text-executive-dark mb-4">Public Speaking & Networking</h3>
              <p className="font-body text-executive-slate leading-relaxed text-sm" style={{ textWrap: "pretty" }}>
                Regular attendance and presentations at industry events (CIPD, Benefits Live, Property Mark Conference). Organising employee events and product launches including Cycle To Work Day and Black Friday Campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-executive-dark mb-4">
            Explore the Full Portfolio
          </h2>
          <p className="font-body text-executive-slate mb-10" style={{ textWrap: "pretty" }}>
            Discover Amy's career journey, leadership impact, strategic analysis, and professional documentation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-body font-medium tracking-wide bg-executive-dark text-white rounded hover:bg-executive-dark/90 transition-all active:scale-[0.97]"
            >
              Career Experience <ArrowRight size={16} />
            </Link>
            <Link
              to="/impact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-body font-medium tracking-wide border border-executive-dark/20 text-executive-dark rounded hover:border-executive-gold hover:text-executive-gold transition-all active:scale-[0.97]"
            >
              Leadership Impact
            </Link>
            <Link
              to="/swot"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-body font-medium tracking-wide border border-executive-dark/20 text-executive-dark rounded hover:border-executive-gold hover:text-executive-gold transition-all active:scale-[0.97]"
            >
              SWOT Analysis
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-body font-medium tracking-wide bg-executive-gold text-executive-dark rounded hover:brightness-110 transition-all active:scale-[0.97]"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
