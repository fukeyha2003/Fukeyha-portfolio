'use client'
import { useEffect } from 'react'

const stats = [
  { num: '4+', label: 'Projects Built' },
  { num: '2', label: 'Internships' },
  { num: '8+', label: 'Technologies' },
]

export default function Hero() {
  useEffect(() => {
    const els = document.querySelectorAll('.hero-reveal')
    els.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(24px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
        el.style.opacity = '1'
        el.style.transform = 'none'
      }, 200 + i * 130)
    })
  }, [])

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '2rem 5rem',
        position: 'relative',
        overflow: 'hidden',
        background: '#080b0f',
      }}
    >
      {/* Grid bg */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(0,255,178,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,178,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Glow top-right */}
      <div style={{
        position: 'absolute', width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,255,178,0.07) 0%, transparent 65%)',
        top: -200, right: -150, zIndex: 0, pointerEvents: 'none',
      }} />

      {/* Glow bottom-left */}
      <div style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,200,255,0.05) 0%, transparent 65%)',
        bottom: -100, left: '15%', zIndex: 0, pointerEvents: 'none',
      }} />

      {/* MAIN CONTENT */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 780, paddingTop: '80px' }}>

        {/* Tag */}
        <div
          className="hero-reveal"
          style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.72rem', letterSpacing: '0.22em',
            textTransform: 'uppercase', color: '#00ffb2',
            marginBottom: '1.6rem',
          }}
        >
          <span style={{ width: 44, height: 1, background: '#00ffb2', display: 'block', flexShrink: 0 }} />
          Available for opportunities · 2026
        </div>

        {/* Name */}
        <h1
          className="hero-reveal"
          style={{
            fontSize: 'clamp(4rem, 9vw, 7.5rem)',
            fontWeight: 800,
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            marginBottom: '1.8rem',
            fontFamily: "'Syne', sans-serif",
            background: 'linear-gradient(140deg, #ffffff 0%, #a8e6d4 45%, #00ffb2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Fukeyha<br />Rizwan
        </h1>

        {/* Subtitle */}
        <p
          className="hero-reveal"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.92rem',
            color: '#7a9aaa',
            marginBottom: '1.4rem',
            lineHeight: 1.6,
            letterSpacing: '0.02em',
          }}
        >
          <span style={{ color: '#00c8ff' }}>CSIT @ NED University</span>
          <span style={{ margin: '0 0.6rem', opacity: 0.4 }}>·</span>
          Software Developer
          <span style={{ margin: '0 0.6rem', opacity: 0.4 }}>·</span>
          AI/ML Engineer
        </p>

        {/* Description */}
        <p
          className="hero-reveal"
          style={{
            fontSize: '1rem',
            color: '#7a9aaa',
            lineHeight: 1.9,
            maxWidth: 520,
            marginBottom: '2.8rem',
            fontFamily: "'Syne', sans-serif",
          }}
        >
          Building intelligent systems that bridge machine learning with
          real world software. Passionate about AI-powered applications,
          clean code, and creating impact.
        </p>

        {/* Buttons */}
        <div className="hero-reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="#projects"
            style={{
              display: 'inline-block',
              padding: '0.9rem 2.2rem',
              background: '#00ffb2',
              color: '#000',
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)',
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#00e6a0'
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#00ffb2'
              e.currentTarget.style.transform = 'none'
            }}
          >
            View Projects
          </a>

          <a
            href="#contact"
            style={{
              display: 'inline-block',
              padding: '0.9rem 2.2rem',
              background: 'transparent',
              color: '#00ffb2',
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: '1px solid rgba(0,255,178,0.35)',
              clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)',
              transition: 'background 0.2s, border-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(0,255,178,0.1)'
              e.currentTarget.style.borderColor = 'rgba(0,255,178,0.6)'
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(0,255,178,0.35)'
              e.currentTarget.style.transform = 'none'
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* STAT CARDS */}
      <div
  className="hero-reveal"
  style={{
    position: "absolute",
    right: "5rem",
    top: "40%",
    transform: "none",
    display: "flex",
    flexDirection: "row",
    gap: "2.25rem",
    zIndex: 1,
    opacity: 1,
    transition: "opacity 0.7s, transform 0.7s",
  }}
>
        {stats.map(s => (
          <div
            key={s.label}
            style={{
              background: '#141c26',
              border: '0.5px solid rgba(0,255,178,0.25)',
              padding: '1.2rem 1.8rem',
              textAlign: 'center',
              clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
              minWidth: 130,
            }}
          >
            <span style={{
              display: 'block',
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#00ffb2',
              fontFamily: "'Space Mono', monospace",
              lineHeight: 1,
              marginBottom: '0.4rem',
            }}>
              {s.num}
            </span>
            <span style={{
              fontSize: '0.6rem',
              color: '#7a9aaa',
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              fontFamily: "'Space Mono', monospace",
            }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* SCROLL INDICATOR */}
      <div style={{
        position: 'absolute',
        bottom: '2.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.6rem',
        zIndex: 1,
        animation: 'scrollBounce 2s ease-in-out infinite',
      }}>
        <span style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.6rem',
          color: '#3a5060',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}>
          scroll
        </span>
        <div style={{
          width: 1,
          height: 48,
          background: 'linear-gradient(to bottom, #00ffb2, transparent)',
        }} />
      </div>

      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  )
}