'use client'

import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Language } from '@/lib/translations'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi')
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all text-gray-700 hover:text-primary-600 font-medium"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Switch language"
    >
      <Globe className="w-5 h-5" />
      <span className="text-sm font-semibold">
        {language === 'vi' ? 'EN' : 'VI'}
      </span>
    </motion.button>
  )
}

