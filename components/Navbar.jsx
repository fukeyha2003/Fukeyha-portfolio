'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#designs', label: 'Designs' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 100,
        padding: '1.2rem 3rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(8,11,15,0.92)' : 'rgba(8,11,15,0.7)',
        backdropFilter: 'blur(16px)',
        borderBottom: '0.5px solid var(--border)',
        transition: 'background 0.3s',
      }}
    >
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--accent)', letterSpacing: '0.05em' }}>
        FR_
      </div>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }} className="hidden md:flex">
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              style={{
                color: 'var(--muted)', textDecoration: 'none',
                fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                transition: 'color 0.2s',
                cursor: 'none',
              }}
              onMouseEnter={e => (e.target.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.target.style.color = 'var(--muted)')}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Download CV button */}
      <a
        href="/Fukeyha_Rizwan_CV.pdf"
        download
        className="clip-btn"
        style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
          color: 'var(--accent)', letterSpacing: '0.12em',
          textTransform: 'uppercase', textDecoration: 'none',
          border: '1px solid var(--border2)',
          padding: '0.5rem 1.1rem',
          transition: 'background 0.2s',
          cursor: 'none',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,255,178,0.08)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
      >
        Download CV
      </a>
    </nav>
  )
}