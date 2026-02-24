export type CareerMetric = {
  title: string;
  value: number;
  suffix?: string;
  detail: string;
};

export type CareerItem = {
  stage: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  insights: string[];
  metrics?: CareerMetric[];
  award?: string;
};

export const careerItems: CareerItem[] = [
  {
    stage: "The Foundation",
    company: "일동제약",
    role: "Medical Representative",
    period: "2017.11 - 2021.11",
    summary: "신뢰와 접점 빈도가 성과를 만든다는 제약 영업의 본질을 체득",
    insights: [
      "Top 3% 성과 달성 (190명 중 7위)",
      "50M → 100M KRW, 200% 성장 달성",
      "G1(사원) → G2(대리) 특별 승진 (사내 최초 사례)"
    ],
    metrics: [
      {
        title: "Top Ranking",
        value: 3,
        suffix: "%",
        detail: "7th out of 190"
      },
      {
        title: "Sales Growth",
        value: 200,
        suffix: "%",
        detail: "50M → 100M KRW"
      }
    ]
  },
  {
    stage: "The Expansion",
    company: "갈더마코리아",
    role: "Key Account Manager(KAM)",
    period: "2021.11 - 2023.06",
    summary:
      "글로벌 에스테틱 시장에서 프리미엄 포지셔닝 전략과 대형 네트워크 운영 역량 확장",
    insights: [
      "주요 네트워크 클리닉 담당: 톡스앤필, 뮤즈, 샤인빔, 리엔장",
      "Restylane, Sculptra의 프리미엄 브랜딩 구축",
      "JPAC Achievers Club (Top Performer) 수상"
    ],
    award: "JPAC Achievers Club"
  },
  {
    stage: "The Mastery",
    company: "LG화학",
    role: "Key Account Manager(KAM)",
    period: "2023.06 - 2026.03",
    summary:
      "제품 판매를 넘어 시장 인사이트를 제안하는 컨설팅형 영업으로 역할 전환",
    insights: [
      "보조 역할에서 컨설턴트형 파트너로 전환",
      "예: 무마스크 전환기 '입술 필러' 검색 수요 상승을 분석해 병원별 마케팅 리소스 재배치 및 ROI 개선",
      "강남 상권에서 Y-Solution 프리미엄 라인 운영 성과 확보"
    ]
  }
];
