'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Award } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Experience() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = t('experience.items') as any[]

  return (
    <section
      id="experience"
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
            {t('experience.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:pr-8' : 'md:ml-1/2 md:pl-8'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform -translate-x-1/2 -translate-y-1 z-10 border-4 border-white"></div>

                <div className="ml-16 md:ml-0 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-2 text-primary-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-semibold">{exp.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.position}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">{exp.hospital}</span>
                    <span className="text-gray-400">•</span>
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 mb-2">
                          {t('experience.achievements')}
                        </div>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement: string, i: number) => (
                            <li
                              key={i}
                              className="text-sm text-gray-600 flex items-start gap-2"
                            >
                              <span className="text-primary-600 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

