import SectionReveal from "@/components/SectionReveal";

export default function WhyLilly() {
  return (
    <section id="why-lilly" className="section-shell">
      <SectionReveal className="section-card">
        <p className="section-kicker">
          Why <span className="lilly-mark">Eli Lilly</span>
        </p>
        <h2 className="section-title">
          <span className="text-accent">The 5th Proof.</span>
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
          일동제약, 갈더마코리아, LG화학에서 검증한 성과를 바탕으로,{" "}
          <span className="lilly-mark">Eli Lilly</span>의 혁신 파이프라인을 시장
          성과로 연결하겠습니다. 제품을 넘어 가치를 전달하는 Consultative Sales
          파트너가 되겠습니다.
        </p>
      </SectionReveal>
    </section>
  );
}
