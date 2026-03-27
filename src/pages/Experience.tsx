import Footer from "@/components/Footer";

const competencies = [
  "Commercial Performance & Revenue Growth",
  "Communication & Stakeholder Relationship Management",
  "Team Leadership, Capability Development & Progression",
  "Client Portfolio Compliance & Management",
  "Operational Excellence & Process Transformation",
  "Client Reporting & Data Driven Forecasting",
  "Public Speaking & Product Demonstrations",
];

const techSkills = [
  "Salesforce", "Sales Loft", "Dynamics", "Veco CRM", "SQL Reporting",
  "Xero", "MS Office 365", "Marketing Automation Tools", "Hootsuite",
  "LinkedIn Learning", "Udemy",
];

const roles = [
  {
    title: "Senior Client Account Team Manager",
    company: "Blackhawk Network",
    period: "May 2022 – Present",
    context: "Global provider of employee benefits and incentive solutions supporting 75,000+ corporate clients and 2.5M+ end users.",
    leadershipScope: "Direct leadership of Client Account Management function overseeing strategic benefits portfolios and engagement growth across multiple enterprise clients.",
    bullets: [
      "Lead and develop team of 5 Client Account Managers, driving performance, accountability, and succession planning (40% internal promotions achieved).",
      "Own strategic client engagement plans to increase adoption of multi-benefit incentive schemes.",
      "Delivered 3× growth in user engagement and spend across key incentive programs.",
      "Exceeded annual commercial performance targets year-on-year.",
      "Designed structured onboarding, capability frameworks, and KPI-led performance tracking.",
      "Spearheaded launch and scale-up of BHN Extras benefits platform across enterprise clients.",
      "Built automated communications and reporting frameworks to improve ROI visibility and compliance governance.",
      "Act as senior escalation point for high-value stakeholders and executive client sponsors.",
    ],
    executiveContribution: "Influence roadmap development, pricing alignment, and commercial expansion opportunities through data-led insight and client trend analysis.",
  },
  {
    title: "Accounts Assistant (FTC)",
    company: "Circa London",
    period: "Mar 2022 – Apr 2022",
    bullets: [
      "Processed invoices, credit notes, and landlord payments.",
      "Reconciled bank accounts and monitored aged debt reports.",
      "Supported financial accuracy and compliance controls.",
    ],
  },
  {
    title: "Sales & Marketing Manager",
    company: "Thornhill Galleries",
    period: "May 2021 – Mar 2022",
    bullets: [
      "Directed client acquisition and relationship management strategy.",
      "Led revenue-generating marketing campaigns across digital platforms.",
      "Managed supplier negotiations and operational delivery pipeline.",
      "Oversaw invoicing, forecasting, and cost control processes.",
    ],
  },
  {
    title: "Regional Client Manager",
    company: "Eurolink Technology",
    period: "Feb 2015 – Jun 2021",
    context: "CRM, Compliance & Workflow automation provider for Property sector.",
    bullets: [
      "Managed regional client portfolio with full lifecycle ownership (acquisition, onboarding, retention, expansion).",
      "Implemented new tiered pricing model across client base, increasing recurring revenue streams.",
      "Led product adoption strategy for new digital tools and automation solutions.",
      "Delivered quarterly strategic business reviews with senior decision-makers.",
      "Maintained contractual governance, compliance documentation, and SLA adherence.",
      "Created custom SQL-based performance reports to support client commercial decision.",
    ],
  },
  {
    title: "Assistant Property Manager",
    company: "Direct Residential",
    period: "Feb 2013 – Feb 2015",
    bullets: [
      "Managed residential and block portfolios.",
      "Coordinated maintenance and compliance certifications.",
      "Oversaw tenancy renewals, arrears, and rent reconciliation.",
    ],
  },
  {
    title: "Dispensing Technician",
    company: "Your Local Boots Pharmacy",
    period: "Feb 2009 – Feb 2013",
    bullets: [
      "Stock checks & levels, orders and prescription checks.",
      "Drug labelling & dispensing in line with regulatory standards.",
      "Diabetes and blood pressure testing, health & safety compliance.",
      "Organisation & cleaning of the dispensary.",
      "Profit & Loss management and stock rotation.",
      "Responsibility for 1-31, staff hours, training and supervising counter staff.",
    ],
  },
  {
    title: "Waitress",
    company: "Inn at Maybury",
    period: "Dec 2008 – Jan 2009",
    bullets: [
      "Intermittent hospitality role during economic downturn before moving to a permanent position.",
    ],
  },
  {
    title: "Sales Executive & PA to Managing Director",
    company: "Grants Estate Agents",
    period: "Jan 2007 – Nov 2008",
    bullets: [
      "Secured property onto the market, registered enquiries, arranged viewings and followed up sales in progress to ensure completion.",
      "Pre-sales: photography, floor plans, database input, uploading details to internet and affiliate sites.",
      "Post-sales: arranged conveyancing and mortgages.",
      "Worked as a team within the four branches.",
      "Assisted the Managing Director with day-to-day running of the company, handling correspondence and coordinating activities across four branches.",
    ],
  },
  {
    title: "Customer Service Advisor & Accounts Assistant",
    company: "Not Just Kitchen Ideas",
    period: "Aug 2006 – Dec 2006",
    bullets: [
      "Lodging and allocation of complaints, ordering stock and confirming deliveries.",
      "Processing damages/returns and ensuring staff have replacement items.",
      "Warehouse and delivery management, organisation of delivery notes and invoices.",
      "Matching and inputting invoices, coding and filing.",
      "Paying suppliers and taking customer payments using Sage accounting software.",
    ],
  },
  {
    title: "Dispensing Technician & Supervisor",
    company: "Lloyds Pharmacy",
    period: "Jul 2001 – Jul 2006",
    bullets: [
      "Maintained the dispensary, performed stock checks and levels, prepared and received orders.",
      "Prescription checking, drug labelling and dispensing, and customer advice.",
      "Diabetes and blood pressure testing, MOT health checks, flu jabs and other supportive services.",
      "Improved branch Profit & Loss through stock rotation, staff management & training.",
      "Daily business banking.",
    ],
  },
];

