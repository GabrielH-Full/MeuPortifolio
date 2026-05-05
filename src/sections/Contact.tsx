import { useReveal } from '../hooks/useRevea'
import { useState, useEffect } from 'react'

const DISPLAY_FONT = "'Instrument Serif', serif"

const socials = [
  { label: 'GitHub', url: 'https://github.com/GabrielH-Full', desc: 'Veja meu código' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/gabriel-henrique-da-silva-barboza-13931225b/', desc: 'Conecte-se comigo' },
  { label: 'Email', url: 'mailto:gabrielhb2020@gmail.com', desc: 'Manda uma mensagem' },
]

export default function Contact() {
  const { ref: titleRef, visible: titleVisible } = useReveal()
  const { ref: bodyRef, visible: bodyVisible } = useReveal()
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText('gabrielhb2020@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={{
      background: `
        radial-gradient(circle at top right, rgba(52, 211, 153, 0.06), transparent 45%),
        radial-gradient(circle at bottom left, rgba(99, 179, 237, 0.05), transparent 40%),
        #131313
      `,
    }}>
      <section id="contatos" style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: isMobile ? '5rem 1.25rem' : '8rem 2rem',
      }}>

        {/* Título */}
        <div ref={titleRef} style={{
          marginBottom: isMobile ? '3rem' : '5rem',
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.3)',
            fontFamily: 'var(--font-body)',
            marginBottom: '0.75rem',
            opacity: titleVisible ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}>
            CONTATO
          </p>
          <h2 style={{
            fontFamily: DISPLAY_FONT,
            fontWeight: 'normal',
            fontSize: isMobile ? '2.4rem' : 'clamp(2.5rem, 6vw, 5rem)',
            color: '#fff',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            margin: 0,
          }}>
            Vamos construir
            <br />
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.35)' }}>
              algo juntos.
            </em>
          </h2>
        </div>

        {/* Corpo */}
        <div ref={bodyRef} style={{
          display: 'grid',
          // Mobile: coluna única; Desktop: duas colunas
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '2.5rem' : '4rem',
          alignItems: 'center',
        }}>

          {/* Lado esquerdo */}
          <div style={{
            opacity: bodyVisible ? 1 : 0,
            transform: bodyVisible ? 'translateX(0)' : isMobile ? 'translateY(20px)' : 'translateX(-30px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          }}>
            <p style={{
              fontSize: isMobile ? '0.9rem' : '1rem',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.8,
              fontFamily: 'var(--font-body)',
              marginBottom: '2rem',
              maxWidth: '32rem',
            }}>
              Aberto a oportunidades de emprego, projetos freelance e
              colaborações. Se tem uma ideia interessante,
              manda uma mensagem.
            </p>

            {/* Email com copy */}
            <div
              onClick={copyEmail}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: isMobile ? '0.85rem 1.1rem' : '1rem 1.5rem',
                borderRadius: '0.75rem',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                cursor: 'pointer',
                transition: 'all 0.2s',
                marginBottom: '1.25rem',
                // Em mobile, ocupa largura total para não vazar
                width: isMobile ? '100%' : 'auto',
                boxSizing: 'border-box',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              }}
            >
              <span style={{
                fontSize: isMobile ? '0.78rem' : '0.9rem',
                fontFamily: 'var(--font-body)',
                color: 'rgba(255,255,255,0.7)',
                // Evita o email vazar em telas pequenas
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                flex: 1,
              }}>
                gabrielhb2020@gmail.com
              </span>
              <span style={{
                fontSize: '0.7rem',
                fontFamily: 'var(--font-body)',
                color: copied ? 'rgba(52, 211, 153, 0.8)' : 'rgba(255,255,255,0.25)',
                transition: 'color 0.2s',
                border: '1px solid',
                borderColor: copied ? 'rgba(52, 211, 153, 0.3)' : 'rgba(255,255,255,0.08)',
                padding: '0.15rem 0.5rem',
                borderRadius: '0.25rem',
                flexShrink: 0,
              }}>
                {copied ? 'copiado!' : 'copiar'}
              </span>
            </div>

            {/* Botão download currículo */}
            <div>
              <a
                href="/CurrículoAtt1.pdf"
                download="Gabriel_Henrique_Currículo.pdf"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: isMobile ? '0.75rem 1.5rem' : '0.85rem 1.75rem',
                  borderRadius: '9999px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.7)',
                  fontFamily: 'var(--font-body)',
                  fontSize: isMobile ? '0.82rem' : '0.88rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.transform = 'scale(1.03)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                <span>↓</span>
                Download Currículo
              </a>
            </div>
          </div>

          {/* Lado direito — redes sociais */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            opacity: bodyVisible ? 1 : 0,
            transform: bodyVisible ? 'translateX(0)' : isMobile ? 'translateY(20px)' : 'translateX(30px)',
            transition: 'opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s',
          }}>
            {socials.map((social, i) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredCard(social.label)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: isMobile ? '1rem 1.1rem' : '1.25rem 1.5rem',
                  borderRadius: '0.875rem',
                  background: hoveredCard === social.label ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${hoveredCard === social.label ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)'}`,
                  textDecoration: 'none',
                  transition: 'all 0.25s',
                  transform: hoveredCard === social.label ? 'translateX(6px)' : 'translateX(0)',
                  opacity: bodyVisible ? 1 : 0,
                  transitionDelay: `${0.4 + i * 0.08}s`,
                }}
              >
                <div>
                  <div style={{
                    fontSize: isMobile ? '0.9rem' : '0.95rem',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    color: hoveredCard === social.label ? '#fff' : 'rgba(255,255,255,0.7)',
                    transition: 'color 0.2s',
                    marginBottom: '0.2rem',
                  }}>
                    {social.label}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-body)',
                    color: 'rgba(255,255,255,0.3)',
                  }}>
                    {social.desc}
                  </div>
                </div>
                <span style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255,255,255,0.2)',
                  transition: 'color 0.2s, transform 0.2s',
                  transform: hoveredCard === social.label ? 'translateX(4px)' : 'translateX(0)',
                }}>
                  →
                </span>
              </a>
            ))}

            {/* Disponibilidade */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '1rem 1.5rem',
              marginTop: '0.25rem',
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'rgba(52, 211, 153, 0.9)',
                boxShadow: '0 0 8px rgba(52, 211, 153, 0.6)',
                animation: 'pulse-green 2s ease-in-out infinite',
                flexShrink: 0,
              }} />
              <span style={{
                fontSize: '0.8rem',
                fontFamily: 'var(--font-body)',
                color: 'rgba(255,255,255,0.4)',
              }}>
                Disponível para novas oportunidades
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
