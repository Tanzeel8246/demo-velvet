"use client";

import { useCallback, useEffect, useState } from "react";
import { TESTIMONIALS } from "@/lib/site";
import { ArrowLeft, ArrowRight } from "./icons";

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => go(1), 6000);
    return () => window.clearInterval(t);
  }, [paused, go]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel-track">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={t.name}
            className={`carousel-slide ${i === index ? "active" : ""}`}
            aria-hidden={i !== index}
          >
            <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
            <p className="carousel-quote">“{t.quote}”</p>
            <div className="carousel-who">
              <b>{t.name}</b>
              <span>{t.city}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-nav">
        <button className="carousel-arrow" onClick={() => go(-1)} aria-label="Previous testimonial">
          <ArrowLeft />
        </button>
        <div className="carousel-dots">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              className={`carousel-dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button className="carousel-arrow" onClick={() => go(1)} aria-label="Next testimonial">
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
