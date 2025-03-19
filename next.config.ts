import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode, {
  Options as PrettyCodeOptions,
} from 'rehype-pretty-code'

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const prettyCodeOptions: PrettyCodeOptions = {
  bypassInlineCode: false,
  defaultLang: 'plaintext',
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
