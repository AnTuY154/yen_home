import type { Metadata } from "next";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "Câu chuyện",
  description: "Giới thiệu Yên HomeStay, concept ban công và thông tin liên hệ.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <section className="section-pad">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="kicker">Về chúng tôi</span>
              <h1 className="mt-4 font-serif text-6xl leading-none md:text-7xl">
                Một không gian nhỏ dành cho những người muốn sống chậm
              </h1>
            </div>
            <div className="space-y-6 text-lg leading-9 text-ink/65">
              <p>
                Yên HomeStay được tạo ra từ mong muốn có một nơi đủ gần thành phố để tiện di chuyển, nhưng đủ
                yên để khách có thể tạm gác công việc, mở cửa sổ và hít một hơi thật sâu.
              </p>
              <p>
                Concept ban công là trung tâm của trải nghiệm: ánh sáng tự nhiên, cây xanh, góc trà và những căn
                phòng có tên gọi dễ nhớ.
              </p>
              <div className="soft-card p-6">
                <p className="font-black text-ink">Liên hệ</p>
                <p>Điện thoại: {site.phone}</p>
                <p>Facebook: {site.facebook}</p>
                <p>Instagram: {site.instagram}</p>
                <p>Google Map: {site.map}</p>
              </div>
            </div>
          </div>
        </section>
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
