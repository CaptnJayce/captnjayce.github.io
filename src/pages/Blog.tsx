import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'

function Blog() {
  return (
    <div className="blog-page">
      <h2 className="blog-page-title"><span className="pre-header">ALL.</span> Blog</h2>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.slug}`} className="blog-item" key={post.slug}>
            <div className="blog-item-header">
              <h3 className="blog-item-title">{post.title}</h3>
              <span className="blog-item-date">{post.date}</span>
            </div>
            <p className="blog-item-excerpt">{post.excerpt}</p>
            <div className="blog-item-tags">
              {post.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Blog
