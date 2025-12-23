# Dr. Profile - Portfolio Website

Portfolio website chuyên nghiệp cho **Bác Sĩ Quách Thùy Linh** được xây dựng với Next.js 14, Three.js, và Framer Motion.

🌐 **Live Demo**: [https://thuylinh-portfolio.netlify.app/](https://thuylinh-portfolio.netlify.app/)

## ✨ Tính Năng

- 🎨 **Modern UI/UX**: Giao diện hiện đại, chuyên nghiệp với theme bác sĩ
- 🎬 **Three.js Animations**: Animation 3D với React Three Fiber và Drei
- 📱 **Responsive Design**: Tối ưu hoàn hảo cho mọi thiết bị (mobile, tablet, desktop)
- ⚡ **Performance**: Tối ưu code và performance với Next.js 14 App Router
- 🎯 **Component-based**: Cấu trúc component rõ ràng, dễ maintain và mở rộng
- 🌐 **Multilingual**: Hỗ trợ đa ngôn ngữ (Tiếng Việt/English) với i18n system
- 🔍 **SEO Optimized**: Tối ưu SEO đầy đủ với metadata, Open Graph, structured data
- 💬 **Chat Widget**: Widget chat tích hợp sẵn với form liên hệ
- 📊 **Animated Numbers**: Hiệu ứng đếm số từ 0 đến giá trị đích
- ⬆️ **Scroll to Top**: Nút scroll lên đầu trang khi scroll xuống
- 🎭 **Smooth Animations**: Framer Motion cho animations mượt mà

## 🛠 Công Nghệ

- **Next.js 14** - React framework với App Router
- **TypeScript** - Type safety và code quality
- **Three.js** - 3D graphics và animations
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **Framer Motion** - Animation library cho smooth transitions
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## 📦 Cài Đặt

```bash
# Clone repository
git clone https://github.com/hienpham123/dr-portfolio.git
cd dr-profile

# Cài đặt dependencies
npm install

# Chạy development server (port 1998)
npm run dev

# Build cho production
npm run build

# Chạy production server
npm start
```

Mở [http://localhost:1998](http://localhost:1998) để xem kết quả.

## 📁 Cấu Trúc Dự Án

```text
dr-profile/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout với metadata SEO
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles
│   │   ├── icon.svg           # Favicon
│   │   ├── manifest.ts        # PWA manifest
│   │   ├── robots.ts          # Robots.txt config
│   │   └── sitemap.ts         # Sitemap generator
│   ├── components/            # React components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Hero.tsx           # Hero section với Three.js
│   │   ├── About.tsx          # About section
│   │   ├── Services.tsx       # Services section
│   │   ├── Marketing.tsx      # Marketing section
│   │   ├── Experience.tsx     # Experience timeline
│   │   ├── Contact.tsx        # Contact form
│   │   ├── Footer.tsx         # Footer
│   │   ├── ChatWidget.tsx     # Chat widget
│   │   ├── ScrollToTop.tsx    # Scroll to top button
│   │   ├── LanguageSwitcher.tsx # Language switcher
│   │   ├── AnimatedNumber.tsx # Animated number component
│   │   ├── SEO.tsx            # SEO structured data
│   │   └── ThreeJS/
│   │       └── MedicalScene.tsx # Three.js 3D scene
│   ├── contexts/              # React contexts
│   │   └── LanguageContext.tsx # i18n context
│   └── lib/                   # Utilities
│       └── translations.ts    # Translation files (VI/EN)
├── public/                    # Static files
│   └── robots.txt             # Robots.txt
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🌐 Đa Ngôn Ngữ

Website hỗ trợ 2 ngôn ngữ:

- 🇻🇳 **Tiếng Việt** (mặc định)
- 🇬🇧 **English**

Ngôn ngữ được lưu trong localStorage và tự động load khi vào lại website.

### Thêm ngôn ngữ mới

1. Mở `src/lib/translations.ts`
2. Thêm object mới với key là mã ngôn ngữ (ví dụ: `fr` cho French)
3. Copy structure từ `vi` hoặc `en` và dịch nội dung

## 🔍 SEO Configuration

Website đã được tối ưu SEO đầy đủ với:

- ✅ **Metadata**: Title, description, keywords đầy đủ
- ✅ **Open Graph**: Tags cho Facebook, LinkedIn sharing
- ✅ **Twitter Cards**: Tags cho Twitter sharing
- ✅ **Structured Data**: JSON-LD schema (Physician, MedicalBusiness) cho Google
- ✅ **Sitemap**: Tự động generate sitemap.xml tại `/sitemap.xml`
- ✅ **Robots.txt**: Cấu hình robots.txt tại `/robots.txt`
- ✅ **Canonical URLs**: Tránh duplicate content
- ✅ **Language Alternates**: Hỗ trợ đa ngôn ngữ cho SEO
- ✅ **Web App Manifest**: PWA support

### Cấu hình Site URL

Tạo file `.env.local` và thêm:

```env
NEXT_PUBLIC_SITE_URL=https://thuylinh-portfolio.netlify.app
```

### Google Search Console

Để verify website với Google Search Console, thêm vào `src/app/layout.tsx`:

```typescript
verification: {
  google: 'your-google-verification-code',
}
```

## 🎨 Tùy Chỉnh

### Thông tin cá nhân

- **Tên bác sĩ**: Cập nhật trong `src/lib/translations.ts`
- **Dịch vụ**: Cập nhật trong `src/components/Services.tsx`
- **Kinh nghiệm**: Cập nhật trong `src/lib/translations.ts` → `experience.items`
- **Liên hệ**: Cập nhật trong `src/lib/translations.ts` → `contact`

### Màu sắc

Chỉnh sửa trong `tailwind.config.js`:

- `primary`: Màu chính (blue)
- `medical`: Màu phụ (green)

### Three.js Animations

Tùy chỉnh trong `src/components/ThreeJS/MedicalScene.tsx`:

- Thay đổi colors, particles, animations
- Thêm 3D models nếu cần

### SEO Metadata

- **Metadata chính**: `src/app/layout.tsx`
- **Structured Data**: `src/components/SEO.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push code lên GitHub
2. Import project vào Vercel
3. Vercel sẽ tự động detect Next.js và deploy

### Netlify

1. Push code lên GitHub
2. Import project vào Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### Environment Variables

Thêm vào deployment platform:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📝 Scripts

```bash
# Development
npm run dev          # Chạy dev server ở port 1998

# Production
npm run build        # Build production
npm start            # Chạy production server

# Linting
npm run lint         # Check code quality
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this project for your portfolio!

## 👤 Author

### Bác Sĩ Quách Thùy Linh

- Portfolio: [https://thuylinh-portfolio.netlify.app/](https://thuylinh-portfolio.netlify.app/)
- GitHub: [@hienpham123](https://github.com/hienpham123)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Three.js community for 3D graphics
- Framer Motion for smooth animations
- All contributors and open source libraries

---

⭐ Nếu bạn thấy project này hữu ích, hãy star repository này!
