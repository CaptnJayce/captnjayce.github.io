const techs = [
  'C++', 'Python', 'Lua', 'TypeScript', 'Raylib', 'Three.js',
  'React', 'Vite', 'Git', 'GLSL', 'Bash', 'Zig',
]

function TechMarquee() {
  return (
    <div className="scrolling-container">
      <div className="scrolling-content">
        {techs.map((t) => (
          <span key={t} className="tech-item">{t}</span>
        ))}
        {techs.map((t) => (
          <span key={`${t}-2`} className="tech-item">{t}</span>
        ))}
      </div>
    </div>
  )
}

export default TechMarquee