const achievements = [
  { metric: "3×", desc: "User engagement and spend growth across key incentive programs" },
  { metric: "40%", desc: "Internal promotion rate through coaching and succession planning" },
  { metric: "75,000+", desc: "Corporate clients supported on global benefits platform" },
  { metric: "2.5M+", desc: "End users impacted across benefits and incentive programs" },
  { metric: "YoY", desc: "Commercial performance targets exceeded consistently" },
];

const education = [
  { qualification: "A Levels — Art, Drama & Textiles (Howard of Effingham, 2004)" },
  { qualification: "GCSEs — English Lit, English Lang, Maths, Double Science, French, Textiles, Art & Drama (Tormead Girls School, 2002)" },
  { qualification: "NVQ3 Pharmaceutical Dispensing" },
  { qualification: "Medicine Counter Assistant Certificate" },
  { qualification: "Basic Food Hygiene Certificate" },
  { qualification: "2D CAD LT" },
  { qualification: "NAEA NVQ2 (incomplete)" },
  { qualification: "All Ballet, Tap and Jazz Exams — Completed With Honours" },
];

const profDev = [
  "Strategic Planning",
  "Project Management",
  "Leadership Development",
  "Change Management",
  "Advanced Excel & Reporting",
  "LinkedIn & Udemy Learning",
];

export default function Experience() {
  return (
    <div className="page-fade-in pt-16">
      {/* Header */}
      <section className="bg-executive-dark py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto reveal">
          <div className="gold-line mb-6" />
          <h1 className="text-3xl md:text-4xl font-display font-semibold text-white tracking-tight">
            Career Experience
          </h1>
          <p className="text-sm font-body text-white/50 mt-3 max-w-xl leading-relaxed">
            Commercial Benefits & Incentives Account Management Leader with 15+ years' experience driving employee engagement, revenue growth, and operational performance across global benefit platforms, PropTech software and client portfolios.
          </p>
        </div>
      </section>

      {/* Competencies */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-display font-semibold text-executive-dark mb-8 reveal">Core Leadership Competencies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 reveal reveal-delay-1">
            {competencies.map((c) => (
              <div key={c} className="px-4 py-3 bg-executive-warm rounded text-xs font-body text-executive-dark leading-snug text-center">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="section-padding bg-executive-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-display font-semibold text-executive-dark mb-10 reveal">Career Timeline</h2>
          <div className="space-y-10">
            {roles.map((role, i) => (
              <div key={i} className={`relative pl-8 border-l-2 border-executive-gold/30 reveal reveal-delay-${Math.min(i + 1, 5)}`}>
                <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-executive-gold" />
                <p className="text-xs font-body uppercase tracking-[0.12em] text-executive-gold mb-1">{role.period}</p>
                <h3 className="text-lg font-display font-semibold text-executive-dark">{role.title}</h3>
                <p className="text-sm font-body text-executive-slate mb-2">{role.company}</p>
                {role.context && (
                  <p className="text-sm font-body text-executive-slate/70 mb-3 italic">{role.context}</p>
                )}
                {role.leadershipScope && (
                  <p className="text-sm font-body text-executive-dark/80 mb-3 font-medium">{role.leadershipScope}</p>
                )}
                <ul className="space-y-1.5">
                  {role.bullets.map((b, j) => (
                    <li key={j} className="text-sm font-body text-executive-slate leading-relaxed flex gap-2">
                      <span className="text-executive-gold mt-1.5 shrink-0">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {role.executiveContribution && (
                  <p className="text-sm font-body text-executive-dark/70 mt-3 italic">
                    <span className="font-semibold">Executive Contribution:</span> {role.executiveContribution}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-executive-dark">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-display font-semibold text-white mb-10 reveal">Key Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((a, i) => (
              <div key={i} className={`p-6 rounded border border-white/10 reveal reveal-delay-${Math.min(i + 1, 5)}`}>
                <p className="text-2xl font-display font-semibold text-executive-gold">{a.metric}</p>
                <p className="text-sm font-body text-white/60 mt-2 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-xl font-display font-semibold text-executive-dark mb-6">Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            {techSkills.map((s) => (
              <span key={s} className="px-4 py-2 text-xs font-body font-medium tracking-wide bg-executive-dark text-white/80 rounded">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Development */}
      <section className="section-padding bg-executive-warm">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-xl font-display font-semibold text-executive-dark mb-6">Education & Professional Development</h2>
          <div className="space-y-4">
            {education.map((e, i) => (
              <p key={i} className="text-sm font-body font-semibold text-executive-dark">{e.qualification}</p>
            ))}
            <div className="mt-4">
              <p className="text-sm font-body font-semibold text-executive-dark mb-3">Professional Development:</p>
              <div className="flex flex-wrap gap-2">
                {profDev.map((p) => (
                  <span key={p} className="px-3 py-1.5 text-xs font-body bg-white rounded text-executive-slate border border-border">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
