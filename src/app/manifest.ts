import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bác Sĩ Quách Thùy Linh - Portfolio Y Tế',
    short_name: 'BS. Quách Thùy Linh',
    description: 'Portfolio chuyên nghiệp của Bác Sĩ Quách Thùy Linh',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0ea5e9',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}

