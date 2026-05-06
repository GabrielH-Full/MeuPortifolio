import { useReveal } from '../hooks/useRevea'
import { useState, useEffect } from 'react'

const DISPLAY_FONT = "'Instrument Serif', serif"


type Project = {
  title: string
  description: string
  longDescription: string
  tag: string
  techs: string[]
  link: string
  github: string
  color: string
  accent: string
  number: string
  image?: string
}

const projects: Project[]= [
  {
    title: 'Projeto 1',
    description: 'Automação Financeira com IA Integrada ao WhatsApp para Gestão de Pagamentos.',
    longDescription: `Desenvolvimento de um fluxo de automação voltado para parte financeira, integrando ferramentas de IA com planilhas para otimizar 
    o controle de pagamentos. A solução realiza a leitura e análise automática de comprovantes, extraindo informações relevantes e atualizando os dados 
    diretamente em uma planilha, garantindo maior precisão e agilidade no processo.

    Todo o fluxo é operado via WhatsApp, permitindo o envio de comprovantes e o acompanhamento de pagamentos pendentes sem a necessidade de acessar manualmente 
    o Excel. A automação também contribui para a organização financeira, reduzindo erros operacionais, eliminando tarefas repetitivas e oferecendo maior 
    visibilidade sobre o status dos pagamentos.`,
    tag: 'Automação',
    techs: ['Python', 'N8N', 'Docker', 'Excel', 'API WhatsApp'],
    link: '#',
    github: '#',
    color: 'rgba(99, 179, 237, 0.08)',
    accent: 'rgba(99, 179, 237, 0.6)',
    number: '01',
    image: '/MeuPortifolio/projeto1.png',
  },
  {
    title: 'Projeto 2',
    description: 'Sistema Inteligente de Gestão e Automação de Uso de Máquinas. Redução de 70% no tempo de tarefas.',
    longDescription: `Projeto focado na otimização da gestão e operação de máquinas, unindo funcionalidades de agenda com automações inteligentes. 
    A aplicação permite o planejamento e controle do uso das máquinas, organizando horários, registros de utilização e necessidades de manutenção 
    de forma centralizada. O frontend foi construído com React e a comunicação é feita via WebSocket para atualizações em tempo real.`,
    tag: 'Automação Empresarial',
    techs: ['Webhook Microsoft Teams', 'Python', 'API Google Calendar', 'Interface web'],
    link: '#',
    github: '#',
    color: 'rgba(241, 190, 108, 0.08)',
    accent: 'rgba(241, 190, 108, 0.6)',
    number: '02',
    image: '/MeuPortifolio/projeto2.png',
  },
  {
    title: 'Projeto 3',
    description: 'CentrauPet. Plataforma de adoção de animais conectando ONGs e adotantes com perfis detalhados e gestão de pedidos.',
    longDescription: `Este projeto nasceu para centralizar e facilitar o processo de adoção de animais, conectando quem quer dar um lar a quem precisa de um. 
    A plataforma permite que tanto ONGs quanto pessoas físicas cadastrem perfis detalhados de animais, gerenciando pedidos de adoção de forma organizada.`,
    tag: 'Web',
    techs: ['React', 'TypeScript', 'PostgreSQL', 'Styled Components', 'Docker'],
    link: 'https://centraupet.com.br',
    github: '#',
    color: 'rgba(167, 139, 250, 0.08)',
    accent: 'rgba(167, 139, 250, 0.6)',
    number: '03',
    image: '/MeuPortifolio/projeto3.png',
  },
]

