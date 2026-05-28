'use client'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('sending')

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      setStatus('sent')
      setForm({
        name: '',
        email: '',
        message: '',
      })
    } else {
      setStatus('error')
    }
  } catch {
    setStatus('error')
  }
}

  const inputStyle = {
    width: '100%', padding: '0.85rem 1rem',
    background: 'var(--bg3)',
    border: '0.5px solid var(--border)',
    color: 'var(--text)',
    fontFamily: 'var(--font-display)', fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    cursor: 'none',
  }

  return (
    <section id="contact" className="responsive-section" style={{ padding: '6rem', maxWidth: 1200, margin: '0 auto' }}>
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
          <span style={{ color: 'var(--dim)' }}>//</span> 04 &nbsp; Contact
        </div>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
          Let's Build Something<span style={{ color: 'var(--accent)' }}>.</span>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.8, maxWidth: 500, marginBottom: '3rem' }}>
          I'm graduating June 2026 and open to full-time roles, internships, and interesting collaborations.
        </p>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Contact Info */}
          <div>
            {[
              { label: 'Email', value: 'fukeharizwan2003@gmail.com', href: 'mailto:fukeharizwan2003@gmail.com' },
              { label: 'Phone', value: '+92 370 2171598', href: 'tel:+923702171598' },
              { label: 'LinkedIn', value: 'linkedin.com/in/fukeyha-rizwan', href: 'https://linkedin.com/in/fukeyha-rizwan' },
              { label: 'Location', value: 'Karachi, Pakistan', href: null },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex', flexDirection: 'column', gap: '0.25rem',
                marginBottom: '2rem',
                paddingBottom: '2rem',
                borderBottom: '0.5px solid var(--border)',
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--dim)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '1rem', fontWeight: 500, transition: 'opacity 0.2s', cursor: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span style={{ color: 'var(--text)', fontSize: '1rem', fontWeight: 500 }}>{item.value}</span>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Name</label>
                <input
                  name="name" type="text" required placeholder="Your name"
                  value={form.name} onChange={handleChange}
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = 'var(--border2)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
              <div>
                <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Email</label>
                <input
                  name="email" type="email" required placeholder="your@email.com"
                  value={form.email} onChange={handleChange}
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = 'var(--border2)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
            </div>

            <div>
              <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Message</label>
              <textarea
                name="message" required rows={6} placeholder="Tell me about your project or opportunity..."
                value={form.message} onChange={handleChange}
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => (e.target.style.borderColor = 'var(--border2)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="clip-btn"
              style={{
                padding: '0.9rem 2rem',
                background: status === 'sent' ? 'rgba(0,255,178,0.2)' : 'var(--accent)',
                color: status === 'sent' ? 'var(--accent)' : '#000',
                fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                border: status === 'sent' ? '1px solid var(--accent)' : 'none',
                cursor: 'none',
                transition: 'all 0.2s', alignSelf: 'flex-start',
              }}
            >
              {status === 'sending' ? 'Sending...' : status === 'sent' ? '✓ Message Sent!' : status === 'error' ? 'Error — Try Again' : 'Send Message'}
            </button>

            {status === 'error' && (
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#ff6b6b' }}>
                Something went wrong. Please email me directly at fukeharizwan2003@gmail.com
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  )
}