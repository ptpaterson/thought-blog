import { headers } from 'next/headers'
// import Image from 'next/image'
import type { Metadata } from 'next/types'

import Share from '@/components/share'
import Tag from '@/components/tag'
import { getBlogPost, listBlogPosts } from '@/lib/mdx'

type BlogPageProps = { params: Promise<{ slug: string }> }

export default async function BlogPage({ params }: BlogPageProps) {
  const headersList = await headers()
  const host = headersList.get('host')!

  const { slug } = await params

  const { metadata, component: MDXContent } = await getBlogPost(slug)
  const { title, date, updatedDate } = metadata

  const lastUpdated = updatedDate ?? date

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(lastUpdated)
  const tags = metadata.tags ?? []

  return (
    <div className='from-primary/10 via-primary/5 to-primary/10 w-full bg-linear-140'>
      <div className='flex flex-col items-center gap-12 py-12'>
        <div className='border-border/80 bg-surface-2 mx-auto w-full max-w-[768px] border shadow-lg md:rounded-lg'>
          {/* <div className='relative h-64 overflow-hidden md:rounded-t-lg'>
            <Image
              src={`/banners/${banner ?? 'file.svg'}`}
              alt={title}
              fill
              className='object-cover object-center'
              priority
            />
          </div> */}
          <article className='prose lg:prose-lg w-full p-6'>
            <div className='mt-6 mb-8'>
              <h1 className='mb-2 text-4xl font-bold lg:mb-2'>{title}</h1>
              <div className='flex items-center gap-2 py-2'>
                <span className='text-muted-foreground text-sm'>
                  last updated {formattedDate}
                </span>
                {tags.length > 0 && (
                  <>
                    <span className='text-muted-foreground'>|</span>
                    <div className='flex gap-1'>
                      {tags.map((tag) => (
                        <Tag key={tag} tag={tag} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
            <MDXContent />
          </article>
        </div>
        <Share title={title} host={host} />
      </div>
    </div>
  )
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params
  const { metadata } = await getBlogPost(slug)

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.tags,
    // other...
  }
}

export async function generateStaticParams() {
  const blogPosts = await listBlogPosts()
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export const dynamicParams = false
