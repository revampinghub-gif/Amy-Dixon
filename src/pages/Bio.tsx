import Footer from "@/components/Footer";

export default function Bio() {
  return (
    <div className="page-fade-in pt-16">
      {/* Header */}
      <section className="bg-executive-dark py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto reveal">
          <div className="gold-line mb-6" />
          <h1 className="text-3xl md:text-4xl font-display font-semibold text-white tracking-tight">
            Executive Biography
          </h1>
          <p className="text-sm font-body text-executive-gold mt-3 tracking-wide">
            Commercial Benefits & Incentives Team Leader
          </p>
        </div>
      </section>

      {/* Bio Content */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto space-y-6 font-body text-executive-slate leading-[1.85] reveal" style={{ textWrap: "pretty" }}>
          <p>
            Amy Dixon is a commercially focused Benefits & Incentives Leader with over 15 years' experience driving employee engagement, revenue growth, and operational excellence across global client portfolios. She specialises in scaling digital benefits platforms, increasing adoption of incentive programs, and embedding governance frameworks that align commercial performance with regulatory compliance.
          </p>
          <p>
            Currently serving as Senior Client Account Team Manager within a global benefits and payments organisation supporting 75,000+ corporate clients and 2.5m+ end users, Amy leads a high-performing Client Account Management function responsible for strategic portfolio growth, stakeholder alignment, and engagement optimisation. She has successfully delivered a threefold increase in user engagement and spend across key incentive programs while consistently exceeding annual commercial targets.
          </p>
          <p>
            Amy is recognised for her structured leadership approach, combining data-driven decision making with strong executive stakeholder management. Amy's core skills in communication, public speaking and networking are vital in both client and internal relationships and help foster collaboration across teams while strengthening external partnerships. She partners cross-functionally with HR, Finance, Operations, Product, and Marketing teams to influence roadmap development, pricing alignment, and revenue expansion strategies. Her leadership has resulted in scalable onboarding frameworks, KPI-led performance governance, and a 40% internal promotion rate within her team.
          </p>
          <p>
            With deep expertise in CRM systems, SQL-based reporting, compliance oversight, and lifecycle communication strategy, Amy ensures operational rigour while driving measurable commercial uplift. She brings a balanced leadership style, analytical, collaborative, and outcomes-focused, enabling organisations to strengthen employee value propositions while achieving sustainable growth.
          </p>
          <p>
            Amy continues to expand her expertise within the broader reward and compensation landscape, with a focus on innovation, market intelligence, and executive-level strategic impact.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
