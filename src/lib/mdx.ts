import fs from 'node:fs/promises'
import path from 'node:path'

import type { Metadata } from 'next/types'

export type BlogPostMetadata = Metadata & {
  title: string
  description: string
  date: Date
  updatedDate?: Date
  banner?: string
  tags?: string[]
  beforeSlug?: string
  afterSlug?: string
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

export const getBlogPost = async (slug: string): Promise<BlogPostData> => {
  const post = await import(`@/blogs/${slug}.mdx`)

  const { metadata: data } = post

  if (!data.title || !data.description) {
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
