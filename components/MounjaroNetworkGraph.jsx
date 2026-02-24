"use client";

import { useMemo } from "react";

const CENTER_LABEL = "마운자로";

const KEYWORDS = [
  "오젬픽 비교",
  "위고비 비교",
  "삭센다 비교",
  "트루리시티 비교",
  "오젬픽 전환",
  "체중감량 효과",
  "전후 변화",
  "1개월 결과",
  "성공 사례",
  "정체기",
  "2.5mg",
  "5mg",
  "7.5mg",
  "10mg",
  "15mg",
  "주사 부위",
  "주사 방법",
  "복용 누락",
  "메스꺼움",
  "위마비",
  "황화수소 트림",
  "갑상선암 경고",
  "탈모",
  "피로감",
  "췌장염",
  "세이빙카드",
  "쿠폰",
  "보험 적용",
  "사전 승인",
  "품절",
  "FDA 승인 상태",
  "피해야 할 음식",
  "음주",
  "단백질 섭취",
  "식욕 소음",
  "권장 식단",
  "작용 기전",
  "반감기",
  "인슐린 저항성",
  "다낭성난소증후군",
  "간 건강",
  "젭바운드",
  "GLP-1/GIP",
  "체중감량 주사",
  "일라이릴리",
  "제네릭",
  "한국 출시 현황",
  "비만 치료",
  "제2형 당뇨",
  "주 1회 주사"
];

const TREND_COUNTS = {
  "오젬픽 비교": 650,
  "위고비 비교": 2250,
  "삭센다 비교": 750,
  "트루리시티 비교": 650,
  "오젬픽 전환": 650,
  "체중감량 효과": 650,
  "전후 변화": 1150,
  "1개월 결과": 650,
  "성공 사례": 1150,
  "정체기": 650,
  "2.5mg": 650,
  "5mg": 4050,
  "7.5mg": 650,
  "10mg": 850,
  "15mg": 750,
  "주사 부위": 1300,
  "주사 방법": 700,
  "복용 누락": 650,
  "메스꺼움": 650,
  "위마비": 1350,
  "황화수소 트림": 650,
  "갑상선암 경고": 650,
  "탈모": 950,
  "피로감": 650,
  "췌장염": 850,
  "세이빙카드": 1300,
  "쿠폰": 650,
  "보험 적용": 750,
  "사전 승인": 650,
  "품절": 850,
  "FDA 승인 상태": 650,
  "피해야 할 음식": 650,
  "음주": 750,
  "단백질 섭취": 1401,
  "식욕 소음": 650,
  "권장 식단": 650,
  "작용 기전": 700,
  "반감기": 700,
  "인슐린 저항성": 1251,
  "다낭성난소증후군": 1201,
  "간 건강": 650,
  "젭바운드": 1902,
  "GLP-1/GIP": 650,
  "체중감량 주사": 1501,
  "일라이릴리": 1601,
  "제네릭": 650,
  "한국 출시 현황": 650,
  "비만 치료": 1201,
  "제2형 당뇨": 1301,
  "주 1회 주사": 1151
};

const BLUE = "#2563eb";
const ALERT_RED = "#ef4444";
const GREEN = "#65a30d";
const MG_GRAY = "#9ca3af";
const CENTER_IMAGE_URL =
  "https://pds.medicaltimes.com/NewsPhoto/20240801/1722470645.png";

const COMPARISON_SET = new Set([
  "오젬픽 비교",
  "위고비 비교",
  "삭센다 비교",
  "트루리시티 비교",
  "오젬픽 전환",
  "젭바운드"
]);

const SIDE_EFFECT_SET = new Set([
  "메스꺼움",
  "위마비",
  "황화수소 트림",
  "갑상선암 경고",
  "탈모",
  "피로감",
  "췌장염",
  "간 건강"
]);

const wrapperStyle = {
  width: "100%",
  borderRadius: "18px",
  border: "1px solid #d1d5db",
  background: "#ffffff",
  padding: "14px"
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  gap: "10px",
  borderBottom: "1px solid #e5e7eb",
  paddingBottom: "10px",
  marginBottom: "10px"
};

const titleStyle = {
  margin: 0,
  fontSize: "0.91rem",
  fontWeight: 500,
  color: "#111827"
};

const helperStyle = {
  margin: 0,
  fontSize: "0.9rem",
  color: "#6b7280",
  textAlign: "right"
};

const getKeywordColor = (keyword) => {
  if (keyword.toLowerCase().includes("mg")) return MG_GRAY;
  if (COMPARISON_SET.has(keyword)) return BLUE;
  if (SIDE_EFFECT_SET.has(keyword)) return ALERT_RED;
  return GREEN;
};

const getPillWidth = (label) => {
  const chars = Array.from(label);
  const wideCount = chars.filter((ch) => /[^\u0000-\u00ff]/.test(ch)).length;
  const narrowCount = chars.length - wideCount;
  const estimatedWidth = wideCount * 20 + narrowCount * 12 + 40;
  return Math.max(124, estimatedWidth);
};

const getGoogleSearchUrl = (keyword) =>
  `https://www.google.com/search?q=${encodeURIComponent(`${CENTER_LABEL} ${keyword}`)}`;

