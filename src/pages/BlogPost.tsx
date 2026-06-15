import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'

function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="blog-post">
        <div className="blog-nav">
          <Link to="/#blog" className="back-link">← Home</Link>
          <Link to="/blog" className="back-link">← All Blogs</Link>
        </div>
        <h1>Post not found</h1>
        <p>Sorry, that post doesn't exist.</p>
      </div>
    )
  }

  return (
    <div className="blog-post">
      <div className="blog-nav">
          <Link to="/#blog" className="back-link">← Home</Link>
        <Link to="/blog" className="back-link">← All Blogs</Link>
      </div>
      <div className="blog-post-header">
        <h1 className="blog-post-title">{post.title}</h1>
        <div className="blog-post-meta">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.tags.join(', ')}</span>
        </div>
      </div>
      <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}

export default BlogPost
