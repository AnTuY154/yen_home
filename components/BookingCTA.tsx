import site from "@/data/site.json";

export default function BookingCTA({ title = "Đặt phòng ngay hôm nay" }: { title?: string }) {
  return (
    <section className="section-pad">
      <div className="noise mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-wood p-8 text-white shadow-soft md:p-12">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-cream/80">CTA rõ ràng</span>
            <h2 className="mt-3 font-serif text-4xl md:text-6xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-white/75">
              Khách có thể gọi, nhắn Zalo hoặc Messenger. Không cần backend, không cần cổng thanh toán ở giai đoạn đầu.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="rounded-full bg-white px-6 py-4 font-black text-wood transition hover:-translate-y-1" href={`tel:${site.phone}`}>Gọi ngay</a>
            <a className="rounded-full bg-leaf px-6 py-4 font-black text-white transition hover:-translate-y-1" href={site.zalo}>Nhắn Zalo</a>
            <a className="rounded-full border border-white/30 px-6 py-4 font-black text-white transition hover:-translate-y-1" href={site.messenger}>Messenger</a>
          </div>
        </div>
      </div>
    </section>
  );
}
