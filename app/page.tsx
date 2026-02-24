import EvidenceSection from "@/components/EvidenceSection";
import ProvenPerformanceSection from "@/components/ProvenPerformanceSection";
import CareerPhotoSlider from "@/components/CareerPhotoSlider";

export default function Home() {
  return (
    <>
      <header className="site-top">
        <a href="#top" className="focus-ring site-brand" aria-label="상단으로 이동">
          LIM JOOYOUNG
        </a>
        <nav className="site-nav" aria-label="주요 메뉴">
          <a className="focus-ring" href="#about">
            About
          </a>
          <a className="focus-ring nav-lilly" href="#evidence">
            Why me? Competitive Edge!
          </a>
          <a className="focus-ring" href="#work">
            Career
          </a>
          <a className="focus-ring" href="#event">
            Event
          </a>
          <a className="focus-ring" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <main id="top" className="site-shell">
        <section id="about">
          <div className="about-copy">
            <h2 className="block-title">About</h2>
            <p className="name-title about-name-gradient">LIM JOOYOUNG</p>
            <p className="lead-copy">
              열심히, 잘 하겠다는 외마디 공수표가 아닌 그간의 족적으로서 저를
              소개합니다.
              <br />
              운좋게 한 해쯤 잘 될 수 있습니다. 어쩌면 두 해쯤 잘될 수도 있습니다.
              <br />
              하지만 연이은 고성과는 분명 그 결과 이면의 과정을 통해 만들어진다고
              생각합니다.
              <br />
              <br />
              저는 지난 8년 3개월 여간 일동제약, 갈더마코리아, LG화학을 거치며
              <br />
              Generalist에서 Specialist 그리고 Consultant형 세일즈맨으로
              성장했습니다.
            </p>
            <p className="body-copy">
              제가 추구하는 영업은 단순한 제품 전달이 아니라 고객의 시장 기회와 운영
              전략까지 함께 설계하는 일입니다.
              <br />
              이제 그 실행력을{" "}
              <span className="lilly-mark">일라이 릴리(Eli Lilly)</span>에서 더 큰
              성과로 연결하고자 지원하게 되었습니다.
            </p>
          </div>
        </section>

        <ProvenPerformanceSection />

        <EvidenceSection />

        <section id="work" className="content-block">
          <h2 className="block-title">Career</h2>

          <section className="career-album" aria-label="일동제약 성과 사진첩">
            <CareerPhotoSlider
              ariaLabel="일동제약 성과 슬라이드"
              items={[
                {
                  src: "/career/ildong/ipclub-plaque.jpg",
                  alt: "일동제약 IP Club 트로피",
                },
                {
                  src: "/career/ildong/ipclub-certificate.jpg",
                  alt: "일동제약 IP Club 상장",
                  doc: true,
                },
                {
                  src: "/career/ildong/ipclub-stage-1.jpg",
                  alt: "IP Club 시상식 무대 장면 1",
                  wide: true,
                },
                {
                  src: "/career/ildong/ipclub-stage-2.jpg",
                  alt: "IP Club 시상식 무대 장면 2",
                  wide: true,
                },
                {
                  src: "/career/ildong/ipclub-stage-close.jpg",
                  alt: "IP Club 시상식 클로즈업 장면",
                  wide: true,
                },
                {
                  src: "/career/ildong/bgm-award-certificate.jpg",
                  alt: "일동제약 BGM 5위 장려상 상장",
                  doc: true,
                },
                {
                  src: "/career/ildong/ipclub-pin.jpg",
                  alt: "일동제약 IP Club 배지",
                },
                {
                  src: "/career/ildong/ildong-s-grade-screen.png",
                  alt: "일동제약 연도별 개인평가 결과 S 100.00 S 화면",
                  wide: true,
                },
              ]}
            />
          </section>

          <article className="entry">
            <p className="entry-title">Ildong Pharmaceutical</p>
            <p className="entry-meta">2017.11 - 2021.11 | Medical Representative</p>
            <p className="entry-text">
              G1(사원) → G2(대리) 특별 승진, Top 3% 성과 달성(190명 중 7위)
              <br />
              <strong className="lilly-mark">
                3개년 평가 S(2019), A(2020), S(~2021.11)
              </strong>
              를 기록하며 일관된 실행력을 입증했습니다.
            </p>
          </article>

          <section className="career-album" aria-label="갈더마코리아 성과 사진첩">
            <CareerPhotoSlider
              ariaLabel="갈더마코리아 성과 슬라이드"
              items={[
                {
                  src: "/career/galderma/galderma-kickoff.jpeg",
                  alt: "갈더마코리아 킥오프 무대 발표",
                  wide: true,
                },
                {
                  src: "/career/galderma/galderma-jpac-2022.png",
                  alt: "갈더마 JPAC Achievers Club 2022 증서",
                  doc: true,
                },
                {
                  src: "/career/galderma/galderma-gain-korea-group.jpeg",
                  alt: "갈더마 GAIN KOREA 단체 사진",
                  wide: true,
                },
                {
                  src: "/career/galderma/galderma-gain-hall.jpeg",
                  alt: "갈더마 GAIN KOREA 행사장 전경",
                  wide: true,
                },
                {
                  src: "/career/galderma/galderma-gain-stage.jpeg",
                  alt: "갈더마 GAIN KOREA 무대 세션",
                  wide: true,
                },
              ]}
            />
          </section>

          <article className="entry">
            <p className="entry-title">Galderma Korea</p>
            <p className="entry-meta">2021.11 - 2023.06 | Aesthetics Sales Account</p>
            <p className="entry-text">
              강남권 대형 클리닉 및 수도권 네트워크 클리닉을 담당하며 Restylane,
              Sculptra, Dysport 등 프리미엄 제품의 포지셔닝과 현장 확장 세일즈를
              수행했습니다.
              <br />
              :{" "}
              <strong className="lilly-mark">
                JPAC Achievers Club (2022 Top Performer)
              </strong>
            </p>
          </article>

          <section className="career-album" aria-label="LG화학 성과 사진첩">
            <CareerPhotoSlider
              ariaLabel="LG화학 성과 슬라이드"
              items={[
                {
                  src: "https://img.youtube.com/vi/whuO6Y4_fOw/hqdefault.jpg",
                  href: "https://www.youtube.com/watch?v=whuO6Y4_fOw",
                  alt: "LG화학 벨라콜린 시술 영상 제작 (청담 포에버의원)",
                  wide: true,
                  video: true,
                },
                {
                  src: "/career/lgchem/lg-live-seminar.jpg",
                  alt: "LG화학 라이브 세미나 현장",
                  wide: true,
                },
                {
                  src: "/career/lgchem/lg-abc-seminar.jpg",
                  alt: "LG화학 ABC 세미나 교육 현장",
                  wide: true,
                },
                {
                  src: "/career/lgchem/lg-y-solution-poster.jpg",
                  alt: "LG화학 Y-Solution 포스터",
                  doc: true,
                },
                {
                  src: "/career/lgchem/lg-performance-2024-2025.jpeg",
                  alt: "LG화학 2024-2025 성과 보고 인포그래픽",
                  wide: true,
                },
                {
                  src: "/career/lgchem/lgc-2024-evaluation.png",
                  href: "/career/lgchem/lgc-2024-evaluation.pdf",
                  alt: "LG화학 2024 성과평가 PDF",
                  doc: true,
                },
                {
                  src: "/career/lgchem/lgc-2025-evaluation.png",
                  href: "/career/lgchem/lgc-2025-evaluation.pdf",
                  alt: "LG화학 2025 성과평가 PDF",
                  doc: true,
                },
              ]}
            />
          </section>

          <article className="entry">
            <p className="entry-title">LG Chem</p>
            <p className="entry-meta">2023.06 - 2026.03 | Key Account Manager(KAM)</p>
            <p className="entry-text">
              트렌드 데이터 기반 제안형 영업으로 병원별 마케팅 리소스를 최적화하며
              컨설팅형 세일즈 역할을 강화했습니다. 의료인 뿐만 아니라, 전담
              네트워크 병원과 연계된 MSO(Management Service Organization)와 유통
              및 마케팅 방향도 함께 논의하며, 보다 거시적인 세일즈를 수행했습니다.
              <br />
              :{" "}
              <strong className="lilly-mark">LG화학 KPI →</strong>{" "}
              <strong className="lilly-mark">2024(A), 2025(A)</strong> 평가
            </p>
          </article>
        </section>

        <section id="event" className="content-block">
          <h2 className="block-title">Event</h2>
          <section className="career-album" aria-label="이벤트 사진첩">
            <CareerPhotoSlider
              ariaLabel="이벤트 활동 슬라이드"
              items={[
                {
                  src: "/event/event-20251201-academy-forum.jpg",
                  alt: "LG aesthetics Academy Investigators Forum 단체 사진",
                },
                {
                  src: "/event/event-20251101-leaders-forum.jpg",
                  alt: "Y-Solution Leaders Forum 현장",
                },
                {
                  src: "https://img.youtube.com/vi/s4jG4J909uA/hqdefault.jpg",
                  href: "https://www.youtube.com/watch?v=s4jG4J909uA",
                  alt: "병동 클리의원 벨라콜린 라이브 서저리 영상",
                  video: true,
                  wide: true,
                },
                {
                  src: "https://img.youtube.com/vi/mEgzKFRUedg/hqdefault.jpg",
                  href: "https://www.youtube.com/watch?v=mEgzKFRUedg",
                  alt: "벨라콜린 라이브 서저리 영상",
                  video: true,
                  wide: true,
                },
                {
                  src: "/event/event-kleam-shoot.jpg",
                  alt: "메디컬 에스테틱 촬영 현장",
                  wide: true,
                },
                {
                  src: "/event/event-20241211-seminar.jpg",
                  alt: "2024년 12월 제품 설명회 현장",
                  wide: true,
                },
                {
                  src: "/event/event-20250427-seminar.jpg",
                  alt: "2025년 4월 병원 대상 세션 진행",
                  wide: true,
                },
                {
                  src: "/event/event-20250627-seminar.jpg",
                  alt: "2025년 6월 세미나 전담 교육",
                },
                {
                  src: "/event/event-classroom-session.jpg",
                  alt: "강의실 세션 운영 장면",
                  wide: true,
                },
                {
                  src: "/event/event-darkroom-session.jpg",
                  alt: "다크룸 제품 설명회 장면",
                  wide: true,
                },
              ]}
            />
          </section>
        </section>

        <section id="contact" className="content-block">
          <h2 className="block-title">Contact</h2>
          <p className="body-copy">LIM JOOYOUNG</p>
          <p className="body-copy">
            Email:{" "}
            <a className="focus-ring inline-link" href="mailto:openmaheart@naver.com">
              openmaheart@naver.com
            </a>
          </p>
          <p className="body-copy">
            <a
              className="focus-ring inline-link"
              href="/resume/Resume.pdf"
              download="Resume.pdf"
            >
              Download Full Resume
            </a>
          </p>
        </section>
      </main>

      <footer className="site-foot">
        <div className="site-shell foot-inner">
          <a className="focus-ring inline-link" href="mailto:openmaheart@naver.com">
            Email
          </a>
          <a className="focus-ring inline-link" href="#top">
            Top
          </a>
        </div>
      </footer>
    </>
  );
}
