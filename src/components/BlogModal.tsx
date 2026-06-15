import { useEffect, useRef } from 'react'
import { blogPosts } from '../data/blog'

interface BlogModalProps {
  slug: string | null
  onClose: () => void
}

function BlogModal({ slug, onClose }: BlogModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const post = slug ? blogPosts.find((p) => p.slug === slug) : null

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
