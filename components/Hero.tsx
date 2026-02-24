"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="section-shell relative flex min-h-[92vh] items-center justify-center text-center"
    >
      <div className="w-full max-w-5xl">
        <motion.p
          className="section-kicker"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          PROVEN CONSISTENCY
        </motion.p>

        <motion.h1
          className="font-display text-5xl font-bold leading-[1.02] text-ink sm:text-7xl md:text-8xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          열심히, 잘 하겠다는 말뿐인 공수표가 아닌,
          <br />
          연이은 그간의 <span className="text-accent">결과</span>로서 저를 표현하고
          싶습니다.
        </motion.h1>

        <motion.p
          className="mx-auto mt-7 max-w-2xl text-base font-medium text-slate-700 sm:text-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Pharmaceutical &amp; Aesthetics Key Account Manager(KAM). Ready for{" "}
          <span className="lilly-mark">Eli Lilly</span>.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="#career"
            className="focus-ring rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-slate-800"
          >
            경력 보기
          </a>
          <a
            href="/resume-placeholder.txt"
            download
            className="focus-ring rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-accent hover:text-accent"
          >
            이력서 다운로드
          </a>
        </motion.div>

      </div>
      <motion.a
        href="#philosophy"
        aria-label="아래 섹션으로 이동"
        className="focus-ring absolute bottom-9 left-1/2 inline-flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
      >
        Scroll
        <motion.span
          className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-accent"
          animate={{ y: [0, 5, 0], scale: [1, 1.08, 1], opacity: [1, 0.55, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}
