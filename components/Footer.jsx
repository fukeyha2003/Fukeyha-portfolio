export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg2)',
      borderTop: '0.5px solid var(--border)',
      padding: '2.5rem 6rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '1rem',
    }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--dim)', letterSpacing: '0.08em' }}>
        © 2026 Fukeyha Rizwan · Karachi, Pakistan
      </span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--dim)', letterSpacing: '0.08em' }}>
        Built with Next.js · Designed with intention
      </span>
    </footer>
  )
}