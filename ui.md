# 🏡 BAN CÔNG HOMESTAY – FULL LANDING PAGE PLAN (NEXTJS)

---

## 1. 🎯 MỤC TIÊU DỰ ÁN

* Xây dựng landing page homestay (4 phòng)
* Tối ưu SEO (Google search)
* Tăng conversion (call / inbox / booking)
* Dễ mở rộng (data JSON, không cần backend ban đầu)

---

## 2. 🧱 TECH STACK

* Framework: NextJS 14 (App Router)
* Styling: TailwindCSS
* Image: next/image
* Data: JSON local
* SEO:

  * Metadata API
  * Schema.org (LodgingBusiness)
* Form: Server Actions

---

## 3. 📂 FOLDER STRUCTURE

```
/app
  /page.tsx                // Home
  /rooms/[slug]/page.tsx   // Detail Room
  /about/page.tsx
  /feedback/page.tsx

/components
  Navbar.tsx
  Footer.tsx
  RoomCard.tsx
  BookingCTA.tsx

/data
  rooms.json
  site.json

/public/images
  room1.jpg
  room2.jpg
  room3.jpg
  default.jpg
```

---

## 4. 📊 DATA STRUCTURE

### 📁 `/data/rooms.json`

```json
[
  {
    "id": "room-1",
    "name": "Phòng Gỗ Ấm",
    "slug": "phong-go-am",
    "price": 450000,
    "thumbnail": "/images/room1.jpg",
    "images": ["/images/room1.jpg"],
    "description": "Không gian ấm áp với tone gỗ, phù hợp nghỉ ngơi thư giãn",
    "features": ["1 giường lớn", "wifi", "ánh sáng tự nhiên"]
  },
  {
    "id": "room-2",
    "name": "Phòng Nắng Ban Công",
    "slug": "phong-nang-ban-cong",
    "price": 550000,
    "thumbnail": "/images/room2.jpg",
    "images": ["/images/room2.jpg"],
    "description": "View phố cổ, ban công đón nắng cực chill",
    "features": ["ban công", "view phố", "cửa sổ lớn"]
  },
  {
    "id": "room-3",
    "name": "Phòng Chill Tối Giản",
    "slug": "phong-toi-gian",
    "price": 400000,
    "thumbnail": "/images/room3.jpg",
    "images": ["/images/room3.jpg"],
    "description": "Phong cách tối giản, yên tĩnh, riêng tư",
    "features": ["yên tĩnh", "tone trung tính"]
  },
  {
    "id": "default",
    "name": "Phòng Tiêu Chuẩn",
    "slug": "phong-tieu-chuan",
    "price": 300000,
    "thumbnail": "/images/default.jpg",
    "images": [],
    "description": "Phòng cơ bản với đầy đủ tiện nghi",
    "features": []
  }
]
```

---

## 5. 🏠 PAGE: HOME (`/`)

### 🎯 Mục tiêu:

* Gây ấn tượng
* Hiển thị phòng
* Dẫn người dùng sang detail / booking

---

### 🧩 UI STRUCTURE

```
[Navbar]

[Hero Section]
- Background: ảnh phòng đẹp
- Title:
  "Có một nơi để bạn tạm dừng thế giới ngoài kia"
- Subtitle:
  "Chậm lại – nghỉ ngơi – tận hưởng"
- Button:
  → Xem phòng

[Room List]
- Grid 2-3 cột
- RoomCard:
  - Image
  - Name
  - Price
  - CTA: Xem chi tiết

[Highlight Section]
- 3 điểm mạnh:
  - Không gian chill
  - View đẹp
  - Giá hợp lý

[CTA Section]
- "Đặt phòng ngay hôm nay"
- Button:
  - Call
  - Zalo
  - Messenger

[Footer]
```

---

## 6. 🛏 PAGE: DETAIL (`/rooms/[slug]`)

### 🎯 Mục tiêu:

* Thuyết phục khách đặt phòng

---

### 🧩 UI STRUCTURE

```
[Gallery]
- Slider ảnh phòng

[Room Info]
- Tên phòng
- Giá
- Mô tả
- Tiện ích

[CTA]
- Đặt phòng ngay
- Gọi / chat

[Similar Rooms]
- 2-3 phòng khác
```

---

### 🧠 SEO

```ts
export async function generateMetadata({ params }) {
  return {
    title: `${room.name} | Ban Công Homestay`,
    description: room.description
  }
}
```

---

## 7. 👤 PAGE: ABOUT (`/about`)

```
- Giới thiệu:
  "Một không gian nhỏ dành cho những người muốn sống chậm"

- Story:
  - Vì sao mở homestay
  - Concept ban công

- Contact:
  - Phone
  - Facebook
  - Instagram
  - Google Map
```

---

## 8. 💬 PAGE: FEEDBACK (`/feedback`)

### 🧩 UI

```
Form:
- Name
- Phone
- Message

Submit:
- lưu JSON hoặc gửi email

Review list:
- Hiển thị feedback khách
```

---

## 9. 🧱 COMPONENT

### RoomCard.tsx

```tsx
import Link from "next/link";
import Image from "next/image";

export default function RoomCard({ room }) {
  return (
    <Link href={`/rooms/${room.slug}`}>
      <div className="rounded-xl overflow-hidden shadow hover:scale-105 transition">
        <Image src={room.thumbnail} width={400} height={300} alt={room.name}/>
        <div className="p-4">
          <h3 className="font-semibold">{room.name}</h3>
          <p>{room.price.toLocaleString()} VND</p>
        </div>
      </div>
    </Link>
  );
}
```

---

## 10. 📈 SEO SETUP

### schema.org

```json
{
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Ban Công Homestay",
  "address": "Hà Nội",
  "telephone": "0123456789"
}
```

---

## 11. 🎨 DESIGN SYSTEM

### 🎨 Màu chủ đạo

* Xanh cây: #4CAF50
* Nâu gỗ: #6D4C41
* Be: #F5F5DC

---

### 🪑 Style

* Modern + Cozy + Chill
* Nhiều ánh sáng tự nhiên
* Vibe ban công / nghỉ dưỡng

---

## 12. 🔥 STRATEGY (RẤT QUAN TRỌNG)

### ❌ Sai lầm thường gặp:

* Chỉ “giới thiệu phòng”
* Không có CTA
* Không có cảm xúc

---

### ✅ Nên làm:

#### 1. Hook mạnh

> "Có một nơi để bạn tạm dừng thế giới ngoài kia"

---

#### 2. Đặt tên phòng có cảm xúc

* Phòng Nắng Ban Công
* Phòng Gỗ Ấm
* Phòng Chill Tối Giản

---

#### 3. CTA rõ ràng

* Gọi ngay
* Nhắn Zalo
* Đặt phòng

---

#### 4. Kết hợp TikTok

* TikTok → kéo traffic
* Landing page → convert

---

## 13. 🚀 ROADMAP PHÁT TRIỂN

* [ ] Thêm booking online
* [ ] Thanh toán (Momo / Stripe)
* [ ] Admin dashboard
* [ ] Upload ảnh phòng
* [ ] Rating system

---

# ✅ KẾT LUẬN

Landing page này:

* Dễ build (NextJS + JSON)
* Chuẩn SEO
* Có khả năng convert cao
* Có thể scale thành business lớn

---
