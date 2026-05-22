import Image from "next/image";
import Link from "next/link";

type Room = {
  name: string;
  slug: string;
  price: number;
  thumbnail: string;
  description: string;
};

export default function RoomCard({ room }: { room: Room }) {
  return (
    <Link href={`/rooms/${room.slug}`} className="group block">
      <article className="soft-card overflow-hidden transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={room.thumbnail}
            width={720}
            height={540}
            alt={room.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-black text-wood">
            {room.price.toLocaleString("vi-VN")} VND
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-serif text-3xl">{room.name}</h3>
          <p className="mt-3 line-clamp-2 text-ink/65">{room.description}</p>
          <span className="mt-5 inline-flex rounded-full bg-leaf px-5 py-3 text-sm font-black text-white">
            Xem chi tiết
          </span>
        </div>
      </article>
    </Link>
  );
}
