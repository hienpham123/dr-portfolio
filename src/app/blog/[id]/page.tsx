'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Calendar, BookOpen, Tag, ArrowLeft, Share2 } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getBlogPostById } from '@/lib/blogUtils'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import ChatWidget from '@/components/ChatWidget'
import Link from 'next/link'
import Image from 'next/image'

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const { t, language } = useLanguage()
  const postId = parseInt(params.id as string, 10)

  const post = getBlogPostById(language, postId)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {t('blog.notFound') || 'Bài viết không tìm thấy'}
          </h1>
          <Link
            href="/#blog"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            {t('blog.backToBlog') || 'Quay lại danh sách bài viết'}
          </Link>
        </div>
      </div>
    )
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert(t('blog.linkCopied') || 'Đã sao chép link!')
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <article className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Link
                href="/#blog"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors text-sm sm:text-base"
              >
                <ArrowLeft className="w-5 h-5" />
                {t('blog.backToBlog') || 'Quay lại danh sách bài viết'}
              </Link>
            </motion.div>

            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              {/* Category */}
              <div className="mb-4">
                <span className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                  <span>{t('blog.share') || 'Chia sẻ'}</span>
                </button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    <Tag className="w-3 h-3" />
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.header>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 rounded-xl overflow-hidden"
            >
              {post.image ? (
                <div className="w-full bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: '16 / 9' }}
                  />
                </div>
              ) : (
                <div className="w-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center" style={{ aspectRatio: '16 / 9' }}>
                  <BookOpen className="w-20 h-20 sm:w-24 sm:h-24 text-primary-400" />
                </div>
              )}
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-base sm:prose-lg max-w-none prose-img:rounded-xl"
            >
              <div className="text-gray-700 leading-relaxed space-y-6">
                {/* Excerpt */}
                <p className="text-lg sm:text-xl text-gray-600 font-medium italic border-l-4 border-primary-600 pl-4 sm:pl-6">
                  {post.excerpt}
                </p>

                {/* Main Content */}
                <div className="text-base sm:text-lg leading-8 whitespace-pre-line">
                  {post.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Share Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {t('blog.shareArticle') || 'Chia sẻ bài viết này'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t('blog.shareDescription') ||
                      'Giúp người khác tìm thấy thông tin hữu ích này'}
                  </p>
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                >
                  <Share2 className="w-5 h-5" />
                  {t('blog.share') || 'Chia sẻ'}
                </button>
              </div>
            </motion.div>

            {/* Related Posts Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('blog.relatedPosts') || 'Bài viết liên quan'}
              </h3>
              <Link
                href="/#blog"
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-2"
              >
                {t('blog.viewAll') || 'Xem tất cả bài viết'} →
              </Link>
            </motion.div>
          </div>
        </article>
      </main>
      <Footer />
      <ScrollToTop />
      <ChatWidget />
    </>
  )
}

