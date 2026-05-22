import type { Metadata } from "next";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import Navbar from "@/components/Navbar";
import RoomCard from "@/components/RoomCard";
import rooms from "@/data/rooms.json";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "Yên HomeStay | Landing page đặt phòng",
  description: "Có một nơi để bạn tạm dừng thế giới ngoài kia. Xem phòng, feedback và đặt phòng Yên HomeStay.",
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
  const banners = [
    {
      src: "/images/default.svg",
      eyebrow: "Yên HomeStay",
      title: "Có một nơi để bạn tạm dừng thế giới ngoài kia",
      subtitle:
        "Chậm lại - nghỉ ngơi - tận hưởng trong một căn phòng nhiều ánh sáng, có ban công, có mùi gỗ ấm và những khoảng yên vừa đủ.",
    },
    {
      src: "/images/room2.svg",
      eyebrow: "Phòng Nắng Ban Công",
      title: "Mở cửa ra là một buổi sáng thật chậm",
      subtitle:
        "Ban công, cửa sổ lớn và góc uống trà tạo nên một album nghỉ dưỡng dễ nhớ ngay từ lần đầu nhìn thấy.",
    },
    {
      src: "/images/room1.svg",
      eyebrow: "Phòng Gỗ Ấm",
      title: "Một căn phòng ấm để ngủ thật sâu",
      subtitle:
        "Tone gỗ, ánh sáng tự nhiên và cảm giác riêng tư giúp khách chuyển từ xem ảnh sang đặt phòng nhanh hơn.",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <HeroSlider banners={banners} />

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
