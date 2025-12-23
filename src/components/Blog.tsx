'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, Calendar, Tag, BookOpen, Filter } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  date: string
  readTime: string
  image?: string
}

export default function Blog() {
  const { t, language } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedTag, setSelectedTag] = useState<string>('all')

  // Get blog posts from translations
  const allPosts: BlogPost[] = (t('blog.posts') as BlogPost[]) || []
  const categories: string[] = (t('blog.categories') as string[]) || []
  const allTags: string[] = (t('blog.tags') as string[]) || []

  // Filter posts based on search, category, and tag
  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesSearch =
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory =
        selectedCategory === 'all' || post.category === selectedCategory

      const matchesTag =
        selectedTag === 'all' || post.tags.includes(selectedTag)

      return matchesSearch && matchesCategory && matchesTag
    })
  }, [searchQuery, selectedCategory, selectedTag, allPosts])

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    setSelectedTag('all') // Reset tag when category changes
  }

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag)
  }

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('all')
    setSelectedTag('all')
  }

  return (
    <section
      id="blog"
      ref={ref}
      className="py-16 sm:py-20 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-3 bg-primary-100 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('blog.title') || 'Bài Viết Sức Khỏe'}
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            {t('blog.subtitle') ||
              'Chia sẻ kiến thức y tế và lời khuyên sức khỏe từ chuyên gia'}
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-12"
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={t('blog.searchPlaceholder') || 'Tìm kiếm bài viết...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Categories Filter */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-700 text-sm sm:text-base">
                {t('blog.categoriesTitle') || 'Danh Mục:'}
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleCategoryClick('all')}
                className={`px-4 py-2 rounded-lg font-medium text-sm sm:text-base transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t('blog.allCategories') || 'Tất Cả'}
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm sm:text-base transition-all ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Tags Filter */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Tag className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-700 text-sm sm:text-base">
                {t('blog.tagsTitle') || 'Thẻ:'}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleTagClick('all')}
                className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedTag === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {t('blog.allTags') || 'Tất Cả'}
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    selectedTag === tag
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          {(searchQuery || selectedCategory !== 'all' || selectedTag !== 'all') && (
            <button
              onClick={clearFilters}
              className="text-primary-600 hover:text-primary-700 font-medium text-sm"
            >
              {t('blog.clearFilters') || 'Xóa bộ lọc'}
            </button>
          )}

          {/* Results Count */}
          <div className="mt-4 text-gray-600 text-sm">
            {t('blog.resultsCount') || 'Tìm thấy'} {filteredPosts.length}{' '}
            {t('blog.postsFound') || 'bài viết'}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {filteredPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="block h-full"
              >
                <motion.article
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group cursor-pointer h-full flex flex-col"
                >
                  {/* Image Placeholder */}
                  <div className="aspect-[16/9] bg-gradient-to-br from-primary-100 to-primary-200 relative overflow-hidden">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <BookOpen className="w-14 h-14 sm:w-16 sm:h-16 text-primary-400" />
                      </div>
                    )}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs sm:text-sm font-semibold text-primary-600">
                        {post.category}
                      </span>
                    </div>
                  </div>

                {/* Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{post.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    {t('blog.readMore') || 'Đọc thêm'} →
                  </div>
                </div>
              </motion.article>
              </Link>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-lg sm:text-xl text-gray-600">
              {t('blog.noResults') || 'Không tìm thấy bài viết nào'}
            </p>
            <button
              onClick={clearFilters}
              className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
            >
              {t('blog.clearFilters') || 'Xóa bộ lọc'}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

