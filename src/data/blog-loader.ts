import { marked } from 'marked'

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  content: string
}

const blogFiles = import.meta.glob('/src/content/blogs/*.md', { query: '?raw', import: 'default' })

let cachedPosts: BlogPost[] | null = null

export async function loadBlogPosts(): Promise<BlogPost[]> {
  if (cachedPosts) return cachedPosts

  const posts: BlogPost[] = []

  for (const [path, loader] of Object.entries(blogFiles)) {
    const raw = await loader() as string
    const { frontmatter, content } = parseFrontmatter(raw)
    const html = await marked(content)

    const slug = path.split('/').pop()?.replace('.md', '') || ''

    posts.push({
      slug,
      title: frontmatter.title || slug,
      date: frontmatter.date || '',
      excerpt: frontmatter.excerpt || '',
      tags: frontmatter.tags || [],
      content: html,
    })
  }

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  cachedPosts = posts
  return posts
}

export function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return loadBlogPosts().then((posts) => posts.find((p) => p.slug === slug))
}

interface Frontmatter {
  title?: string
  date?: string
  excerpt?: string
  tags?: string[]
}

function parseFrontmatter(raw: string): { frontmatter: Frontmatter; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)

  if (!match) {
    return { frontmatter: {}, content: raw }
  }

  const frontmatter: Frontmatter = {}
  const yamlBlock = match[1]
  const content = match[2]

  for (const line of yamlBlock.split('\n')) {
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) continue

    const key = line.slice(0, colonIndex).trim()
    let value = line.slice(colonIndex + 1).trim()

    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }

    if (key === 'tags') {
      const tagMatch = value.match(/\[([^\]]*)\]/)
      if (tagMatch) {
        frontmatter.tags = tagMatch[1]
          .split(',')
          .map((t) => t.trim().replace(/^["']|["']$/g, ''))
          .filter(Boolean)
      } else {
        frontmatter.tags = []
      }
    } else if (key === 'title') {
      frontmatter.title = value
    } else if (key === 'date') {
      frontmatter.date = value
    } else if (key === 'excerpt') {
      frontmatter.excerpt = value
    }
  }

  return { frontmatter, content }
}
