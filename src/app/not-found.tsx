'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-medical-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="text-9xl font-bold text-primary-600 mb-4"
        >
          404
        </motion.h1>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          {t('error.notFound.title') || 'Trang không tìm thấy'}
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          {t('error.notFound.description') ||
            'Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.'}
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-primary-700 transition-colors"
            >
              <Home className="w-5 h-5" />
              {t('error.notFound.home') || 'Về Trang Chủ'}
            </motion.button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold flex items-center gap-2 border-2 border-primary-600 hover:bg-primary-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t('error.notFound.back') || 'Quay Lại'}
          </button>
        </div>
      </motion.div>
    </div>
  )
}

