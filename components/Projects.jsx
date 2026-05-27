'use client'
import { useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const projects = [
   {
    num: '01',
    category: 'AI · Forecasting · Data Science',
    title: 'Weather Forecast Prediction System',
    desc: 'Time-series based weather forecasting system that predicts temperature and conditions using historical data. Combines trend analysis, seasonality patterns, and statistical modeling to generate future forecasts with confidence scoring.',
    stack: ['Python', 'Time Series', 'Pandas', 'Forecasting', 'Data Visualization'],
    github: 'https://github.com/fukeyha-rizwan',
    video: '/videos/weather.mp4',
    thumbnail: '/thumbnails/weather.jpg',
    color: '#34d399',
  },

  {
    num: '02',
    category: 'ML · Django · Data Intelligence',
    title: 'Fashion Inventory Intelligence',
    desc: 'ML-powered demand forecasting system for fashion retail. Predicts product demand using trend + seasonality models, fires intelligent risk alerts, and displays a KPI dashboard with actionable business insights.',
    stack: ['Django', 'Machine Learning', 'Scikit-learn', 'Forecasting', 'Python'],
    github: 'https://github.com/fukeyha-rizwan',
    video: '/videos/fashion-inventory.mp4',
    thumbnail: '/thumbnails/fashion-inventory.png',
    color: '#00c8ff',
  },
  {
    num: '03',
    category: 'Machine Learning · Data Analysis',
    title: 'Employee Absenteeism Prediction',
    desc: 'ML model to predict employee absenteeism using data preprocessing, feature engineering, and probability analysis. Visualized insights like age and transportation impact using Tableau dashboards.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Tableau', 'Data Preprocessing'],
    github: 'https://github.com/fukeyha-rizwan',
    video: '/videos/Absenteeism.mp4',
    thumbnail: '/thumbnails/Absenteeism.png',
    color: '#a78bfa',
  },
{
  num: '04',
  category: 'Backend · Laravel · Full Stack',
  title: 'Hotel Management System',
  desc: 'Full-featured hotel management platform built with Laravel, covering room bookings, guest management, check-in/check-out workflows, and billing — all within a clean, role-based admin interface.',
  stack: ['Laravel', 'PHP', 'MySQL', 'Blade / CSS'],
  github: 'https://github.com/fukeyha-rizwan',
  video: '/videos/hotel.mp4',
  thumbnail: '/thumbnails/hotel.png',
  color: '#fbbf24',
},
  {
    num: '05',
    category: 'AI · Computer Vision · Final Year Project',
    title: 'SmartSight — AI Assistive Glasses',
    desc: 'An AI-powered system helping visually impaired individuals identify products in real time. Features barcode detection with voice feedback, multi-mode scanning logic (search, alignment, rotation, scan), and a local product database with fallback manual entry.',
    stack: ['Python', 'OpenCV', 'Text-to-Speech', 'Computer Vision', 'Barcode Detection'],
    github: 'https://github.com/fukeyha-rizwan',
    // ▶ Place your video at /public/videos/smartsight.mp4
    video: '/videos/smartsight.mp4',
    // ▶ Place a thumbnail at /public/thumbnails/smartsight.jpg
    thumbnail: '/thumbnails/smartsight.png',
    color: '#00ffb2',
  },
]

// ── Play icon SVG ──
function PlayIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="27" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <circle cx="28" cy="28" r="27" stroke="white" strokeWidth="1"
        strokeDasharray="170" strokeDashoffset="170"
        style={{ transition: 'stroke-dashoffset 0.4s ease' }}
        className="play-ring"
      />
      <polygon points="23,18 23,38 42,28" fill="white" />
    </svg>
  )
}

