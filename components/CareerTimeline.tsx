"use client";

import CountUpMetric from "@/components/CountUpMetric";
import SectionReveal from "@/components/SectionReveal";
import { careerItems } from "@/data/career";
import { motion, useScroll } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { useRef } from "react";

export default function CareerTimeline() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.25"]
  });

  return (
    <section id="career" className="section-shell">
      <SectionReveal>
        <p className="section-kicker">Career Timeline</p>
        <h2 className="section-title">
          일동제약·갈더마코리아·LG화학에서 증명한 성과,
          <br />
          <span className="text-accent">검증된 일관성</span>으로{" "}
          <span className="lilly-mark">Eli Lilly</span>에서 더 큰 결과를 만듭니다
        </h2>
      </SectionReveal>

      <div ref={timelineRef} className="relative mt-14 space-y-8 pl-10 md:pl-14">
        <div className="absolute bottom-2 left-[11px] top-2 w-[2px] bg-slate-400 md:left-4" />
        <motion.div
          className="absolute bottom-2 left-[11px] top-2 w-[2px] origin-top bg-accent md:left-4"
          style={{ scaleY: scrollYProgress }}
        />

        {careerItems.map((item, index) => (
          <SectionReveal key={item.company} delay={index * 0.08}>
            <article className="section-card relative">
              <span className="absolute -left-[34px] top-8 h-3 w-3 rounded-full border-2 border-accent bg-white md:-left-[46px]" />
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-800">
                <BriefcaseBusiness size={13} />
                {item.stage}
              </div>
              <h3 className="font-display text-3xl font-bold text-ink md:text-4xl">
                {item.company}
              </h3>
              <p className="mt-3 text-base font-bold text-accent md:text-lg">{item.period}</p>
              <p className="mt-4 text-base font-bold text-ink md:text-lg">
                {item.role}
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-800 md:text-lg">
                {item.summary}
              </p>

              {item.metrics && (
                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {item.metrics.map((metric) => (
                    <CountUpMetric
                      key={metric.title}
                      title={metric.title}
                      value={metric.value}
                      suffix={metric.suffix}
                      detail={metric.detail}
                    />
                  ))}
                  <div className="rounded-2xl border border-slate-300 bg-white p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-700">
                      Special Promotion
                    </p>
                    <p className="mt-2 font-display text-3xl font-bold text-ink">
                      G1(사원) → G2(대리)
                    </p>
                    <p className="mt-1 text-base text-slate-700">
                      First case in company history
                    </p>
                  </div>
                </div>
              )}

              <ul className="mt-6 space-y-2 text-base font-medium leading-relaxed text-slate-800 md:text-lg">
                {item.insights.map((insight) => (
                  <li key={insight} className="flex items-start gap-2">
                    <span className="mt-2.5 h-2 w-2 rounded-full bg-accent" />
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>

              {item.award && (
                <p className="mt-6 inline-flex rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold tracking-[0.08em] text-red-700">
                  Award: {item.award}
                </p>
              )}
            </article>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
