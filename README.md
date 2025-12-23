# Dr. Profile - Portfolio Website

Portfolio website chuyên nghiệp cho bác sĩ được xây dựng với Next.js 14, Three.js, và Framer Motion.

## Tính Năng

- ✨ **Modern UI/UX**: Giao diện hiện đại, chuyên nghiệp với theme bác sĩ
- 🎨 **Three.js Animations**: Animation 3D với React Three Fiber
- 📱 **Responsive Design**: Tối ưu cho mọi thiết bị
- ⚡ **Performance**: Tối ưu code và performance với Next.js 14
- 🎯 **Component-based**: Cấu trúc component rõ ràng, dễ maintain

## Công Nghệ

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animation library
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Cài Đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Chạy production server
npm start
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## Cấu Trúc Dự Án

```
dr-profile/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ThreeJS/
│       └── MedicalScene.tsx
├── public/
└── package.json
```

## Tùy Chỉnh

Bạn có thể tùy chỉnh:
- Thông tin cá nhân trong các component
- Màu sắc trong `tailwind.config.js`
- Three.js animations trong `components/ThreeJS/MedicalScene.tsx`
- Nội dung và dịch vụ trong các section

## License

MIT