function ProjectCard({ project, index }) {
  const [playing, setPlaying] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const videoRef = useRef(null)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const reversed = index % 2 !== 0

  const handlePlay = () => {
    setPlaying(true)
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play()
      }
    }, 50)
  }

  const handlePause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }

  return (
    <div
      ref={ref}
      style={{
        background: '#141c26',
        border: '0.5px solid rgba(0,255,178,0.12)',
        overflow: 'hidden',
        clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(30px)',
        transition: `opacity 0.7s ease ${index * 0.08}s, transform 0.7s ease ${index * 0.08}s, border-color 0.3s`,
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(0,255,178,0.28)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(0,255,178,0.12)')}
    >
      {/* ── VIDEO PANEL ── */}
      <div
      
        style={{
          position: 'relative',
          background: '#0d1117',
          aspectRatio: '16/9',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        onClick={!playing ? handlePlay : handlePause}
      >
        {/* Project number badge */}
        <span style={{
          position: 'absolute', top: '0.75rem', left: '0.75rem', zIndex: 10,
          fontFamily: "'Space Mono', monospace", fontSize: '0.62rem',
          color: project.color,
          background: 'rgba(0,0,0,0.6)',
          padding: '0.2rem 0.55rem',
          letterSpacing: '0.1em',
          backdropFilter: 'blur(4px)',
        }}>
          {project.num}
        </span>
        <video
  ref={videoRef}
  src={project.video}
  loop
  playsInline
  preload="metadata"
  style={{
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 3,
    opacity: playing ? 1 : 0,
    transition: 'opacity 0.3s ease',
  }}
/>
       <img
  src={project.thumbnail}
  alt="thumbnail"
  style={{
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: playing ? 0 : 1,
    transition: 'opacity 0.3s ease',
  }}
/>
   

        {/* Thumbnail shown before play */}
        {!playing && (
          <div style={{
            position: 'absolute', inset: 0,
           background: 'rgba(0,0,0,0.35)', // light dark overlay
backdropFilter: 'blur(2px)',
zIndex: 2,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: '1rem',
          }}>
            {/* Decorative grid */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `
                linear-gradient(${project.color}08 1px, transparent 1px),
                linear-gradient(90deg, ${project.color}08 1px, transparent 1px)
              `,
              backgroundSize: '32px 32px',
            }} />

            {/* Glow behind play */}
            <div style={{
              position: 'absolute',
              width: 160, height: 160,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${project.color}18 0%, transparent 70%)`,
            }} />

            {/* Play button */}
            <div style={{
              position: 'relative', zIndex: 2,
              opacity: 1,
              transform: showControls ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.2s ease',
            }}>
              <div style={{
                width: 64, height: 64,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(8px)',
                border: '1.5px solid rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 0 32px ${project.color}30`,
              }}>
                {/* Play triangle */}
                <div style={{
                  width: 0, height: 0,
                  borderTop: '10px solid transparent',
                  borderBottom: '10px solid transparent',
                  borderLeft: `18px solid white`,
                  marginLeft: '4px',
                  opacity: 0.9,
                }} />
              </div>
            </div>

            {/* Label */}
            <span style={{
              position: 'relative', zIndex: 2,
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.62rem',
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}>
              {showControls ? 'Click to play' : 'Demo video'}
            </span>
          </div>
        )}

        {/* Pause overlay when playing + hovered */}
        {playing && showControls && (
          <div style={{
            position: 'absolute', inset: 0, zIndex: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(0,0,0,0.35)',
            transition: 'opacity 0.2s',
          }}>
            {/* Pause icon */}
            <div style={{
              width: 52, height: 52,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '5px',
            }}>
              <div style={{ width: 4, height: 18, background: 'white', borderRadius: 2 }} />
              <div style={{ width: 4, height: 18, background: 'white', borderRadius: 2 }} />
            </div>
          </div>
        )}

        {/* Accent line at bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(to right, ${project.color}, transparent)`,
          zIndex: 5,
        }} />
      </div>

      {/* ── INFO PANEL ── */}
      <div style={{ padding: '1.5rem 1.75rem 1.75rem' }}>
        <div style={{
          fontFamily: "'Space Mono', monospace", fontSize: '0.62rem',
          color: project.color, letterSpacing: '0.18em',
          textTransform: 'uppercase', marginBottom: '0.6rem',
          opacity: 0.8,
        }}>
          {project.category}
        </div>

        <h3 style={{
          fontSize: '1.25rem', fontWeight: 800,
          marginBottom: '0.75rem', lineHeight: 1.25,
          fontFamily: "'Syne', sans-serif",
          color: '#e8f4f0',
        }}>
          {project.title}
        </h3>

        <p style={{
          color: '#7a9aaa', fontSize: '0.85rem',
          lineHeight: 1.8, marginBottom: '1.25rem',
          fontFamily: "'Syne', sans-serif",
        }}>
          {project.desc}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
          {project.stack.map(tag => (
            <span key={tag} style={{
              fontFamily: "'Space Mono', monospace", fontSize: '0.65rem',
              color: project.color, letterSpacing: '0.04em',
              background: `${project.color}10`,
              border: `0.5px solid ${project.color}30`,
              padding: '0.22rem 0.55rem',
            }}>
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Space Mono', monospace", fontSize: '0.68rem',
            color: '#7a9aaa', letterSpacing: '0.08em',
            textTransform: 'uppercase', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = project.color)}
          onMouseLeave={e => (e.currentTarget.style.color = '#7a9aaa')}
        >
          View on GitHub →
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="projects" style={{ padding: '6rem 4rem', maxWidth: 1200, margin: '0 auto' }}>
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
          fontFamily: "'Space Mono', monospace", fontSize: '0.7rem',
          color: '#00ffb2', letterSpacing: '0.25em',
          textTransform: 'uppercase', marginBottom: '0.75rem',
          display: 'flex', alignItems: 'center', gap: '0.75rem',
        }}>
          <span style={{ color: '#3a5060' }}>//</span> 03 &nbsp; Projects
        </div>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800,
          letterSpacing: '-0.02em', marginBottom: '0.6rem',
          fontFamily: "'Syne', sans-serif", color: '#e8f4f0',
        }}>
          Selected Work<span style={{ color: '#00ffb2' }}>.</span>
        </h2>
      </div>

      {/* 2-column grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1.75rem',
      }}>
        {projects.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}