'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Calendar, Clock, MapPin } from 'lucide-react'
import MedicalScene from './ThreeJS/MedicalScene'
import AnimatedNumber from './AnimatedNumber'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-medical-50"
    >
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <MedicalScene />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 sm:px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-[12px] sm:text-sm font-semibold mb-4"
            >
              {t('hero.badge')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 sm:mb-6 leading-tight"
            >
              {t('hero.title')}
              <br />
              <span className="text-primary-600">{t('hero.titleHighlight')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base text-gray-600 mb-7 sm:mb-8 leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start mb-7 sm:mb-8"
            >
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg shadow-sm">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                <span className="text-[12px] sm:text-sm font-medium text-gray-700">
                  {t('hero.appointment')}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg shadow-sm">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                <span className="text-[12px] sm:text-sm font-medium text-gray-700">
                  {t('hero.support')}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg shadow-sm">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                <span className="text-[12px] sm:text-sm font-medium text-gray-700">
                  {t('hero.locations')}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-3 sm:gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="#contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 text-white rounded-lg font-semibold shadow-lg hover:bg-primary-700 transition-colors text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.bookAppointment')}
              </motion.a>
              <motion.a
                href="#about"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-600 rounded-lg font-semibold shadow-lg hover:bg-gray-50 transition-colors border-2 border-primary-600 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.learnMore')}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            {[
              { number: '15+', label: t('hero.yearsExperience') },
              { number: '5000+', label: t('hero.patients') },
              { number: '98%', label: t('hero.satisfaction') },
              { number: '24/7', label: t('hero.support24') },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 mb-1.5 sm:mb-2">
                  <AnimatedNumber value={stat.number} duration={2000} />
                </div>
                <div className="text-[12px] sm:text-xs md:text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="w-8 h-8 text-primary-600" />
      </motion.button>
    </section>
  )
}