export default function MounjaroNetworkGraph() {
  const rankedData = useMemo(() => {
    return KEYWORDS.map((keyword) => ({ keyword, count: TREND_COUNTS[keyword] ?? 650 }))
      .sort((a, b) => b.count - a.count)
      .map((row, idx) => ({
        ...row,
        rank: idx + 1,
        color: getKeywordColor(row.keyword)
      }));
  }, []);

  const graph = useMemo(() => {
    const width = 1180;
    const height = 1700;
    const cx = width / 2;
    const cy = height / 2;
    const ringConfigs = [
      { count: 10, radiusX: 230, radiusY: 320, offset: 0.08 },
      { count: 12, radiusX: 315, radiusY: 485, offset: 0.22 },
      { count: 14, radiusX: 405, radiusY: 645, offset: 0.04 },
      { count: 14, radiusX: 485, radiusY: 790, offset: 0.18 }
    ];

    const nodes = rankedData.map((row, index) => {
      const firstBreak = ringConfigs[0].count;
      const secondBreak = firstBreak + ringConfigs[1].count;
      const thirdBreak = secondBreak + ringConfigs[2].count;
      const ringIndex = index < firstBreak ? 0 : index < secondBreak ? 1 : index < thirdBreak ? 2 : 3;
      const ringStart =
        ringIndex === 0
          ? 0
          : ringIndex === 1
            ? firstBreak
            : ringIndex === 2
              ? secondBreak
              : thirdBreak;
      const localIndex = index - ringStart;
      const ringSize = ringConfigs[ringIndex].count;
      const offset = ringConfigs[ringIndex].offset;
      const angle = (localIndex / ringSize) * Math.PI * 2 + offset;
      const radiusX = ringConfigs[ringIndex].radiusX;
      const radiusY = ringConfigs[ringIndex].radiusY;

      const x = cx + Math.cos(angle) * radiusX;
      const y = cy + Math.sin(angle) * radiusY;

      return {
        ...row,
        x,
        y,
        pillWidth: getPillWidth(row.keyword),
        pillHeight: 46
      };
    });

    return { width, height, cx, cy, nodes };
  }, [rankedData]);

  return (
    <section style={wrapperStyle} aria-label="마운자로 중심 50개 연관키워드 네트워크">
      <div style={headerStyle}>
        <h3 style={titleStyle}>
          <span className="lilly-mark" style={{ fontWeight: 500 }}>마운자로</span> 연관 검색어 50 Keywords (By Google
          Analytics Trends) (2026. 02. 22 기준)
        </h3>
        <p style={helperStyle}>마운자로와 50개 한국어 키워드를 선으로 직접 연결</p>
      </div>

      <div className="keyword-layout" style={{ display: "grid", gridTemplateColumns: "1fr 390px", gap: "16px" }}>
        <div
          style={{
            position: "relative",
            minHeight: "980px",
            height: "96vh",
            overflow: "hidden",
            border: "1px solid #e5e7eb",
            borderRadius: "14px",
            background: "#ffffff"
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox={`0 0 ${graph.width} ${graph.height}`}
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="마운자로 중심 50개 한국어 연관키워드 관계도"
          >
            <g>
              {graph.nodes.map((node) => (
                <line
                  key={`line-${node.keyword}`}
                  x1={graph.cx}
                  y1={graph.cy}
                  x2={node.x}
                  y2={node.y}
                  stroke="#c7cbd3"
                  strokeWidth="1.2"
                />
              ))}
            </g>

            <g>
              {graph.nodes.map((node) => (
                <a
                  key={`node-${node.keyword}`}
                  href={getGoogleSearchUrl(node.keyword)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${node.keyword} 구글 검색`}
                  style={{ cursor: "pointer" }}
                >
                  <g transform={`translate(${node.x}, ${node.y})`}>
                    <rect
                      x={-node.pillWidth / 2}
                      y={-node.pillHeight / 2}
                      width={node.pillWidth}
                      height={node.pillHeight}
                      rx="21"
                      fill={node.color}
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                    <text
                      x="0"
                      y="2"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="20"
                      fontWeight="700"
                      fill="#ffffff"
                    >
                      {node.keyword}
                    </text>
                  </g>
                </a>
              ))}
            </g>

            <g>
              <image
                href={CENTER_IMAGE_URL}
                x={graph.cx - 66}
                y={graph.cy - 66}
                width="132"
                height="132"
                preserveAspectRatio="xMidYMid meet"
              />
            </g>
          </svg>
        </div>

        <aside
          style={{
            minHeight: "980px",
            height: "96vh",
            overflow: "auto",
            border: "1px solid #dbe1ea",
            borderRadius: "14px",
            background: "#ffffff"
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <thead style={{ position: "sticky", top: 0, zIndex: 2 }}>
              <tr>
                <th style={{ background: "#1565c0", color: "#fff", padding: "12px 8px", fontSize: "14px" }}>순위</th>
                <th style={{ background: "#0d47a1", color: "#fff", padding: "12px 8px", fontSize: "14px" }}>연관어</th>
                <th style={{ background: "#1565c0", color: "#fff", padding: "12px 8px", fontSize: "14px" }}>건수</th>
              </tr>
            </thead>
            <tbody>
              {rankedData.map((row) => (
                <tr key={`row-${row.keyword}`} style={{ borderBottom: "1px solid #edf0f4" }}>
                  <td style={{ textAlign: "center", padding: "10px 6px", fontSize: "14px", color: "#111827", fontWeight: 700 }}>
                    {row.rank}
                  </td>
                  <td style={{ padding: "10px 8px", fontSize: "14px", color: row.color, fontWeight: 800 }}>
                    <a
                      href={getGoogleSearchUrl(row.keyword)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {row.keyword}
                    </a>
                  </td>
                  <td style={{ textAlign: "right", padding: "10px 10px", fontSize: "14px", color: "#111827", fontVariantNumeric: "tabular-nums" }}>
                    {row.count.toLocaleString("ko-KR")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </aside>
      </div>

      <style jsx>{`
        @media (max-width: 1100px) {
          .keyword-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
