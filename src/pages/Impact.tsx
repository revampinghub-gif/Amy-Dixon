import Footer from "@/components/Footer";
import { TrendingUp, Users, Settings, Briefcase, Mic } from "lucide-react";

const impacts = [
  {
    icon: TrendingUp,
    title: "Commercial Impact",
    items: [
      { metric: "3×", text: "User engagement and spend growth across key incentive programs" },
      { metric: "YoY", text: "Annual commercial performance targets exceeded consistently" },
      { metric: "Revenue", text: "Pricing alignment and commercial expansion through data-led insight and client trend analysis" },
    ],
  },
  {
    icon: Users,
    title: "Team Impact",
    items: [
      { metric: "40%", text: "Internal promotion rate through coaching and structured succession planning" },
      { metric: "5", text: "Client Account Managers directly developed and mentored with KPI management and 1-to-1 training" },
      { metric: "Frameworks", text: "Designed structured onboarding and KPI-led performance scorecards for clients and the team" },
    ],
  },
  {
    icon: Settings,
    title: "Operational Impact",
    items: [
      { metric: "Automated", text: "Communications and reporting frameworks improving ROI visibility and audit readiness" },
      { metric: "Governance", text: "Salary sacrifice schemes, regulatory compliance, and HMRC alignment" },
      { metric: "Lifecycle", text: "Redesigned lifecycle communications to improve platform usage and increase revenue" },
    ],
  },
  {
    icon: Briefcase,
    title: "Client Impact",
    items: [
      { metric: "75,000+", text: "Corporate clients supported on global benefits platform" },
      { metric: "2.5M+", text: "End users impacted across benefits and incentive programs" },
      { metric: "Enterprise", text: "Strategic portfolio management with full lifecycle ownership and stakeholder alignment" },
    ],
  },
  {
    icon: Mic,
    title: "Industry & Networking Impact",
    items: [
      { metric: "Events", text: "Regular presentations at CIPD, Benefits Live, and Property Mark Conference" },
      { metric: "Campaigns", text: "Organising and executing Cycle To Work Day, Black Friday Campaigns, and product launches" },
      { metric: "Engagement", text: "Regular employee events in person and via Webinar driving stakeholder satisfaction" },
    ],
  },
];

export default function Impact() {
  return (
    <div className="page-fade-in pt-16">
      <section className="bg-executive-dark py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto reveal">
          <div className="gold-line mb-6" />
          <h1 className="text-3xl md:text-4xl font-display font-semibold text-white tracking-tight">
            Leadership Impact
          </h1>
          <p className="text-sm font-body text-white/50 mt-3">
            Measurable outcomes across commercial, team, operational, client, and industry dimensions
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          {impacts.map((section, si) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className={`reveal reveal-delay-${Math.min(si + 1, 4)}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded bg-executive-dark flex items-center justify-center">
                    <Icon size={18} className="text-executive-gold" />
                  </div>
                  <h2 className="text-xl font-display font-semibold text-executive-dark">{section.title}</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {section.items.map((item, j) => (
                    <div key={j} className="p-5 rounded border border-border bg-executive-warm">
                      <p className="text-xl font-display font-semibold text-executive-gold">{item.metric}</p>
                      <p className="text-sm font-body text-executive-slate mt-2 leading-relaxed">{item.text}</p>
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