// ── Modal ──────────────────────────────────────────
function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(0,0,0,0.8)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        animation: 'modal-bg-in 0.25s ease both',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#1a1a1a',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '1.25rem',
          width: '100%',
          maxWidth: '640px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          animation: 'modal-in 0.35s cubic-bezier(0.34,1.56,0.64,1) both',
        }}
      >
        {/* Imagem ou placeholder */}
        {project.image ? (
          <div style={{
            width: '100%',
            aspectRatio: '16/9',
            overflow: 'hidden',
            borderRadius: '1.25rem 1.25rem 0 0',
          }}>
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ) : (
          <div style={{
            width: '100%',
            aspectRatio: '16/9',
            borderRadius: '1.25rem 1.25rem 0 0',
            background: `linear-gradient(135deg, ${project.color} 0%, rgba(10,10,10,1) 100%)`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}>
            <span style={{ fontSize: '2.5rem', opacity: 0.2 }}>🖼</span>
            <span style={{
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              fontFamily: 'var(--font-body)',
              color: 'rgba(255,255,255,0.18)',
            }}>
              <link rel="stylesheet" href="/public/MeuPortifolio/projeto1.png" type="image/png" />
            </span>
            <code style={{
              fontSize: '0.6rem',
              fontFamily: 'monospace',
              color: 'rgba(255,255,255,0.12)',
              marginTop: '0.15rem',
            }}>
              image: '/MeuPortifolio/projeto1.png'
            </code>
          </div>
        )}

        {/* Conteúdo */}
        <div style={{ padding: 'clamp(1.25rem, 4vw, 2rem)' }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1rem',
            marginBottom: '1.25rem',
          }}>
            <div>
              <span style={{
                fontSize: '0.62rem',
                letterSpacing: '0.18em',
                fontFamily: 'var(--font-body)',
                color: project.accent,
                display: 'block',
                marginBottom: '0.35rem',
              }}>
                {project.tag.toUpperCase()} · {project.number}
              </span>
              <h2 style={{
                fontFamily: DISPLAY_FONT,
                fontWeight: 'normal',
                fontSize: 'clamp(1.4rem, 4vw, 2rem)',
                color: '#fff',
                lineHeight: 1.1,
              }}>
                {project.title}
              </h2>
            </div>

            {/* Fechar */}
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50%',
                width: '2rem',
                height: '2rem',
                color: 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
              }}
            >
              ✕
            </button>
          </div>

          {/* Divisor */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', marginBottom: '1.25rem' }} />

          {/* Descrição */}
          <div style={{ marginBottom: '1.5rem' }}>
            {project.longDescription.trim().split('\n\n').map((para, i) => (
              <p key={i} style={{
                fontSize: '0.88rem',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.8,
                fontFamily: 'var(--font-body)',
                marginBottom: '0.9rem',
              }}>
                {para.trim()}
              </p>
            ))}
          </div>

          {/* Techs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.75rem' }}>
            {project.techs.map(tech => (
              <span key={tech} style={{
                fontSize: '0.72rem',
                fontFamily: 'var(--font-body)',
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
                background: project.accent.replace('0.6', '0.1'),
                border: `1px solid ${project.accent.replace('0.6', '0.25')}`,
                color: project.accent,
              }}>
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                minWidth: '130px',
                textAlign: 'center',
                padding: '0.75rem 1.25rem',
                borderRadius: '9999px',
                background: project.accent.replace('0.6', '0.12'),
                border: `1px solid ${project.accent.replace('0.6', '0.3')}`,
                color: project.accent,
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = project.accent.replace('0.6', '0.22') }}
              onMouseLeave={e => { e.currentTarget.style.background = project.accent.replace('0.6', '0.12') }}
            >
              Ver projeto →
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                minWidth: '130px',
                textAlign: 'center',
                padding: '0.75rem 1.25rem',
                borderRadius: '9999px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.6)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
              }}
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Brilho topo */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${project.accent.replace('0.6', '0.5')}, transparent)`,
          borderRadius: '1.25rem',
          pointerEvents: 'none',
        }} />
      </div>
    </div>
  )
}

// ── Card ──────────────────────────────────────────
function ProjectCard({ project, visible, delay, onClick }: {
  project: Project; visible: boolean; delay: number; onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered ? 'translateY(-8px) scale(1.01)' : 'translateY(0) scale(1)'
          : 'translateY(40px)',
        transition: `opacity 0.6s ease ${delay}s, transform ${hovered ? '0.3s ease' : `0.6s ease ${delay}s`}`,
        background: hovered ? project.color : 'rgba(255,255,255,0.02)',
        border: `1px solid ${hovered ? project.accent.replace('0.6', '0.25') : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '1.25rem',
        padding: '2rem',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Número decorativo */}
      <span style={{
        position: 'absolute',
        top: '1rem', right: '1.5rem',
        fontSize: '5rem',
        fontWeight: 900,
        fontFamily: 'var(--font-body)',
        color: hovered ? project.accent.replace('0.6', '0.08') : 'rgba(255,255,255,0.03)',
        lineHeight: 1,
        transition: 'color 0.3s, transform 0.3s',
        transform: hovered ? 'scale(1.1)' : 'scale(1)',
        userSelect: 'none',
        pointerEvents: 'none',
      }}>
        {project.number}
      </span>

      <span style={{
        fontSize: '0.65rem',
        letterSpacing: '0.15em',
        fontFamily: 'var(--font-body)',
        color: hovered ? project.accent : 'rgba(255,255,255,0.3)',
        transition: 'color 0.3s',
        display: 'block',
        marginBottom: '0.75rem',
      }}>
        {project.tag.toUpperCase()}
      </span>

      <h3 style={{
        fontFamily: DISPLAY_FONT,
        fontWeight: 'normal',
        fontSize: '1.6rem',
        color: hovered ? '#fff' : 'rgba(255,255,255,0.85)',
        marginBottom: '0.75rem',
        transition: 'color 0.2s',
        lineHeight: 1.2,
      }}>
        {project.title}
      </h3>

      <p style={{
        fontSize: '0.85rem',
        color: 'rgba(255,255,255,0.45)',
        lineHeight: 1.7,
        fontFamily: 'var(--font-body)',
        marginBottom: '1.5rem',
      }}>
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
        {project.techs.slice(0, 3).map(tech => (
          <span key={tech} style={{
            fontSize: '0.7rem',
            fontFamily: 'var(--font-body)',
            padding: '0.2rem 0.65rem',
            borderRadius: '9999px',
            background: hovered ? project.accent.replace('0.6', '0.12') : 'rgba(255,255,255,0.05)',
            border: `1px solid ${hovered ? project.accent.replace('0.6', '0.25') : 'rgba(255,255,255,0.08)'}`,
            color: hovered ? project.accent : 'rgba(255,255,255,0.45)',
            transition: 'all 0.3s',
          }}>
            {tech}
          </span>
        ))}
        {project.techs.length > 3 && (
          <span style={{
            fontSize: '0.7rem',
            fontFamily: 'var(--font-body)',
            padding: '0.2rem 0.65rem',
            borderRadius: '9999px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
            color: 'rgba(255,255,255,0.3)',
          }}>
            +{project.techs.length - 3}
          </span>
        )}
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        opacity: hovered ? 1 : 0,
        transform: hovered ? 'translateY(0)' : 'translateY(6px)',
        transition: 'opacity 0.25s, transform 0.25s',
        fontSize: '0.78rem',
        fontFamily: 'var(--font-body)',
        color: project.accent,
      }}>
        Ver detalhes →
      </div>
    </div>
  )
}

// ── Main ──────────────────────────────────────────
export default function Projects() {
  const { ref: titleRef, visible: titleVisible } = useReveal()
  const { ref: gridRef, visible: gridVisible } = useReveal()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <div style={{
        background: `
          radial-gradient(circle at top left, rgba(167, 139, 250, 0.06), transparent 45%),
          radial-gradient(circle at bottom right, rgba(99, 179, 237, 0.05), transparent 40%),
          #131313
        `,
      }}>
        <section id="projetos" style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '8rem 2rem',
        }}>
          {/* Título */}
          <div ref={titleRef} style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <p style={{
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.3)',
              fontFamily: 'var(--font-body)',
              marginBottom: '0.75rem',
              opacity: titleVisible ? 1 : 0,
              transition: 'opacity 0.6s ease',
            }}>
              PORTFÓLIO
            </p>
            <h2 style={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 'normal',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#fff',
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
            }}>
              Projetos Selecionados
            </h2>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {projects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                visible={gridVisible}
                delay={i * 0.1}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </section>
      </div>

      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}
