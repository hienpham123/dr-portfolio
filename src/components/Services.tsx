'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Stethoscope,
  Heart,
  Brain,
  Eye,
  Baby,
  Activity,
  Microscope,
  Pill,
  Megaphone,
  PenTool,
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Services() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: Stethoscope,
      title: t('services.items.general.title'),
      description: t('services.items.general.description'),
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Heart,
      title: t('services.items.cardiology.title'),
      description: t('services.items.cardiology.description'),
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Brain,
      title: t('services.items.neurology.title'),
      description: t('services.items.neurology.description'),
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Eye,
      title: t('services.items.ophthalmology.title'),
      description: t('services.items.ophthalmology.description'),
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Baby,
      title: t('services.items.pediatrics.title'),
      description: t('services.items.pediatrics.description'),
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Activity,
      title: t('services.items.endocrinology.title'),
      description: t('services.items.endocrinology.description'),
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Microscope,
      title: t('services.items.lab.title'),
      description: t('services.items.lab.description'),
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Pill,
      title: t('services.items.pharmacy.title'),
      description: t('services.items.pharmacy.description'),
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Megaphone,
      title: t('services.items.contentMarketing.title'),
      description: t('services.items.contentMarketing.description'),
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: PenTool,
      title: t('services.items.medicalWriting.title'),
      description: t('services.items.medicalWriting.description'),
      color: 'from-teal-500 to-teal-600',
    },
  ]

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

