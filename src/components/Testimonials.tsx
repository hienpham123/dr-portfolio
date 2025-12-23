'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Testimonials() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = [
    {
      name: 'Phạm Thị Tươi',
      role: 'Bệnh nhân',
      rating: 5,
      comment:
        'Bác sĩ rất tận tâm và chuyên nghiệp. Tôi rất hài lòng với dịch vụ khám chữa bệnh. Có điều góp ý là dạo này bác sĩ mũm mĩm hơn nhưng vẫn rất tận tâm và chuyên nghiệp.',
      date: '2024',
    },
    {
      name: 'Phạm Thế Hiển',
      role: 'Bệnh nhân',
      rating: 5,
      comment:
        'Phương pháp điều trị hiệu quả, bác sĩ giải thích rõ ràng và dễ hiểu. Cảm ơn bác sĩ!',
      date: '2024',
    },
    {
      name: 'Quách Đình Bằng',
      role: 'Bệnh nhân',
      rating: 5,
      comment:
        'Dịch vụ tuyệt vời, thái độ phục vụ chu đáo. Tôi sẽ giới thiệu cho bạn bè và người thân.',
      date: '2023',
    },
  ]

  return (
    <section
      id="testimonials"
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
            {t('testimonials.title') || 'Đánh Giá Từ Bệnh Nhân'}
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle') ||
              'Những phản hồi chân thực từ bệnh nhân đã được điều trị'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow relative h-full flex flex-col"
            >
              <Quote className="w-12 h-12 text-primary-200 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10 flex-1">
                &ldquo;{testimonial.comment}&rdquo;
              </p>
              <div className="border-t border-gray-200 pt-4 mt-auto">
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-xs text-gray-400 mt-1">{testimonial.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

