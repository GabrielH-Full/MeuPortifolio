import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop
      setVisible(scrollY > 300)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button
      className="liquid-glass"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={e => {
        e.currentTarget.style.transform = visible
          ? 'scale(1) translateY(0)'
          : 'scale(0.8) translateY(10px)'
      }}
      style={{
        position: 'fixed',
        bottom: 'clamp(1rem, 4vw, 1.5rem)',
        right: 'clamp(1rem, 4vw, 1.5rem)',
        borderRadius: '9999px',
        width: 'clamp(2.25rem, 6vw, 2.75rem)',
        height: 'clamp(2.25rem, 6vw, 2.75rem)',
        fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
        color: 'hsl(var(--foreground))',
        fontFamily: 'var(--font-body)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(10px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
      }}
    >
      ↑
    </button>
  )
}
