import { useState, useEffect } from 'react'

const DISPLAY_FONT = "'Instrument Serif', serif"

const navLinks = [
  { label: 'Home', id: 'home', active: true },
  { label: 'Sobre', id: 'Sobre' },
  { label: 'Projetos', id: 'projetos' },
  { label: 'Experiencias', id: 'experiencias' },
  { label: 'Contatos', id: 'contatos' },
]

const scrollToSection = (id: string) => {
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleLink = (id: string) => {
    scrollToSection(id)
    setMenuOpen(false)
  }

  return (
    <nav style={{ width: '100%', position: 'relative', zIndex: 100 }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.5rem 2rem',
        maxWidth: '80rem',
        margin: '0 auto',
      }}>
        {/* Logo */}
        <span style={{
          fontFamily: DISPLAY_FONT,
          fontSize: '1.875rem',
          letterSpacing: '-0.025em',
          color: 'hsl(var(--foreground))',
          fontWeight: 'normal',
        }}>
          GabrielH
        </span>

        {/* Links — só no desktop */}
        {!isMobile && (
          <ul style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}>
            {navLinks.map(({ label, id, active }) => (
              <li key={id}>
                <a
                  onClick={(e) => { e.preventDefault(); scrollToSection(id) }}
                  href="#"
                  style={{
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    color: active ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
                    transition: 'color 0.2s',
                    fontFamily: 'var(--font-body)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'hsl(var(--foreground))')}
                  onMouseLeave={e => (e.currentTarget.style.color = active ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))')}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Hamburguer — só no mobile */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
            aria-label="Menu"
          >
            <span style={{
              display: 'block', width: '22px', height: '2px',
              background: 'hsl(var(--foreground))',
              borderRadius: '2px',
              transition: 'transform 0.3s, opacity 0.3s',
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '2px',
              background: 'hsl(var(--foreground))',
              borderRadius: '2px',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 0.3s',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '2px',
              background: 'hsl(var(--foreground))',
              borderRadius: '2px',
              transition: 'transform 0.3s, opacity 0.3s',
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }} />
          </button>
        )}
      </div>

      {/* Menu mobile dropdown */}
      {isMobile && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(19,19,19,0.97)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          overflow: 'hidden',
          maxHeight: menuOpen ? '400px' : '0px',
          transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
        }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: '1rem 2rem 1.5rem' }}>
            {navLinks.map(({ label, id, active }, i) => (
              <li key={id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '0.9rem 0' }}>
                <a
                  onClick={(e) => { e.preventDefault(); handleLink(id) }}
                  href="#"
                  style={{
                    fontSize: '1.1rem',
                    textDecoration: 'none',
                    color: active ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
                    fontFamily: 'var(--font-body)',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? 'translateX(0)' : 'translateX(-10px)',
                    transition: `opacity 0.3s ease ${i * 0.05}s, transform 0.3s ease ${i * 0.05}s`,
                  }}
                >
                  {label}
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.2)' }}>→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
