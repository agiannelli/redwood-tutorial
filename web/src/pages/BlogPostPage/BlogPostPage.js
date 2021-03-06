import { Link, routes } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'
import BlogPostCell from 'src/components/BlogPostCell'

const BlogPostPage = ({ id }) => {
  return (
    <BlogLayout>
      <div className="-mt-12">
        <BlogPostCell id={id} />
      </div>
    </BlogLayout>
  )
}

export default BlogPostPage
