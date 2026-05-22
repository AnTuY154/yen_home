import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ban-cong-homestay.vercel.app"),
  title: {
    default: "Yên HomeStay | Có một nơi để bạn tạm dừng",
    template: "%s | Yên HomeStay",
  },
  description:
    "Yên HomeStay có 4 phòng nghỉ chill, nhiều ánh sáng tự nhiên, CTA đặt phòng rõ ràng và dữ liệu local dễ mở rộng.",
  openGraph: {
    title: "Yên HomeStay",
    description: "Chậm lại, nghỉ ngơi và tận hưởng trong một homestay ban công ấm áp.",
    images: ["/images/default.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
