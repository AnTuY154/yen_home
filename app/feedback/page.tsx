import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Feedback",
  description: "Gửi feedback và xem cảm nhận khách hàng về Yên HomeStay.",
};

async function sendFeedback() {
  "use server";
}

const reviews = [
  ["Minh Anh", "Phòng Nắng Ban Công", "Ban công rất xinh, sáng dậy có nắng nhẹ. Mình nhắn Zalo đặt phòng rất nhanh."],
  ["Hoàng Nam", "Phòng Gỗ Ấm", "Phòng sạch, thơm mùi gỗ, đúng vibe nghỉ cuối tuần."],
  ["Linh Chi", "Phòng Chill Tối Giản", "Tối giản nhưng không lạnh. Góc đọc sách rất thích."],
];

export default function FeedbackPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <section className="section-pad">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="kicker">Feedback</span>
              <h1 className="mt-4 font-serif text-6xl leading-none md:text-7xl">Khách đã ở nói gì?</h1>
              <p className="mt-5 text-lg leading-8 text-ink/65">
                Form này dùng Server Actions làm nền. Giai đoạn đầu bạn có thể nối với email, Google Form hoặc lưu file
                nội bộ khi cần.
              </p>
            </div>
            <form action={sendFeedback} className="soft-card grid gap-5 p-6 md:grid-cols-2">
              <label className="grid gap-2 font-bold">
                Tên
                <input className="rounded-2xl border border-wood/10 bg-cream/60 px-4 py-3 outline-none focus:border-leaf" name="name" required />
              </label>
              <label className="grid gap-2 font-bold">
                Số điện thoại
                <input className="rounded-2xl border border-wood/10 bg-cream/60 px-4 py-3 outline-none focus:border-leaf" name="phone" required />
              </label>
              <label className="grid gap-2 font-bold md:col-span-2">
                Nội dung
                <textarea className="min-h-36 rounded-2xl border border-wood/10 bg-cream/60 px-4 py-3 outline-none focus:border-leaf" name="message" required />
              </label>
              <button className="rounded-full bg-leaf px-7 py-4 font-black text-white md:col-span-2" type="submit">
                Gửi feedback
              </button>
            </form>
          </div>
        </section>

        <section className="section-pad bg-cream">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            {reviews.map(([name, room, quote]) => (
              <article key={name} className="soft-card p-7">
                <p className="text-[#d89a36]">★★★★★</p>
                <p className="mt-4 leading-7 text-ink/70">{quote}</p>
                <p className="mt-5 font-black">{name}</p>
                <p className="text-sm text-ink/50">{room}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
