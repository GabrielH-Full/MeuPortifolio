import { useEffect, useRef, useState } from 'react'

const tags = [
  'Desenvolvimento Web',
  'React & TypeScript',
  'Desenvolvimento Backend',
  'Java',
  'POO',
  'Python',
  'PostgreSQL',
  'N8N - Automaçôes',
  'Docker',
]

const stats = [
  { label: 'TIPO', value: 'Dev' },
  { label: 'XP', value: '2 anos' },
  { label: 'BASE', value: 'RJ | SP - BR' },
]

export default function About() {
  const [visible, setVisible] = useState(false)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Detecta mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Intersection observer para animação de entrada
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Mouse move 3D tilt (apenas desktop)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8
    setRotate({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <div id='Sobre' style={{
      background: `
        radial-gradient(circle at top left, rgba(99, 179, 237, 0.07), transparent 40%),
        #131313
      `,
      padding: isMobile ? '4rem 1rem' : '8rem 2rem',
      perspective: '1200px',
    }}>
      <div ref={sectionRef} style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{
            background: '#1a1a1a',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '1.25rem',
            overflow: 'hidden',
            display: 'grid',
            // Mobile: coluna única; Desktop: duas colunas
            gridTemplateColumns: isMobile ? '1fr' : '420px 1fr',
            opacity: visible ? 1 : 0,
            transform: visible
              ? `translateY(0) scale(1) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
              : 'translateY(40px) scale(0.97)',
            transition: isHovered
              ? 'opacity 0.8s ease, box-shadow 0.3s ease, transform 0.1s ease'
              : 'opacity 0.8s ease, transform 0.6s ease, box-shadow 0.6s ease',
            position: 'relative',
            transformStyle: 'preserve-3d',
            boxShadow: isHovered
              ? '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.12)'
              : '0 10px 40px rgba(0,0,0,0.3)',
            cursor: 'default',
            willChange: 'transform',
          }}
        >
          {/* ── Foto ── */}
          <div style={{
            position: 'relative',
            overflow: 'hidden',
            background: '#0d0d0d',
            // Mobile: altura fixa no topo; Desktop: altura automática pela grid
            height: isMobile ? '280px' : 'auto',
          }}>
            <img
              src="/MeuPortifolio/perfil.jpeg"
              alt="Foto"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: isMobile ? 'center 20%' : 'top center',
                filter: 'grayscale(100%)',
                display: 'block',
                zIndex: 1,
                position: 'relative',
              }}
              onError={e => { e.currentTarget.style.display = 'none' }}
            />
            {/* N°001 */}
            <span style={{
              position: 'absolute',
              bottom: '1.25rem',
              left: '1.5rem',
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.25)',
              fontFamily: 'var(--font-body)',
              letterSpacing: '0.1em',
              zIndex: 3,
            }}>
              N°001
            </span>

            {/* gradiente na base da foto */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '80px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
              zIndex: 2,
            }} />
          </div>

          {/* ── Conteúdo ── */}
          <div style={{
            padding: isMobile ? '1.75rem 1.25rem 1.5rem' : '2.5rem 2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}>

            {/* Nome + badge */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: isMobile ? 'wrap' : 'nowrap',
            }}>
              <h2 style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 800,
                fontSize: isMobile ? '2rem' : 'clamp(2rem, 3.5vw, 2.8rem)',
                lineHeight: 1.05,
                color: 'hsl(var(--foreground))',
                letterSpacing: '-0.02em',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
                margin: 0,
              }}>
                Gabriel<br />Henrique
              </h2>
              <span style={{
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                color: 'rgba(255,255,255,0.5)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '9999px',
                padding: '0.4rem 0.9rem',
                whiteSpace: 'nowrap',
                fontFamily: 'var(--font-body)',
                marginTop: '0.4rem',
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.6s ease 0.3s',
              }}>
                DEV FULLSTACK
              </span>
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s',
            }}>
              {stats.map((stat, i) => (
                <div key={stat.label} style={{
                  padding: isMobile ? '0.75rem 0' : '1rem 0',
                  textAlign: 'center',
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                }}>
                  <div style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    color: 'rgba(255,255,255,0.35)',
                    fontFamily: 'var(--font-body)',
                    marginBottom: '0.4rem',
                  }}>
                    {stat.label}
                  </div>
                  <div style={{
                    fontSize: isMobile ? '0.875rem' : '1rem',
                    fontWeight: 700,
                    color: 'hsl(var(--foreground))',
                    fontFamily: 'var(--font-body)',
                  }}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Bio */}
            <p style={{
              fontSize: isMobile ? '0.875rem' : '0.95rem',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.75,
              fontFamily: 'var(--font-body)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s',
              margin: 0,
            }}>
              Cursando Engenharia da Computação. Sou desenvolvedor fullstack, 
              com experiência na construção de aplicações completas do banco de dados à interface, 
              atuando tanto no backend quanto no frontend. Tenho vivência com modelagem de dados, 
              criação de APIs, integração de sistemas e desenvolvimento de interfaces responsivas e funcionais.
              Também possuo experiência com automações no meio empresarial, 
              desenvolvendo soluções que otimizam fluxos de trabalho, reduzem tarefas manuais e aumentam a 
              eficiência operacional dos processos. Já atuei na análise de demandas, 
              identificação de gargalos e implementação de melhorias utilizando tecnologia.
            </p>

            {/* Tags */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.4rem',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease 0.55s, transform 0.6s ease 0.55s',
            }}>
              {tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: isMobile ? '0.75rem' : '0.8rem',
                    color: 'rgba(255,255,255,0.6)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '9999px',
                    padding: isMobile ? '0.4rem 0.75rem' : '0.50rem 0.85rem',
                    fontFamily: 'var(--font-body)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'border-color 0.2s, color 0.2s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.9)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                  }}
                >
                  <span style={{ fontSize: '0.55rem' }}>★</span>
                  {tag}
                </span>
              ))}
            </div>

            {/* Rodapé */}
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: 'auto',
              paddingTop: '0.5rem',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.6s ease 0.65s',
            }}>
              <span style={{
                fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.2)',
                fontFamily: 'var(--font-body)',
                letterSpacing: '0.1em',
              }}>
                2026 — BR
              </span>
            </div>
          </div>

          {/* Linha brilho topo */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
            pointerEvents: 'none',
          }} />
        </div>
      </div>
    </div>
  )
}
