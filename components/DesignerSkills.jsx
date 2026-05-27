'use client'
import { useInView } from 'react-intersection-observer'

const designs = [
{
  num: '01',
  title: 'SaaS Product Launch',
  category: 'Tech & Product Marketing',
  desc: 'Modern SaaS promotional creative focused on product growth, UI-driven branding, and conversion-focused communication.',
  tools: ['Canva', 'UI Marketing', 'Brand Strategy'],
  image: '/thumbnails/saas-promo.png',
  color: '#8b5cf6',
},
{
  num: '02',
  title: 'Restaurant Promo Campaign',
  category: 'Food & Restaurant Design',
  desc: 'Modern restaurant promotional creative designed with bold typography, high-contrast visuals, and conversion-focused call-to-action layout.',
  tools: ['Canva', 'Food Branding', 'Typography'],
  image: '/thumbnails/restaurant-promo.png',
  color: '#f59e0b',
},
  {
    num: '03',
    title: 'Business Promo Design',
    category: 'Marketing Creative',
    desc: 'Clean promotional design focused on readability, contrast, and brand consistency.',
    tools: ['Canva', 'Social Media', 'Visual Design'],
    image: '/thumbnails/business-promo.png',
    color: '#00ffb2',
  },
]

function DesignCard({ design, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div
      ref={ref}
      className="clip-card-md"
      style={{
        background: 'var(--surface)',
        border: '0.5px solid var(--border)',
        overflow: 'hidden',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s, border-color 0.3s`,
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = design.color)}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(0,255,178,0.12)')}
    >
      <div style={{ position: 'relative', aspectRatio: '1 / 1', background: 'var(--bg2)', overflow: 'hidden' }}>
        <img
          src={design.image}
          alt={design.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />

        <span style={{
          position: 'absolute',
          top: '0.75rem',
          left: '0.75rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.62rem',
          color: design.color,
          background: 'rgba(0,0,0,0.65)',
          padding: '0.25rem 0.6rem',
          letterSpacing: '0.12em',
        }}>
          {design.num}
        </span>
      </div>

      <div style={{ padding: '1.5rem' }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.62rem',
          color: design.color,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          marginBottom: '0.6rem',
        }}>
          {design.category}
        </div>

        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.75rem' }}>
          {design.title}
        </h3>

        <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          {design.desc}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {design.tools.map(tool => (
            <span
              key={tool}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: design.color,
                background: `${design.color}10`,
                border: `0.5px solid ${design.color}30`,
                padding: '0.22rem 0.55rem',
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function DesignerSkills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="designs" style={{ background: 'var(--bg2)', padding: '6rem 4rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
            marginBottom: '3rem',
          }}
        >
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--accent)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            <span style={{ color: 'var(--dim)' }}>//</span> 04 &nbsp; Design Work
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>
            Visual Design Portfolio<span style={{ color: 'var(--accent)' }}>.</span>
          </h2>

          <p style={{ color: 'var(--muted)', maxWidth: 650, lineHeight: 1.8, marginTop: '1rem' }}>
            Social media creatives, promotional posts, and brand-focused layouts designed for digital platforms.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}>
          {designs.map((design, i) => (
            <DesignCard key={design.num} design={design} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}