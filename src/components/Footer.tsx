'use client'

import { motion } from 'framer-motion'
import { Stethoscope, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

const footerLinks = {
  quickLinks: [
    { name: 'Trang Chủ', href: '#home' },
    { name: 'Giới Thiệu', href: '#about' },
    { name: 'Dịch Vụ', href: '#services' },
    { name: 'Marketing', href: '#marketing' },
    { name: 'Kinh Nghiệm', href: '#experience' },
  ],
  services: [
    { name: 'Khám Tổng Quát', href: '#services' },
    { name: 'Tim Mạch', href: '#services' },
    { name: 'Thần Kinh', href: '#services' },
    { name: 'Nhi Khoa', href: '#services' },
  ],
  contact: [
    { name: 'Đặt Lịch Hẹn', href: '#contact' },
    { name: 'Tư Vấn', href: '#contact' },
    { name: 'Liên Hệ', href: '#contact' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Stethoscope className="w-8 h-8 text-primary-400" />
              <span className="text-xl font-bold text-white">BS. Quách Thùy Linh</span>
            </div>
            <p className="text-sm mb-4 leading-relaxed">
              Chăm sóc sức khỏe của bạn với sự tận tâm và chuyên nghiệp. Bác sĩ
              Quách Thùy Linh cam kết mang đến dịch vụ y tế chất lượng cao nhất.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-bold mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-bold mb-4">Dịch Vụ</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-bold mb-4">Liên Hệ</h3>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-2 text-sm">
              <p>Email: info@drprofile.com</p>
              <p>Phone: +84 123 456 789</p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            © {currentYear} Bác Sĩ Quách Thùy Linh. Tất cả quyền được bảo lưu. | Được tạo
            với ❤️ để chăm sóc sức khỏe cộng đồng
          </p>
        </div>
      </div>
    </footer>
  )
}

