import { getTranslation } from './translations'
import type { Language } from './translations'

export interface BlogPost {
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

export function getBlogPostById(
  lang: Language,
  postId: number
): BlogPost | null {
  const posts = getTranslation(lang, 'blog.posts') as BlogPost[]
  if (!posts || !Array.isArray(posts)) {
    return null
  }
  return posts.find((post) => post.id === postId) || null
}

export function getAllBlogPosts(lang: Language): BlogPost[] {
  const posts = getTranslation(lang, 'blog.posts') as BlogPost[]
  return posts && Array.isArray(posts) ? posts : []
}

