'use client'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    name: '// Languages',
    tags: ['Python', 'PHP', 'JavaScript', 'C', 'C++', 'SQL'],
  },
  {
    name: '// AI / ML',
    tags: ['TensorFlow', 'Scikit-learn', 'OpenCV', 'NumPy', 'Forecasting Models', 'Supervised Learning', 'NLP / Semantic Models'],
  },
  {
    name: '// Web Development',
    tags: ['Laravel', 'Django', 'React', 'Next.js', 'REST APIs', 'Bootstrap', 'HTML / CSS'],
  },
  {
    name: '// Data & Tools',
    tags: ['MySQL', 'SQLite', 'Git / GitHub', 'Jupyter Notebook', 'Google Colab', 'VS Code'],
  },
]

function SkillCard({ category, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <div
      ref={ref}
      className="clip-card-md"
      style={{
        background: 'var(--surface)',
        border: '0.5px solid var(--border)',
        padding: '1.75rem',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s, background 0.2s`,
      }}
      onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface2)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'var(--surface)')}
    >
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
        color: 'var(--accent2)', letterSpacing: '0.15em',
        textTransform: 'uppercase', marginBottom: '1.25rem',
      }}>
        {category.name}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {category.tags.map(tag => (
          <span
            key={tag}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
              padding: '0.3rem 0.75rem',
              background: 'rgba(0,255,178,0.06)',
              border: '0.5px solid var(--border2)',
              color: 'var(--text)', letterSpacing: '0.04em',
              transition: 'background 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,255,178,0.14)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,255,178,0.06)')}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div id="skills" style={{ background: 'var(--bg2)', padding: '6rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
            color: 'var(--accent)', letterSpacing: '0.25em',
            textTransform: 'uppercase', marginBottom: '0.75rem',
            display: 'flex', alignItems: 'center', gap: '0.75rem',
          }}>
            <span style={{ color: 'var(--dim)' }}>//</span> 02 &nbsp; Skills
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '3rem' }}>
            Technical Arsenal<span style={{ color: 'var(--accent)' }}>.</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}>
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.name} category={cat} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}