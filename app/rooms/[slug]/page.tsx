import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RoomGallery from "@/components/RoomGallery";
import RoomCard from "@/components/RoomCard";
import rooms from "@/data/rooms.json";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const room = rooms.find((item) => item.slug === params.slug);
  if (!room) return { title: "Phòng" };

  return {
    title: `${room.name} | Yên HomeStay`,
    description: room.description,
  };
}

export default function RoomDetail({ params }: Props) {
  const room = rooms.find((item) => item.slug === params.slug);
  if (!room) notFound();

  const similarRooms = rooms.filter((item) => item.slug !== room.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="pt-28">
        <section className="section-pad">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <RoomGallery images={room.images.length ? room.images : [room.thumbnail]} roomName={room.name} />
            <div className="animate-fadeUp">
              <Link href="/#rooms" className="font-black text-leaf">← Về danh sách phòng</Link>
              <h1 className="mt-5 font-serif text-6xl leading-none md:text-7xl">{room.name}</h1>
              <p className="mt-5 text-xl leading-9 text-ink/65">{room.description}</p>
              <p className="mt-6 text-4xl font-black text-wood">{room.price.toLocaleString("vi-VN")} VND/đêm</p>
              <div className="mt-7 flex flex-wrap gap-3">
                {room.features.map((feature) => (
                  <span key={feature} className="rounded-full bg-cream px-4 py-2 text-sm font-bold text-wood">
                    {feature}
                  </span>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="tel:0123456789" className="rounded-full bg-leaf px-7 py-4 font-black text-white transition hover:-translate-y-1">
                  Đặt phòng ngay
                </a>
                <a href="https://zalo.me/0123456789" className="rounded-full border border-wood/20 px-7 py-4 font-black text-wood transition hover:-translate-y-1">
                  Gọi / chat
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-cream">
          <div className="mx-auto max-w-7xl">
            <span className="kicker">Phòng tương tự</span>
            <h2 className="mt-3 font-serif text-5xl">Bạn cũng có thể thích</h2>
            <div className="mt-10 grid gap-7 md:grid-cols-3">
              {similarRooms.map((item) => (
                <RoomCard key={item.id} room={item} />
              ))}
            </div>
          </div>
        </section>

        <BookingCTA title={`Muốn giữ ${room.name}?`} />
      </main>
      <Footer />
    </>
  );
}
