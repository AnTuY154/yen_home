"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Banner = {
  src: string;
  eyebrow: string;
  title: string;
  subtitle: string;
};

export default function HeroSlider({ banners }: { banners: Banner[] }) {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % banners.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [banners.length]);

  const current = banners[active];
  const goNext = () => setActive((currentIndex) => (currentIndex + 1) % banners.length);
  const goPrev = () => setActive((currentIndex) => (currentIndex - 1 + banners.length) % banners.length);
  const handleTouchEnd = (clientX: number) => {
    if (touchStart === null) return;

    const distance = touchStart - clientX;
    if (Math.abs(distance) > 48) {
      if (distance > 0) goNext();
      else goPrev();
    }

    setTouchStart(null);
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
      onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}
    >
      {banners.map((banner, index) => (
        <Image
          key={banner.src}
          src={banner.src}
          alt={banner.title}
          fill
          priority={index === 0}
          className={`object-cover transition duration-1000 ${
            index === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink/55 to-transparent md:w-48" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink/35 to-transparent md:w-48" />
      <div className="relative z-10 flex min-h-screen items-end px-5 pb-24 pt-36 md:px-10 lg:px-16">
        <div className="max-w-4xl animate-fadeUp text-white">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-cream">{current.eyebrow}</span>
          <h1 className="mt-5 font-serif text-6xl leading-[0.95] md:text-8xl">{current.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{current.subtitle}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#rooms" className="rounded-full bg-leaf px-7 py-4 font-black text-white shadow-xl shadow-leaf/25 transition hover:-translate-y-1">
              Xem phòng
            </a>
            <a href="https://zalo.me/0123456789" className="rounded-full border border-white/35 bg-white/10 px-7 py-4 font-black text-white backdrop-blur transition hover:-translate-y-1">
              Nhắn Zalo
            </a>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={goPrev}
        className="absolute left-3 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-white/10 text-3xl font-black text-white shadow-2xl backdrop-blur transition hover:-translate-x-1 hover:bg-white/20 md:left-8 md:h-14 md:w-14"
        aria-label="Banner trước"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={goNext}
        className="absolute right-3 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-white/10 text-3xl font-black text-white shadow-2xl backdrop-blur transition hover:translate-x-1 hover:bg-white/20 md:right-8 md:h-14 md:w-14"
        aria-label="Banner tiếp theo"
      >
        ›
      </button>
      <div className="absolute bottom-8 left-5 z-20 flex gap-2 md:left-10 lg:left-16">
        {banners.map((banner, index) => (
          <button
            key={banner.src}
            type="button"
            aria-label={`Xem banner ${index + 1}`}
            onClick={() => setActive(index)}
            className={`h-2.5 rounded-full transition ${
              index === active ? "w-10 bg-leaf" : "w-2.5 bg-white/65 hover:bg-white"
            }`}
          />
        ))}
      </div>
      <div className="glass absolute bottom-6 right-5 z-20 hidden max-w-xs rounded-[28px] p-6 shadow-soft md:block">
        <p className="kicker">Từ 300.000 VND</p>
        <h2 className="mt-2 font-serif text-3xl">4 phòng nghỉ</h2>
        <p className="mt-3 text-sm leading-6 text-ink/65">Dữ liệu local JSON, dễ đổi giá, ảnh và nội dung.</p>
      </div>
    </section>
  );
}
