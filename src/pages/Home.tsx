import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { blogPosts } from '../data/blog'

function Home() {
  const featured = projects.slice(0, 3)
  const featuredBlog = blogPosts.slice(0, 3)

  return (
    <div className="home">
      {/* Hero */}
      <section className="section1">
        <div className="section1-center">
          <div className="hero-title-block">
            <h1 className="cursor-scale">Casey Jestico</h1>
            <p className="subtitle small">games, tools, ai</p>
            <div className="subtitle-underscore"></div>
          </div>
        </div>
        <div className="section1-bottom">
          <div className="quote-template">
            <p className="quote-text small">
              <span className="lang-text">سكينة</span> | &nbsp;Euthymia
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section2">
        <div className="image-container">
          <img
            src="/assets/pfp.jpg"
            alt="Profile"
            className="pfp-img"
          />
        </div>
        <div className="section2-content">
          <h2><span className="pre-header">01.</span> ABOUT</h2>
          <p>
            Hi! I'm Casey, a CS graduate and Muslim revert with a passion for game development and AI.
            I'm always coding, most of the time it's <span className="highlight">game development</span>,
            <span className="highlight"> tooling</span>, or something<span className="highlight"> AI oriented</span>.
            I spend most of my time in C++, Python, and Lua - usually building games and tools,
            or teaching machines how to work instead.
            <br /><br />
            When I'm not coding, I'm usually working on my fantasy universe, Asl.
            <br /><br />
            <span className="highlight">Note:</span> Despite my love for AI, I never combine it with my creative work. I think it's a very interesting field and it certainly has it's place - particularly in development, but creativity is a human expression. Machines should optimize the work, not the hobby.
          </p>
          <a href="/resume.pdf" target="_blank" className="resume-button">Résumé</a>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section4">
        <div className="section4-content">
          <h2 className="title"><span className="pre-header">02.</span> PROJECTS</h2>
          {featured.map((project, index) => (
            <div className={`grid-flex ${index % 2 === 1 ? 'reversed' : ''}`} key={project.slug}>
              <div
                className="col col-image"
                style={{ background: generateMonochromeGradient(project.slug) }}
              >
                <span className="project-image-label">{project.title}</span>
              </div>
              <div className="col col-text">
                <div className="Aligner-item">
                  <h1>PROJECT</h1>
                  <h2>{project.title}</h2>
                  <p className="project-desc">
                    {project.description}
                  </p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <div className="tag" key={tag}>{tag}</div>
                    ))}
                  </div>
                  {project.links?.map((link) => (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="github-button"
                      key={link.label}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="view-all-projects">
            <Link to="/projects" className="github-button">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="section4">
        <div className="section4-content">
          <h2 className="title"><span className="pre-header">03.</span> BLOG</h2>
          <div className="blog-preview-list">
            {featuredBlog.map((post) => (
              <Link to={`/blog/${post.slug}`} className="blog-preview-item" key={post.slug}>
                <div className="blog-preview-header">
                  <h3 className="blog-preview-title">{post.title}</h3>
                  <span className="blog-preview-date">{post.date}</span>
                </div>
                <p className="blog-preview-excerpt">{post.excerpt}</p>
                <div className="blog-preview-tags">
                  {post.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div className="view-all-projects">
            <Link to="/blog" className="github-button">View All Posts</Link>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section5">
        <div className="finalquote">
          <p>
            "The world is vast, but the heart knows its path.
            <br />
            <span className="drink">Follow it, and you shall find your way.</span>"
            <br />
            <span className="quote-author">— Quirrel</span>
          </p>
        </div>
      </section>
    </div>
  )
}

function generateMonochromeGradient(seed: string): string {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash)
  }
  const l1 = 8 + (Math.abs(hash) % 12)
  const l2 = 15 + (Math.abs(hash >> 3) % 15)
  return `linear-gradient(135deg, hsl(0, 0%, ${l1}%), hsl(0, 0%, ${l2}%))`
}

export default Home
