"use client";

import {
  Microscope,
  Network,
  Users,
  ShieldCheck,
  ArrowLeftRight,
  Syringe
} from "lucide-react";
import MounjaroNetworkGraph from "@/components/MounjaroNetworkGraph.jsx";

export default function EvidenceSection() {
  return (
    <section id="evidence" className="content-block evidence-block">
      <h2 className="block-title evidence-title">
        Evidence-based Science of ETC + Patient-centric Strategy of Aesthetics
        <br />
        <span className="evidence-title-sub">
          (전문의약품의 의학적 영업과 에스테틱의 환자 중심 전략의 결합)
        </span>
      </h2>

      <div className="evidence-hero">
        <div className="evidence-hero-graph" aria-hidden="true">
          <svg viewBox="0 0 680 360" preserveAspectRatio="none">
            <polyline
              points="0,332 90,324 170,314 250,292 330,262 410,228 500,188 580,142 680,96"
              className="evidence-trend-line"
            />
          </svg>
        </div>

        <div className="evidence-hero-copy">
          <p className="evidence-eyebrow">Hero</p>
          <h3 className="evidence-headline">The Dual Agonist for Sales Success.</h3>
          <p className="evidence-body">
            마운자로의 GIP/GLP-1 시너지처럼, ETC의 '의학적 깊이'와 Aesthetics의
            '소비자 감각'을 결합하여 시장 지배력을 극대화할 준비된 MR, 임주영입니다.
            <br />
            <br />
            마운자로는 단순한 치료제를 넘어 환자가 직접 자가투약하는 '주 1회 솔루션'이며,
            대중의 관심이 집중된 제품입니다. 저는 단순한 정보 전달자에 머물지
            않겠습니다. 환자들이 무엇을 기대하고 우려하는지 'Patient Voice'를
            철저히 분석하여, 의료진에게 환자 관점의 실질적인 처방 솔루션을
            역제안(Reverse-Pitching)하는 인사이트 영업을 펼치겠습니다.
          </p>
        </div>

        <figure className="evidence-hero-photo">
          <a href="/profile/about-galderma.jpeg" target="_blank" rel="noopener noreferrer">
            <img src="/profile/about-galderma.jpeg" alt="임주영 프로필" />
          </a>
        </figure>
      </div>

      <div className="evidence-panel">
        <p className="evidence-panel-title">
          The Strategy for <span className="lilly-mark">Mounjaro</span>
        </p>
        <div className="evidence-strategy-grid">
          <article className="evidence-strategy-card">
            <Microscope size={20} />
            <h4>Scientific Detailing (For HCPs)</h4>
            <p>
              일동제약에서의 약동학/경제성 기반 디테일링 역량으로, 마운자로의
              복합 기전과 체중 감량 효과를 의료진에게 명확히 각인시키겠습니다.
            </p>
          </article>

          <article className="evidence-strategy-card">
            <Users size={20} />
            <h4>Patient Journey Management (For Patients)</h4>
            <p>
              갈더마/LG화학에서 의료진 뿐만 아니라, 상담실장을 대상으로 셀링포인트
              및 제품교육을 주관했던 경험을 살려, 비만 환자의 심리적 장벽을 낮추고
              시시각각 변화하는 시장 트렌드를 토대로 민첩한 상담 프로세스를 병원에
              제안하겠습니다.
            </p>
          </article>

          <article className="evidence-strategy-card">
            <Network size={20} />
            <h4>Dominating the Ecosystem (For Market)</h4>
            <p>
              MSO 및 대형 네트워크 관리 경험(KAM)을 통해, 마운자로가 대다수의 여타
              전문의약품과 달리 의료진의 처방 결정권 외에도 소비자의 약제에 대한
              관심도가 높은 비만 치료제라는 특성에 맞게 영업 및 마케팅 방향을
              모색하겠습니다.
            </p>
          </article>
        </div>

        <div className="evidence-keyword-intro" role="note" aria-label="연관 검색어 안내">
          <p>
            사람들은 <span className="lilly-mark">마운자로</span>에 대해 이런 것들을
            궁금해합니다.
          </p>
        </div>

        <div className="evidence-keyword-wrap">
          <MounjaroNetworkGraph />
        </div>

        <div className="evidence-insight-wrap">
          <p className="evidence-insight-lead">
            "구체적으로 저는 다음 3가지 Patient Insight에 기반한 솔루션을 의료진에게
            제안하겠습니다."
          </p>

          <figure className="evidence-insight-figure">
            <img
              src="/profile/patient-insight-solutions.png"
              alt="마운자로 환자 중심 3가지 솔루션 인포그래픽"
            />
          </figure>

          <div className="evidence-insight-grid">
            <article className="evidence-insight-card">
              <div className="evidence-insight-head">
                <ShieldCheck size={18} />
                <h5>Tolerability Management (적응 관리)</h5>
              </div>
              <p>
                환자들이 가장 우려하는 GI 트러블(메스꺼움)을 최소화할 수 있는
                '단계별 용량 적응(Titration) 프로토콜'과 환자 안심용 상담 스크립트를
                의료진에게 제공하여 처방 중단율(Drop-out)을 낮추겠습니다.
              </p>
            </article>

            <article className="evidence-insight-card">
              <div className="evidence-insight-head">
                <ArrowLeftRight size={18} />
                <h5>Switching Logic (전환 논리)</h5>
              </div>
              <p>
                기존 GLP-1 단일제 치료에 한계(정체기)를 느낀 환자들에게 GIP 이중
                작용 기전이 주는 '대사적 이점'을 알기 쉽게 설명할 수 있는 시각화
                자료를 제작, 경쟁 제품으로부터의 스위칭을 가속화하겠습니다.
              </p>
            </article>

            <article className="evidence-insight-card">
              <div className="evidence-insight-head">
                <Syringe size={18} />
                <h5>Adherence Support (순응도 강화)</h5>
              </div>
              <p>
                자가 주사에 대한 두려움을 낮추는 'Painless & Easy Use' 교육 키트를
                병원에 제안하여, 의료진의 설명 시간을 줄이고 환자의 장기 복약
                순응도를 높이는 '진료실의 파트너'가 되겠습니다.
              </p>
            </article>
          </div>
        </div>
      </div>

    </section>
  );
}
