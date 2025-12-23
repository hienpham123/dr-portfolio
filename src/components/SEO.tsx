'use client'

import Script from 'next/script'

interface SEOProps {
  doctorName?: string
  doctorTitle?: string
  doctorDescription?: string
}

export default function SEO({
  doctorName = 'Bác Sĩ Quách Thùy Linh',
  doctorTitle = 'Bác Sĩ Chuyên Khoa',
  doctorDescription = 'Chuyên khoa y tế với hơn 15 năm kinh nghiệm',
}: SEOProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thuylinh-portfolio.netlify.app/'

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: doctorName,
    jobTitle: doctorTitle,
    description: doctorDescription,
    url: siteUrl,
    image: `${siteUrl}/og-image.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'VN',
      addressLocality: 'Hà Nội',
    },
    sameAs: [
      // Thêm các social media links nếu có
      // 'https://www.facebook.com/...',
      // 'https://www.linkedin.com/in/...',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Vietnam',
    },
    medicalSpecialty: [
      'General Medicine',
      'Cardiology',
      'Neurology',
      'Pediatrics',
      'Endocrinology',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Medical Degree',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Đại Học Y Hà Nội',
        },
      },
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Đại Học Y Hà Nội',
    },
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Bệnh Viện Đa Khoa Trung Ương',
      },
      {
        '@type': 'Organization',
        name: 'Hệ thống y tế Mescells',
      },
    ],
  }

  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: `${doctorName} - ${doctorTitle}`,
    description: doctorDescription,
    url: siteUrl,
    image: `${siteUrl}/og-image.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'VN',
      addressLocality: 'Hà Nội',
    },
    telephone: '+84 123 456 789',
    priceRange: '$$',
    medicalSpecialty: [
      'General Medicine',
      'Cardiology',
      'Neurology',
      'Pediatrics',
    ],
  }

  return (
    <>
      <Script
        id="physician-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
    </>
  )
}

