import Footer from "@/components/Footer";
import { ShieldCheck, AlertTriangle, TrendingUp, Zap } from "lucide-react";

const sections = [
  {
    title: "Strengths",
    icon: ShieldCheck,
    color: "text-emerald-600",
    borderColor: "border-emerald-500/30",
    bgColor: "bg-emerald-50",
    items: [
      {
        heading: "Strategic Benefits & Commercial Leadership",
        points: ["15+ years' experience leading enterprise-level benefits & incentives portfolios", "Delivered 3× increase in user engagement and spend", "Consistently exceeded annual commercial performance targets and objectives"],
      },
      {
        heading: "Executive Stakeholder & Portfolio Governance",
        points: ["Trusted escalation lead managing senior HR, Finance, and Operations stakeholders", "Owns full client lifecycle: onboarding, adoption, renewal, expansion", "KPI-driven quarterly business reviews with structured performance reporting for stakeholder review"],
      },
      {
        heading: "Team Leadership & Capability Development",
        points: ["Direct leadership of Client Account Management function including KPI management and 1 to 1 training and support", "Structured onboarding frameworks and performance scorecards implemented for clients and the team", "40% internal promotion rate through coaching and succession planning"],
      },
      {
        heading: "Operational Excellence & Compliance Oversight",
        points: ["Governance of salary sacrifice schemes, regulatory compliance, and HMRC-aligned processes", "Built automated communication and reporting frameworks to enhance ROI visibility and audit readiness", "Redesigned the lifecycle communications to improve usage of the platform and increase revenue"],
      },
      {
        heading: "Public Speaking & Relationships",
        points: ["Regular attendance and presentations at industry and networking events (CIPD, Benefits Live, Property Mark Conference)", "Onsite attendance for Stakeholder presentations and QBR", "Organising and executing regular employee events either in person or via Webinar", "Organising and executing industry events and new product launches (Cycle To Work Day, Black Friday Campaigns)"],
      },
      {
        heading: "Data-Driven Commercial Decision Making",
        points: ["Advanced CRM & SQL-based reporting capability", "Uses engagement analytics to inform pricing alignment, vendor strategy, and roadmap prioritisation"],
      },
    ],
  },
  {
    title: "Weaknesses",
    icon: AlertTriangle,
    color: "text-amber-600",
    borderColor: "border-amber-500/30",
    bgColor: "bg-amber-50",
    items: [
      {
        heading: "Communication",
        points: ["Dyslexia requires structured review workflows for written documentation; mitigated through technology and compliance-led proofreading processes"],
      },
      {
        heading: "Expanding Skills",
        points: ["Additional knowledge to acquire regarding HR software legal experience"],
      },
    ],
  },
  {
    title: "Opportunities",
    icon: TrendingUp,
    color: "text-sky-600",
    borderColor: "border-sky-500/30",
    bgColor: "bg-sky-50",
    items: [
      {
        heading: "Expansion into Broader Reward & Compensation Strategy",
        points: ["Deepening expertise across wage advance, financial wellbeing, and private healthcare benefit programs"],
      },
      {
        heading: "Advanced Commercial & Predictive Analytics",
        points: ["Enhancing forecasting, ROI modelling, and predictive engagement analysis to support executive decision-making"],
      },
      {
        heading: "Industry Representation & Strategic Networking",
        points: ["Increased participation in HR, Reward, and Employee Engagement forums to drive market intelligence and enterprise growth opportunities"],
      },
      {
        heading: "Short Form Digital Marketing",
        points: ["Increased skills and targeted use of short form media (TikTok/Instagram)"],
      },
    ],
  },
  {
    title: "Threats",
    icon: Zap,
    color: "text-rose-600",
    borderColor: "border-rose-500/30",
    bgColor: "bg-rose-50",
    items: [
      {
        heading: "Regulatory & Taxation Changes",
        points: ["NI, tax, or employment legislation shifts impacting salary sacrifice and benefits participation models"],
      },
      {
        heading: "Macroeconomic Pressure on Employer Spend",
        points: ["Budget constraints reducing discretionary investment in incentive programs"],
      },
      {
        heading: "Competitive Digital Benefits Landscape",
        points: ["Rapid innovation and pricing competition within employee engagement platforms"],
      },
    ],
  },
];

export default function Swot() {
  return (
    <div className="page-fade-in pt-16">
      <section className="bg-executive-dark py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto reveal">
          <div className="gold-line mb-6" />
          <h1 className="text-3xl md:text-4xl font-display font-semibold text-white tracking-tight">
            SWOT Analysis
          </h1>
          <p className="text-sm font-body text-white/50 mt-3">
            Commercial Benefits & Incentives Leader — Client Portfolio Governance — Engagement & Revenue Optimisation
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {sections.map((s, si) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className={`rounded-lg border ${s.borderColor} ${s.bgColor} p-6 md:p-8 reveal reveal-delay-${Math.min(si + 1, 4)}`}>
                <div className="flex items-center gap-3 mb-6">
                  <Icon size={20} className={s.color} />
                  <h2 className={`text-lg font-display font-semibold ${s.color}`}>{s.title}</h2>
                </div>
                <div className="space-y-5">
                  {s.items.map((item, j) => (
                    <div key={j}>
                      <h3 className="text-sm font-body font-semibold text-executive-dark mb-1.5">{item.heading}</h3>
                      <ul className="space-y-1">
                        {item.points.map((p, k) => (
                          <li key={k} className="text-sm font-body text-executive-slate leading-relaxed flex gap-2">
                            <span className="text-executive-gold mt-1 shrink-0">•</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
