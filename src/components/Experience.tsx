'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Award } from 'lucide-react'

const experiences = [
  {
    year: '2020 - Hiện tại',
    position: 'Content & Marketing Manager',
    hospital: 'Hệ thống y tế Mescells',
    location: 'Hà Nội',
    description:
      'Phụ trách chiến lược content marketing và digital marketing cho hệ thống y tế chuyên sâu về y học tái tạo và trị liệu tế bào',
    achievements: [
      'Xây dựng và quản lý nội dung website mescells.com',
      'Sáng tạo 200+ bài viết về công nghệ tế bào gốc',
      'Tăng trưởng traffic website 300% trong 2 năm',
      'Quản lý các kênh social media và community',
    ],
  },
  {
    year: '2018 - Hiện tại',
    position: 'Bác Sĩ Trưởng Khoa',
    hospital: 'Bệnh Viện Đa Khoa Trung Ương',
    location: 'Hà Nội',
    description:
      'Quản lý và điều hành khoa, đào tạo bác sĩ trẻ, thực hiện các ca phẫu thuật phức tạp',
    achievements: [
      'Thực hiện hơn 1000 ca phẫu thuật thành công',
      'Đào tạo 50+ bác sĩ trẻ',
      'Nghiên cứu và công bố 20+ bài báo khoa học',
    ],
  },
  {
    year: '2012 - 2018',
    position: 'Bác Sĩ Chuyên Khoa',
    hospital: 'Bệnh Viện Bạch Mai',
    location: 'Hà Nội',
    description:
      'Chuyên điều trị các ca bệnh phức tạp, tham gia nghiên cứu lâm sàng',
    achievements: [
      'Điều trị thành công 5000+ bệnh nhân',
      'Tham gia 10+ dự án nghiên cứu',
      'Nhận giải thưởng Bác sĩ xuất sắc',
    ],
  },
  {
    year: '2008 - 2012',
    position: 'Bác Sĩ Nội Trú',
    hospital: 'Bệnh Viện Đại Học Y Hà Nội',
    location: 'Hà Nội',
    description:
      'Học tập và thực hành lâm sàng dưới sự hướng dẫn của các giáo sư đầu ngành',
    achievements: [
      'Hoàn thành chương trình nội trú xuất sắc',
      'Tham gia nhiều ca phẫu thuật phức tạp',
      'Đạt điểm cao trong các kỳ thi chuyên khoa',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
            Kinh Nghiệm Làm Việc
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hành trình phát triển sự nghiệp trong lĩnh vực y tế
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
                          Thành Tựu:
                        </div>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
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

