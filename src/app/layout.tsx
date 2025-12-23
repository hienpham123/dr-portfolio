import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thuylinh-portfolio.netlify.app/'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Bác Sĩ Quách Thùy Linh - Bác Sĩ Chuyên Khoa | Portfolio Y Tế',
    template: '%s | Bác Sĩ Quách Thùy Linh',
  },
  description:
    'Bác Sĩ Quách Thùy Linh - Chuyên khoa y tế với hơn 15 năm kinh nghiệm. Chuyên về điều trị lâm sàng, content marketing y tế và chiến lược marketing cho hệ thống y tế Mescells. Đặt lịch hẹn ngay!',
  keywords: [
    'bác sĩ quách thùy linh',
    'bác sĩ chuyên khoa',
    'y tế',
    'phòng khám',
    'điều trị',
    'sức khỏe',
    'content marketing y tế',
    'marketing y tế',
    'mescells',
    'y học tái tạo',
    'tế bào gốc',
    'doctor',
    'medical',
    'healthcare',
    'medical marketing',
  ],
  authors: [{ name: 'Bác Sĩ Quách Thùy Linh' }],
  creator: 'Bác Sĩ Quách Thùy Linh',
  publisher: 'Bác Sĩ Quách Thùy Linh',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    alternateLocale: ['en_US'],
    url: siteUrl,
    siteName: 'Bác Sĩ Quách Thùy Linh',
    title: 'Bác Sĩ Quách Thùy Linh - Bác Sĩ Chuyên Khoa',
    description:
      'Bác Sĩ Quách Thùy Linh - Chuyên khoa y tế với hơn 15 năm kinh nghiệm. Chuyên về điều trị lâm sàng, content marketing y tế và chiến lược marketing cho hệ thống y tế Mescells.',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Bác Sĩ Quách Thùy Linh',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bác Sĩ Quách Thùy Linh - Bác Sĩ Chuyên Khoa',
    description:
      'Bác Sĩ Quách Thùy Linh - Chuyên khoa y tế với hơn 15 năm kinh nghiệm. Chuyên về điều trị lâm sàng và content marketing y tế.',
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Thêm Google Search Console verification code nếu có
    // google: 'your-google-verification-code',
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'vi-VN': siteUrl,
      'en-US': `${siteUrl}/en`,
    },
  },
  category: 'healthcare',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}

