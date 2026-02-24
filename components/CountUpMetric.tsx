"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CountUpMetricProps = {
  title: string;
  value: number;
  detail: string;
  suffix?: string;
  durationMs?: number;
};

export default function CountUpMetric({
  title,
  value,
  detail,
  suffix = "",
  durationMs = 1400
}: CountUpMetricProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let raf = 0;
    const start = performance.now();

    const tick = (time: number) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / durationMs, 1);
      setCurrent(Math.floor(progress * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [durationMs, isInView, value]);

  return (
    <div ref={ref} className="rounded-2xl border border-slate-300 bg-white p-4">
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-700">
        {title}
      </p>
      <p className="mt-2 font-display text-3xl font-bold text-ink">
        {current}
        {suffix}
      </p>
      <p className="mt-1 text-base text-slate-700">{detail}</p>
    </div>
  );
}
