import SectionReveal from "@/components/SectionReveal";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <SectionReveal className="section-card">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">LIM JOOYOUNG</h2>

        <div className="mt-8 max-w-xl rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-700">
            <Mail size={14} />
            Email
          </p>
          <a
            href="mailto:openmaheart@naver.com"
            className="focus-ring mt-2 block text-base font-semibold text-slate-900"
          >
            openmaheart@naver.com
          </a>
        </div>

        <div className="mt-8">
          <a
            href="/resume-placeholder.txt"
            download
            className="focus-ring inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-[#d94431]"
          >
            Download Full Resume
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}
