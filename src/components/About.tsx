'use client'

import { motion } from 'framer-motion'
import { Award, GraduationCap, Heart, Users } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const achievements = [
  {
    icon: Award,
    title: 'Chứng Chỉ Chuyên Khoa',
    description: 'Được công nhận bởi các tổ chức y tế hàng đầu',
  },
  {
    icon: GraduationCap,
    title: 'Giáo Dục Xuất Sắc',
    description: 'Tốt nghiệp từ các trường đại học y danh tiếng',
  },
  {
    icon: Heart,
    title: 'Chăm Sóc Tận Tâm',
    description: 'Luôn đặt sức khỏe bệnh nhân lên hàng đầu',
  },
  {
    icon: Users,
    title: 'Đội Ngũ Chuyên Nghiệp',
    description: 'Làm việc với các chuyên gia hàng đầu',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
            Về Tôi
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Với niềm đam mê và cam kết không ngừng trong việc chăm sóc sức khỏe
            cộng đồng
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-primary-100 to-medical-100 rounded-2xl p-8 h-full">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Bác Sĩ Chuyên Khoa
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Với hơn 15 năm kinh nghiệm trong lĩnh vực y tế, tôi đã điều trị
                thành công hàng nghìn bệnh nhân với các tình trạng sức khỏe
                khác nhau. Chuyên môn của tôi bao gồm chẩn đoán chính xác, điều
                trị hiệu quả và chăm sóc toàn diện.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tôi tin rằng mỗi bệnh nhân đều xứng đáng được nhận sự chăm sóc
                tốt nhất. Phương pháp điều trị của tôi luôn được cá nhân hóa
                dựa trên nhu cầu và tình trạng cụ thể của từng người.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ngoài công việc lâm sàng, tôi còn tham gia nghiên cứu và giảng
                dạy để chia sẻ kiến thức với thế hệ bác sĩ trẻ.
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
            Học Vấn & Chứng Chỉ
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                year: '2008',
                title: 'Bác Sĩ Y Khoa',
                institution: 'Đại Học Y Hà Nội',
              },
              {
                year: '2012',
                title: 'Chuyên Khoa I',
                institution: 'Bệnh Viện Bạch Mai',
              },
              {
                year: '2018',
                title: 'Chuyên Khoa II',
                institution: 'Học Viện Quân Y',
              },
            ].map((item, index) => (
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

