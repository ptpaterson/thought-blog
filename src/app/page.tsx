import Link from 'next/link'
import Image from 'next/image'
import { listBlogPosts } from '@/lib/mdx'
import Time from '@/components/util/time'

export default async function Home() {
  const posts = await listBlogPosts()

  return (
    <div className='from-primary/10 via-surface-2 to-primary/10 h-full w-full bg-linear-160 px-6 py-12'>
      <div className='mx-auto max-w-[1024px] md:px-12'>
        {/* Hero Section */}
        <section className='flex flex-col items-center gap-8 md:flex-row'>
          <div className='md:w-1/2'>
            <h1 className='mb-4 flex gap-2 text-4xl font-bold md:block md:text-5xl'>
              <div>Hi, I&apos;m</div>{' '}
              <div className='text-primary'>Paul Paterson</div>
            </h1>
            <p className='mb-6 text-xl'>
              I am passionate about building things, whether it&apos;s with code
              or with my hands. Sometimes I write about it.
            </p>
          </div>
          <div className='p-4'>
            <Image
              src='/MeFace.jpg?height=250&width=250'
              alt='Profile'
              width={250}
              height={250}
              className='rounded-full'
            />
          </div>
        </section>

        {/* Recent Posts */}
        <section className='mt-12'>
          <div className='mb-8'>
            <h2 className='mb-4 text-3xl font-bold'>Recent Posts</h2>
            <p className=''>
              I am still working on more content for the blog, but for now,
              check out my available posts!
            </p>
          </div>
          <div className='grid-col-1 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {posts.map((post) => (
              <article
                key={post.slug}
                className='bg-surface-2 border-border relative isolate rounded-lg border shadow-lg'
              >
                <div className='hover:bg-primary/10 flex h-full flex-col overflow-hidden rounded-lg transition'>
                  {/* <Image
                  src={`/banners/${
                    post.metadata.banner ?? 'file.svg'
                  }?height=200&width=400`}
                  alt={post.metadata.title}
                  width={400}
                  height={200}
                  className='bg-surface-2 h-48 w-full rounded-t-lg object-cover'
                /> */}
                  <div className='flex grow flex-col p-4'>
                    <h3 className='mb-2 text-xl font-semibold'>
                      <Link href={`/blog/${post.slug}`}>
                        <span className='absolute inset-0 z-10'></span>
                        {post.metadata.title}
                      </Link>
                    </h3>
                    <Time
                      className='text-muted-foreground order-first'
                      date={post.metadata.updatedDate ?? post.metadata.date}
                    />
                    <p className='mb-2'>{post.metadata.description}</p>
                    <div aria-hidden='true' className='text-primary mt-auto'>
                      Read article →
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
