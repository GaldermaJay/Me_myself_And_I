import SectionReveal from "@/components/SectionReveal";

export default function About() {
  return (
    <section id="philosophy" className="section-shell pt-8">
      <SectionReveal className="section-card mx-auto max-w-5xl">
        <p className="section-kicker">Philosophy</p>
        <h2 className="section-title">
          Sales is about trust.
          <br />
          핵심은 <span className="text-accent">운</span>이 아니라{" "}
          <span className="text-accent">일관성</span>입니다.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-700 md:text-lg">
          한 번의 성과는 우연일 수 있습니다. 하지만 세 번, 네 번, 다섯 번의
          연속된 성과는 시스템과 실행력의 결과입니다.
        </p>
        <p className="mt-6 inline-flex rounded-xl border border-slate-300 bg-slate-100 px-4 py-2 text-base font-bold tracking-wide text-slate-800 md:text-lg">
          Ranked Top 3% → Special Promotion → Network Clinic Specialist →
          Consultant
        </p>
      </SectionReveal>
    </section>
  );
}
