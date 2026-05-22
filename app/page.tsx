import type { Metadata } from "next";
import Image from "next/image";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RoomCard from "@/components/RoomCard";
import rooms from "@/data/rooms.json";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "Ban Công Homestay | Landing page đặt phòng",
  description: "Có một nơi để bạn tạm dừng thế giới ngoài kia. Xem phòng, feedback và đặt phòng Ban Công Homestay.",
};

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: site.name,
    address: site.address,
    telephone: site.phone,
    url: "https://ban-cong-homestay.vercel.app",
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-screen overflow-hidden">
          <Image src="/images/default.svg" alt="Ban Công Homestay" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-transparent" />
          <div className="relative z-10 flex min-h-screen items-end px-5 pb-24 pt-36 md:px-10 lg:px-16">
            <div className="max-w-4xl animate-fadeUp text-white">
              <span className="text-xs font-black uppercase tracking-[0.28em] text-cream">Ban Công Homestay</span>
              <h1 className="mt-5 font-serif text-6xl leading-[0.95] md:text-8xl">
                Có một nơi để bạn tạm dừng thế giới ngoài kia
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                Chậm lại - nghỉ ngơi - tận hưởng trong một căn phòng nhiều ánh sáng, có ban công, có mùi gỗ ấm
                và những khoảng yên vừa đủ.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#rooms" className="rounded-full bg-leaf px-7 py-4 font-black text-white shadow-xl shadow-leaf/25 transition hover:-translate-y-1">
                  Xem phòng
                </a>
                <a href={site.zalo} className="rounded-full border border-white/35 bg-white/10 px-7 py-4 font-black text-white backdrop-blur transition hover:-translate-y-1">
                  Nhắn Zalo
                </a>
              </div>
            </div>
          </div>
          <div className="glass absolute bottom-6 right-5 z-20 hidden max-w-xs rounded-[28px] p-6 shadow-soft md:block">
            <p className="kicker">Từ 300.000 VND</p>
            <h2 className="mt-2 font-serif text-3xl">4 phòng nghỉ</h2>
            <p className="mt-3 text-sm leading-6 text-ink/65">Dữ liệu local JSON, dễ đổi giá, ảnh và nội dung.</p>
          </div>
        </section>

        <section id="rooms" className="section-pad">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <span className="kicker">Phòng nghỉ</span>
              <h2 className="mt-3 font-serif text-5xl md:text-6xl">Đặt tên phòng có cảm xúc, khách sẽ nhớ lâu hơn.</h2>
            </div>
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
              {rooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-cream">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            {[
              ["Không gian chill", "Tone gỗ, cây xanh và ánh sáng tự nhiên giúp khách thấy muốn ở lại."],
              ["View đẹp", "Ban công, cửa sổ lớn và góc uống trà là điểm nhấn để kéo booking."],
              ["Giá hợp lý", "Mức giá rõ ràng, CTA rõ ràng, khách không phải hỏi quá nhiều."],
            ].map(([title, desc]) => (
              <article key={title} className="soft-card p-8 transition hover:-translate-y-2">
                <span className="kicker">Điểm mạnh</span>
                <h3 className="mt-4 font-serif text-4xl">{title}</h3>
                <p className="mt-4 leading-7 text-ink/65">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <BookingCTA />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
