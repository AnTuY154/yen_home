import site from "@/data/site.json";

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink px-5 py-12 text-white md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h2 className="font-serif text-4xl">{site.name}</h2>
          <p className="mt-3 max-w-md text-white/65">{site.tagline}. Một không gian nhỏ dành cho những người muốn sống chậm.</p>
        </div>
        <div>
          <p className="font-black">Liên hệ</p>
          <p className="mt-3 text-white/65">Điện thoại: {site.phone}</p>
          <p className="text-white/65">Địa chỉ: {site.address}</p>
        </div>
        <div className="flex flex-wrap items-start gap-3 md:justify-end">
          <a className="rounded-full border border-white/20 px-5 py-3 font-bold" href={site.zalo}>Zalo</a>
          <a className="rounded-full border border-white/20 px-5 py-3 font-bold" href={site.messenger}>Messenger</a>
        </div>
      </div>
    </footer>
  );
}
