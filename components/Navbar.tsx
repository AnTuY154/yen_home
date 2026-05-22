import Link from "next/link";
import site from "@/data/site.json";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
      <div className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 shadow-lg shadow-wood/10">
        <Link href="/" className="flex items-center gap-3 font-black">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-wood text-white">B</span>
          <span className="hidden sm:block">{site.name}</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-bold text-ink/70 md:flex">
          <Link href="/#rooms">Phòng</Link>
          <Link href="/about">Câu chuyện</Link>
          <Link href="/feedback">Feedback</Link>
          <Link href="/#contact">Liên hệ</Link>
        </nav>
        <a
          href={`tel:${site.phone}`}
          className="rounded-full bg-leaf px-5 py-3 text-sm font-black text-white shadow-lg shadow-leaf/25 transition hover:-translate-y-0.5 hover:bg-wood"
        >
          Gọi ngay
        </a>
      </div>
    </header>
  );
}
