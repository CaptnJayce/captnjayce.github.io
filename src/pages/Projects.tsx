import { projects } from '../data/projects'

function Projects() {
  return (
    <div className="projects-page">
      <h2 className="projects-title"><span className="pre-header">ALL.</span> Lorem Ipsum</h2>
      <div className="projects-page-grid">
        {projects.map((project, index) => (
          <div className={`grid-flex ${index % 2 === 1 ? 'reversed' : ''}`} key={project.slug}>
            <div
              className="col col-image"
              style={{ background: generatePlaceholderGradient(project.slug) }}
            >
              <span className="project-image-label">{project.title}</span>
            </div>
            <div className="col col-text">
              <div className="Aligner-item">
                <h1>LOREM</h1>
                <h2>{project.title}</h2>
                <p className="project-date">{project.date}</p>
                <p className="project-desc">
                  {project.description}
                </p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <div className="tag" key={tag}>{tag}</div>
                  ))}
                </div>
                <div className="project-links">
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
          </div>
        ))}
      </div>
    </div>
  )
}

function generatePlaceholderGradient(seed: string): string {
  const hues = [190, 220, 280, 340, 30, 160, 200, 260]
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash)
  }
  const h1 = hues[Math.abs(hash) % hues.length]
  const h2 = hues[(Math.abs(hash >> 3) + 3) % hues.length]
  return `linear-gradient(135deg, hsl(${h1}, 60%, 15%), hsl(${h2}, 50%, 10%))`
}

export default Projects
