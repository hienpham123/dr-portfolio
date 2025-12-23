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

const marketingServices = [
  {
    icon: PenTool,
    title: 'Content Marketing',
    description:
      'Sáng tạo nội dung y tế chuyên sâu, dễ hiểu cho bệnh nhân và cộng đồng',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description:
      'Xây dựng chiến lược marketing số cho bệnh viện và phòng khám',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Video,
    title: 'Video Content',
    description:
      'Sản xuất video tư vấn sức khỏe, giới thiệu dịch vụ y tế chuyên nghiệp',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: FileText,
    title: 'Medical Writing',
    description:
      'Viết bài khoa học, báo cáo y tế và tài liệu chuyên môn',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: BarChart3,
    title: 'Marketing Analytics',
    description:
      'Phân tích dữ liệu và đo lường hiệu quả chiến dịch marketing',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: Target,
    title: 'Brand Strategy',
    description:
      'Xây dựng và phát triển thương hiệu y tế uy tín, chuyên nghiệp',
    color: 'from-indigo-500 to-indigo-600',
  },
]

const marketingProjects = [
  {
    title: 'Content Marketing tại Mescells',
    organization: 'Hệ thống y tế Mescells',
    period: '2020 - Hiện tại',
    description:
      'Phụ trách chiến lược content marketing và digital marketing cho hệ thống y tế chuyên sâu về y học tái tạo và trị liệu tế bào',
    achievements: [
      'Xây dựng và quản lý nội dung website mescells.com',
      'Sáng tạo 200+ bài viết về công nghệ tế bào gốc',
      'Tăng trưởng traffic website 300% trong 2 năm',
      'Quản lý các kênh social media và community',
    ],
    link: 'https://mescells.com/',
  },
  {
    title: 'Chiến Dịch Marketing Y Học Tái Tạo',
    organization: 'Mescells',
    period: '2021 - 2023',
    description:
      'Phát triển và thực hiện các chiến dịch marketing để nâng cao nhận thức về y học tái tạo và công nghệ tế bào gốc',
    achievements: [
      'Tổ chức 50+ hội thảo và sự kiện khoa học',
      'Hợp tác với các báo lớn: VTV, Tiền Phong, Sức Khỏe Đời Sống',
      'Xây dựng cộng đồng 10,000+ thành viên',
      'Đạt giải thưởng Marketing Xuất Sắc trong Y Tế',
    ],
    link: 'https://mescells.com/',
  },
]

export default function Marketing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
            Marketing & Content
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kết hợp chuyên môn y tế với marketing để truyền tải thông điệp sức
            khỏe đến cộng đồng
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
            Dịch Vụ Marketing
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
            Dự Án Marketing Nổi Bật
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
                      Thành Tựu:
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
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
              { number: '200+', label: 'Bài Viết Content' },
              { number: '300%', label: 'Tăng Trưởng Traffic' },
              { number: '50+', label: 'Sự Kiện & Hội Thảo' },
              { number: '10K+', label: 'Cộng Đồng Online' },
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

