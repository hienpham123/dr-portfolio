'use client'

import { motion } from 'framer-motion'
import { Award, GraduationCap, Heart, Users } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const achievements = [
    {
      icon: Award,
      title: t('about.achievements.certification.title'),
      description: t('about.achievements.certification.description'),
    },
    {
      icon: GraduationCap,
      title: t('about.achievements.education.title'),
      description: t('about.achievements.education.description'),
    },
    {
      icon: Heart,
      title: t('about.achievements.care.title'),
      description: t('about.achievements.care.description'),
    },
    {
      icon: Users,
      title: t('about.achievements.team.title'),
      description: t('about.achievements.team.description'),
    },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-primary-100 to-medical-100 rounded-2xl p-8 h-full">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {t('about.name')}
              </h3>
              <p className="text-lg text-primary-600 font-semibold mb-6">
                {t('about.role')}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('about.description1')}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('about.description2')}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('about.description3')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('about.description4')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : {}
                  }
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {achievement.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Education & Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t('about.education.title')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {t('about.education.items').map((item: any, index: number) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-primary-600 font-bold text-lg mb-2">
                  {item.year}
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  {item.title}
                </div>
                <div className="text-sm text-gray-600">{item.institution}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

