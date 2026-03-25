import Footer from "@/components/Footer";
import { Download, FileText } from "lucide-react";

const docs = [
  { name: "Executive CV", file: "/documents/Amy_Louise_Dixon_CV_16.3.26.docx", type: "DOCX" },
  { name: "Executive Biography", file: "/documents/Amy_Louise_Dixon_Executive_BIO_16.3.26.docx", type: "DOCX" },
  { name: "SWOT Analysis", file: "/documents/Amy_Louise_Dixon_SWOT_16.3.26.docx", type: "DOCX" },
];

export default function Documents() {
  return (
    <div className="page-fade-in pt-16">
      <section className="bg-executive-dark py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto reveal">
          <div className="gold-line mb-6" />
          <h1 className="text-3xl md:text-4xl font-display font-semibold text-white tracking-tight">
            Documents
          </h1>
          <p className="text-sm font-body text-white/50 mt-3">
            Download executive materials
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-2xl mx-auto space-y-4">
          {docs.map((d, i) => (
            <a
              key={d.name}
              href={d.file}
              download
              className={`flex items-center justify-between p-6 rounded border border-border bg-executive-warm hover:border-executive-gold/50 transition-all active:scale-[0.98] group reveal reveal-delay-${i + 1}`}
            >
              <div className="flex items-center gap-4">
                <FileText size={20} className="text-executive-gold" />
                <div>
                  <p className="text-sm font-body font-semibold text-executive-dark">{d.name}</p>
                  <p className="text-xs font-body text-executive-slate">{d.type}</p>
                </div>
              </div>
              <Download size={18} className="text-executive-slate group-hover:text-executive-gold transition-colors" />
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
