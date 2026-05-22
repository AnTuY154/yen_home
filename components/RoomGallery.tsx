"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function RoomGallery({ images, roomName }: { images: string[]; roomName: string }) {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowRight") setActive((current) => (current + 1) % images.length);
      if (event.key === "ArrowLeft") setActive((current) => (current - 1 + images.length) % images.length);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [images.length, isOpen]);

  const goNext = () => setActive((current) => (current + 1) % images.length);
  const goPrev = () => setActive((current) => (current - 1 + images.length) % images.length);

  return (
    <>
      <div className="grid gap-4">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative aspect-[4/3] overflow-hidden rounded-[36px] text-left shadow-soft"
          aria-label={`Mở album ảnh ${roomName}`}
        >
          <Image src={images[active]} alt={`${roomName} ảnh ${active + 1}`} fill priority className="object-cover transition duration-700 group-hover:scale-105" />
          <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-sm font-black text-wood">
            Chạm để xem toàn màn hình
          </span>
          <span className="absolute right-5 top-5 rounded-full bg-ink/70 px-4 py-2 text-sm font-black text-white">
            {active + 1}/{images.length}
          </span>
        </button>
        <div className="grid grid-cols-4 gap-3">
          {images.map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              onClick={() => setActive(index)}
              className={`relative aspect-square overflow-hidden rounded-2xl border-2 transition ${
                index === active ? "border-leaf" : "border-transparent opacity-70 hover:opacity-100"
              }`}
              aria-label={`Xem ảnh ${index + 1} của ${roomName}`}
            >
              <Image src={src} alt={`${roomName} thumbnail ${index + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-[80] bg-ink/95 p-4 text-white">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 z-10 rounded-full bg-white px-5 py-3 text-sm font-black text-ink"
          >
            Đóng
          </button>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-3xl font-black backdrop-blur"
            aria-label="Ảnh trước"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-3xl font-black backdrop-blur"
            aria-label="Ảnh tiếp theo"
          >
            ›
          </button>
          <div className="relative h-full w-full">
            <Image src={images[active]} alt={`${roomName} ảnh toàn màn hình ${active + 1}`} fill className="object-contain" />
          </div>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-5 py-2 text-sm font-black backdrop-blur">
            {active + 1}/{images.length}
          </div>
        </div>
      ) : null}
    </>
  );
}
