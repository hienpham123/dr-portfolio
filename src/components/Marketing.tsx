'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Megaphone,
  PenTool,
  TrendingUp,
  Target,
  FileText,
  Video,
  BarChart3,
  Users,
  ExternalLink,
} from 'lucide-react'
import AnimatedNumber from './AnimatedNumber'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Marketing() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const marketingServices = [
    {
      icon: PenTool,
      title: t('marketing.services.contentMarketing.title'),
      description: t('marketing.services.contentMarketing.description'),
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Megaphone,
      title: t('marketing.services.digitalMarketing.title'),
      description: t('marketing.services.digitalMarketing.description'),
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Video,
      title: t('marketing.services.videoContent.title'),
      description: t('marketing.services.videoContent.description'),
      color: 'from-red-500 to-red-600',
    },
    {
      icon: FileText,
      title: t('marketing.services.medicalWriting.title'),
      description: t('marketing.services.medicalWriting.description'),
      color: 'from-green-500 to-green-600',
    },
    {
      icon: BarChart3,
      title: t('marketing.services.analytics.title'),
      description: t('marketing.services.analytics.description'),
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Target,
      title: t('marketing.services.brandStrategy.title'),
      description: t('marketing.services.brandStrategy.description'),
      color: 'from-indigo-500 to-indigo-600',
    },
  ]

  const marketingProjects = [
    {
      title: t('marketing.projects.mescells.title'),
      organization: t('marketing.projects.mescells.organization'),
      period: t('marketing.projects.mescells.period'),
      description: t('marketing.projects.mescells.description'),
      achievements: t('marketing.projects.mescells.achievements'),
      link: 'https://mescells.com/',
    },
    {
      title: t('marketing.projects.campaign.title'),
      organization: t('marketing.projects.campaign.organization'),
      period: t('marketing.projects.campaign.period'),
      description: t('marketing.projects.campaign.description'),
      achievements: t('marketing.projects.campaign.achievements'),
      link: 'https://mescells.com/',
    },
  ]

  return (
    <section
      id="marketing"
      ref={ref}
      className="py-20 bg-gradient-to-br from-primary-50 via-white to-medical-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('marketing.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('marketing.subtitle')}
          </p>
        </motion.div>

        {/* Marketing Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t('marketing.servicesTitle')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Marketing Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t('marketing.projectsTitle')}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {marketingProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-primary-600 font-semibold mb-1">
                      {project.organization}
                    </p>
                    <p className="text-sm text-gray-500">{project.period}</p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-primary-600" />
                    <span className="font-semibold text-gray-900">
                      {t('experience.achievements')}
                    </span>
                  </div>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement: string, i: number) => (
                      <li
                        key={i}
                        className="text-sm text-gray-600 flex items-start gap-2"
                      >
                        <span className="text-primary-600 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '200+', label: t('marketing.stats.articles') },
              { number: '300%', label: t('marketing.stats.traffic') },
              { number: '50+', label: t('marketing.stats.events') },
              { number: '10K+', label: t('marketing.stats.community') },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  <AnimatedNumber value={stat.number} duration={2000} />
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

