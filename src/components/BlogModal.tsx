import { useEffect, useRef, useState } from 'react'
import { getBlogPostBySlug, type BlogPost } from '../data/blog-loader'

interface BlogModalProps {
  slug: string | null
  onClose: () => void
}

function BlogModal({ slug, onClose }: BlogModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!slug) {
      setPost(null)
      return
    }
    setLoading(true)
    getBlogPostBySlug(slug)
      .then((found) => {
        setPost(found || null)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [slug])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (slug) {
      document.addEventListener('keydown', handleKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [slug, onClose])

  if (!slug) return null
  if (loading) {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <p className="modal-loading">Loading...</p>
        </div>
      </div>
    )
  }
  if (!post) return null

  return (
    <div
      ref={overlayRef}
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose()
      }}
    >
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="modal-header">
          <h1 className="modal-title">{post.title}</h1>
          <div className="modal-meta">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.tags.join(', ')}</span>
          </div>
        </div>
        <div className="modal-body" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  )
}

export default BlogModal
