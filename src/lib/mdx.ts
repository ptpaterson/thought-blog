import fs from 'node:fs/promises'
import path from 'node:path'

import type { Metadata } from 'next/types'

export type BlogPostMetadata = Metadata & {
  categories: string[]
  description: string
  date: Date
  keywords: string[]
  title: string
  afterSlug?: string
  banner?: string
  beforeSlug?: string
  draft?: boolean
  updatedDate?: Date
}

export type BlogPostData = {
  slug: string
  metadata: BlogPostMetadata
  component: React.FC
}

export async function listBlogPosts(): Promise<
  Omit<BlogPostData, 'component'>[]
> {
  const files = await fs.readdir(path.join(process.cwd(), 'src/blogs'))

  return Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, '')
      return {
        slug,
        metadata: await getBlogPostMetadata(slug),
      }
    }),
  )
}

const REQUIRED_METADATA_FIELDS = ['description', 'date', 'keywords', 'title']

export const getBlogPost = async (slug: string): Promise<BlogPostData> => {
  const post = await import(`@/blogs/${slug}.mdx`)

  const { metadata: data } = post

  if (!REQUIRED_METADATA_FIELDS.every((field) => field in data)) {
    throw new Error(`Missing some required metadata fields in: ${slug}`)
  }

  const metadata: BlogPostMetadata = {
    ...data,
    date: new Date(data.date),
    updatedDate: data.updatedDate ? new Date(data.updatedDate) : undefined,
  }

  return {
    slug,
    metadata,
    component: post.default,
  }
}

export const getBlogPostMetadata = async (
  slug: string,
): Promise<BlogPostMetadata> => {
  const post = await getBlogPost(slug)
  return post.metadata
}
