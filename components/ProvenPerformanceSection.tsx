import { BadgeCheck, Trophy } from "lucide-react";

export default function ProvenPerformanceSection() {
  return (
    <section className="content-block evidence-block">
      <div className="evidence-panel">
        <p className="evidence-panel-title">Proven Performance</p>
        <div className="evidence-win-row">
          <div className="evidence-win-item">
            <Trophy size={18} />
            <span>일동제약 IP Club 및 3개년 평가 SAS</span>
          </div>
          <div className="evidence-win-item">
            <Trophy size={18} />
            <span>갈더마코리아 JPAC Achievers Club (2022)</span>
          </div>
          <div className="evidence-win-item">
            <Trophy size={18} />
            <span>LG화학 Grade A (2024, 2025)</span>
          </div>
        </div>

        <div className="evidence-growth-card">
          <div className="evidence-hybrid">
            <p className="evidence-hybrid-kicker">ETC의 전문성과 에스테틱의 감각을 겸비한</p>
            <p className="evidence-hybrid-head">Hybrid MR, 마운자로와 함께 나아가고 싶습니다.</p>

            <div className="evidence-venn">
              <div className="evidence-venn-circle left">
                <span>
                  ETC
                  <br />
                  Academic Rigor
                  <br />
                  (일동제약)
                </span>
              </div>
              <div className="evidence-venn-circle right">
                <span>
                  Aesthetic
                  <br />
                  Market Agility
                  <br />
                  (갈더마/LG화학)
                </span>
              </div>
              <div className="evidence-venn-overlap">
                <span>
                  Mounjaro
                  <br />
                  Specialist
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="evidence-badge">
          <BadgeCheck size={18} />
          <span>Consistently ranked in Top 10% across all companies</span>
        </div>
      </div>
    </section>
  );
}
