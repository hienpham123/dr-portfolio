'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, Send, Stethoscope } from 'lucide-react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.')
      setFormData({ name: '', phone: '', message: '' })
      setIsSubmitting(false)
      setIsOpen(false)
    }, 1000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-primary-600 text-white rounded-full shadow-2xl hover:bg-primary-700 transition-colors flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        aria-label="Mở chat"
      >
        <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
        {!isOpen && (
          <motion.span
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          />
        )}
      </motion.button>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />

            {/* Chat Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[calc(100vh-8rem)] flex flex-col"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-700 to-primary-600 text-white p-6 relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Đóng chat"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">BS. Quách Thùy Linh</h3>
                    <p className="text-sm text-primary-100">
                      Bác Sĩ Chuyên Khoa
                    </p>
                  </div>
                </div>

                <p className="text-sm text-primary-100">
                  Chào mừng bạn đến với phòng khám. Vui lòng nhập thông tin trước
                  khi bắt đầu trò chuyện.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto flex-1">
                <div>
                  <label
                    htmlFor="chat-name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tên của bạn
                  </label>
                  <input
                    type="text"
                    id="chat-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                    placeholder="Nhập tên của bạn"
                  />
                </div>

                <div>
                  <label
                    htmlFor="chat-phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Số điện thoại của bạn
                  </label>
                  <input
                    type="tel"
                    id="chat-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                    placeholder="Nhập số điện thoại"
                  />
                </div>

                <div>
                  <label
                    htmlFor="chat-message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tin nhắn<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="chat-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all resize-none"
                    placeholder="Nhập tin nhắn của bạn*"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    'Đang gửi...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Gửi tin nhắn
                    </>
                  )}
                </motion.button>
              </form>

              {/* Footer */}
              <div className="px-6 pb-4 text-center">
                <p className="text-xs text-gray-500">
                  Cung cấp bởi{' '}
                  <span className="font-semibold text-primary-600">
                    Dr. Profile
                  </span>
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

