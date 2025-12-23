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
} from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Khám Tổng Quát',
    description:
      'Kiểm tra sức khỏe định kỳ và tư vấn về lối sống lành mạnh',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Heart,
    title: 'Tim Mạch',
    description:
      'Chẩn đoán và điều trị các bệnh lý về tim mạch, huyết áp',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Brain,
    title: 'Thần Kinh',
    description:
      'Điều trị các rối loạn thần kinh và bệnh lý não bộ',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Eye,
    title: 'Mắt',
    description:
      'Khám và điều trị các bệnh về mắt, phẫu thuật mắt',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Baby,
    title: 'Nhi Khoa',
    description:
      'Chăm sóc sức khỏe trẻ em từ sơ sinh đến tuổi vị thành niên',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Activity,
    title: 'Nội Tiết',
    description:
      'Điều trị các rối loạn nội tiết, tiểu đường, tuyến giáp',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Microscope,
    title: 'Xét Nghiệm',
    description:
      'Các xét nghiệm chẩn đoán chính xác và nhanh chóng',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: Pill,
    title: 'Tư Vấn Dược',
    description:
      'Tư vấn về thuốc và liệu pháp điều trị phù hợp',
    color: 'from-indigo-500 to-indigo-600',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
            Dịch Vụ Y Tế
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Các dịch vụ chăm sóc sức khỏe toàn diện và chuyên nghiệp
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

