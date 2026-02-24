"use client";

import { useEffect, useRef, useState } from "react";

type SlideItem = {
  src: string;
  alt: string;
  wide?: boolean;
  doc?: boolean;
  href?: string;
  video?: boolean;
};

type CareerPhotoSliderProps = {
  items: SlideItem[];
  ariaLabel: string;
};

export default function CareerPhotoSlider({ items, ariaLabel }: CareerPhotoSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const updateButtons = () => {
      const maxLeft = slider.scrollWidth - slider.clientWidth;
      setCanPrev(slider.scrollLeft > 4);
      setCanNext(slider.scrollLeft < maxLeft - 4);
    };

    updateButtons();
    slider.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);

    return () => {
      slider.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  const move = (direction: "prev" | "next") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const step = Math.max(280, Math.round(slider.clientWidth * 0.72));
    slider.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  };

  return (
    <div className="career-slider-wrap">
      <button
        type="button"
        className="career-slider-arrow career-slider-arrow-left"
        aria-label="이전 사진 보기"
        onClick={() => move("prev")}
        disabled={!canPrev}
      >
        <svg viewBox="0 0 24 24" className="career-slider-arrow-svg" aria-hidden="true">
          <path d="M15 4L8 12L15 20" />
        </svg>
      </button>

      <div ref={sliderRef} className="career-slider" role="region" aria-label={ariaLabel}>
        {items.map((item) => (
          <a
            key={`${item.src}-${item.href ?? "self"}`}
            className={`career-album-card career-slider-card${item.wide ? " is-wide" : ""}${
              item.doc ? " is-doc" : ""
            }${item.video ? " is-video" : ""}`}
            href={item.href ?? item.src}
            title={item.video ? "YouTube 영상 보기" : undefined}
            aria-label={item.video ? `${item.alt} (YouTube)` : item.alt}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={item.src} alt={item.alt} />
            {item.video ? (
              <span className="career-slider-video-badge" aria-hidden="true">
                ▶ YouTube
              </span>
            ) : null}
          </a>
        ))}
      </div>

      <button
        type="button"
        className="career-slider-arrow career-slider-arrow-right"
        aria-label="다음 사진 보기"
        onClick={() => move("next")}
        disabled={!canNext}
      >
        <svg viewBox="0 0 24 24" className="career-slider-arrow-svg" aria-hidden="true">
          <path d="M15 4L8 12L15 20" />
        </svg>
      </button>
    </div>
  );
}
