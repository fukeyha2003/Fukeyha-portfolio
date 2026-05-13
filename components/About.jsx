'use client'
import { useInView } from 'react-intersection-observer'

const experience = [
  {
    role: 'Software Developer Intern',
    company: 'Fossphorus LLC · Karachi',
    date: 'Apr – Oct 2025',
    desc: 'Built and maintained Laravel web applications, shipped UI improvements for real world client projects, and collaborated via Git + agile workflows.',
  },
  {
    role: 'IT Intern',
    company: 'Karachi Development Authority',
    date: 'Mar – Apr 2025',
    desc: 'Assisted in IT operations and system handling; gained exposure to real world government scale software systems.',
  },
  {
    role: 'BS Computer Science & IT',
    company: 'NED University of Engineering & Technology',
    date: 'Expected Jun 2026',
    desc: 'Leading technical projects, exploring AI + software engineering integration as primary focus area.',
  },
]

function TimelineItem({ item, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <div
      ref={ref}
      style={{
        background: 'var(--surface)',
        borderLeft: '2px solid var(--accent)',
        border: '0.5px solid var(--border)',
        borderLeft: '2px solid var(--accent)',
        padding: '1.25rem 1.5rem',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateX(20px)',
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'var(--surface2)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface)' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.3rem' }}>
        <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{item.role}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent)', whiteSpace: 'nowrap', marginLeft: '1rem' }}>{item.date}</span>
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>{item.company}</div>
      <div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.65 }}>{item.desc}</div>
    </div>
  )
}

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" style={{ background: 'var(--bg2)',padding: '6rem', maxWidth: 1200, margin: '2rem auto' }}>
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
          <span style={{ color: 'var(--dim)' }}>//</span> 01 &nbsp; About
        </div>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '3rem' }}>
          Who I Am<span style={{ color: 'var(--accent)' }}>.</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
        <div>
          {[
            <>I'm a <strong style={{ color: 'var(--text)' }}>Computer Science student at NED University</strong>, graduating in June 2026. I specialize in building full-stack applications with a strong focus on integrating AI and machine learning into real world products.</>,
            <>My work spans from <strong style={{ color: 'var(--text)' }}>AI-powered assistive technology</strong> (SmartSight for the visually impaired) to enterprise grade systems like examination managers and ML driven inventory intelligence platforms.</>,
            <>I thrive at the intersection of <strong style={{ color: 'var(--text)' }}>software engineering and artificial intelligence</strong> — turning complex ideas into products that actually matter and reach real users.</>,
          ].map((text, i) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
            return (
              <p
                key={i}
                ref={ref}
                style={{
                  color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1.25rem', fontSize: '1rem',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'none' : 'translateY(16px)',
                  transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
                }}
              >
                {text}
              </p>
            )
          })}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {experience.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}