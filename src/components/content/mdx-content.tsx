type Props = {
  slug: string
}

const MDXContent = async ({ slug }: Props) => {
  const Inner = await import(`@/blogs/${slug}.mdx`)

  return <Inner.default />
}

export default MDXContent
