'use client'

import { motion } from 'framer-motion'
import { Stethoscope, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    quickLinks: [
      { name: t('nav.home'), href: '#home' },
      { name: t('nav.about'), href: '#about' },
      { name: t('nav.services'), href: '#services' },
      { name: t('nav.marketing'), href: '#marketing' },
      { name: t('nav.experience'), href: '#experience' },
      { name: t('nav.blog'), href: '#blog' },
      { name: t('nav.testimonials') || 'Đánh Giá', href: '#testimonials' },
      { name: t('nav.faq') || 'FAQ', href: '#faq' },
    ],
    services: [
      { name: t('services.items.general.title'), href: '#services' },
      { name: t('services.items.cardiology.title'), href: '#services' },
      { name: t('services.items.neurology.title'), href: '#services' },
      { name: t('services.items.pediatrics.title'), href: '#services' },
    ],
    contact: [
      { name: t('contact.quickBooking.button'), href: '#contact' },
      { name: t('nav.contact'), href: '#contact' },
    ],
  }

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
              {t('footer.description')}
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
            <h3 className="text-white font-bold mb-4">{t('footer.quickLinks')}</h3>
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
            <h3 className="text-white font-bold mb-4">{t('footer.services')}</h3>
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
            <h3 className="text-white font-bold mb-4">{t('footer.contact')}</h3>
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
            © {currentYear} {t('about.name')}. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}

