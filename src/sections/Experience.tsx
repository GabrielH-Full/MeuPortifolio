import { useReveal } from '../hooks/useRevea.ts'
import { useState } from 'react'

const DISPLAY_FONT = "'Instrument Serif', serif"

const languages = [
  { name: 'TypeScript', level: 65, color: '#3178c6' },
  { name: 'JavaScript', level: 70, color: '#f7df1e' },
  { name: 'Java', level: 80, color: '#f89820' },
  { name: 'Python', level: 75, color: '#3776ab' },
  { name: 'SQL', level: 100, color: '#336791' },
  { name: 'HTML & CSS', level: 95, color: '#e34f26' },
  { name: 'N8N', level: 95, color: '#D39826' },
]

const experiences = [
  {
    role: 'Engenheiro de Software',
    company: 'ECOA PUC-Rio - Petrobras',
    period: '2026 — Presente',
    type: 'Estágio',
    description: 'Desenvolvimento de aplicações web, Automações de processos internos e integração de sistemas. Participação em projetos de inovação tecnológica para otimização de operações.',
    techs: ['React - TypeScript', 'N8N', 'Python'],
  },
  {
    role: 'Educador de Informática',
    company: 'SENAI',
    period: '2025 — 2025',
    type: 'PJ',
    description: 'Ministração de aulas práticas e teóricas sobre informática, desenvolvimento de material didático e suporte aos alunos em projetos de tecnologia.',
    techs: ['Educação', 'Suporte Técnico', 'Informática Básica'],
  },
  {
    role: 'Auxiliar Administrativo',
    company: 'Omega Bateria',
    period: '2024 — 2025',
    type: 'CLT',
    description: 'Suporte no sistema interno para gestão de estoque e vendas. Análise de dados e geração de relatórios para otimização de processos comerciais.',
    techs: ['SQL', 'Excel'],
  },
]

function SkillBar({ name, level, color, visible, delay }: {
  name: string; level: number; color: string; visible: boolean; delay: number
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-24px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
        <span style={{
          fontSize: '0.8rem',
          fontFamily: 'var(--font-body)',
          color: hovered ? '#fff' : 'rgba(255,255,255,0.7)',
          transition: 'color 0.2s',
          fontWeight: hovered ? 600 : 400,
        }}>
          {name}
        </span>
        <span style={{
          fontSize: '0.75rem',
          fontFamily: 'var(--font-body)',
          color: color,
          opacity: visible ? 1 : 0,
          transition: `opacity 0.4s ease ${delay + 0.5}s`,
        }}>
          {level}%
        </span>
      </div>
      <div style={{
        height: '4px',
        background: 'rgba(255,255,255,0.06)',
        borderRadius: '9999px',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: visible ? `${level}%` : '0%',
          background: `linear-gradient(90deg, ${color}88, ${color})`,
          borderRadius: '9999px',
          transition: `width 1s cubic-bezier(0.4,0,0.2,1) ${delay + 0.2}s`,
          boxShadow: hovered ? `0 0 8px ${color}88` : 'none',
        }} />
      </div>
    </div>
  )
}

function ExpCard({ exp, visible, delay }: {
  exp: typeof experiences[0]; visible: boolean; delay: number
}) {
  const [hovered, setHovered] = useState(false)
  const typeColor: Record<string, string> = {
    CLT: 'rgba(52, 211, 153, 0.15)',
    Freelance: 'rgba(99, 179, 237, 0.15)',
    Estágio: 'rgba(167, 139, 250, 0.15)',
  }
  const typeBorder: Record<string, string> = {
    CLT: 'rgba(52, 211, 153, 0.3)',
    Freelance: 'rgba(99, 179, 237, 0.3)',
    Estágio: 'rgba(167, 139, 250, 0.3)',
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered ? 'translateX(6px)' : 'translateX(0)'
          : 'translateY(30px)',
        transition: `opacity 0.6s ease ${delay}s, transform ${hovered ? '0.2s' : `0.6s ease ${delay}s`}`,
        background: hovered ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)'}`,
        borderRadius: '1rem',
        padding: '2rem',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Linha lateral colorida */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: '1.5rem',
        bottom: '1.5rem',
        width: '3px',
        borderRadius: '9999px',
        background: typeBorder[exp.type] ?? 'rgba(255,255,255,0.1)',
        transition: 'opacity 0.2s',
        opacity: hovered ? 1 : 0.4,
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
        <div>
          <h3 style={{
            fontFamily: DISPLAY_FONT,
            fontWeight: 'normal',
            fontSize: '1.3rem',
            color: '#fff',
            marginBottom: '0.25rem',
          }}>
            {exp.role}
          </h3>
          <span style={{
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.45)',
            fontFamily: 'var(--font-body)',
          }}>
            {exp.company}
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
          <span style={{
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.35)',
            fontFamily: 'var(--font-body)',
            letterSpacing: '0.05em',
          }}>
            {exp.period}
          </span>
          <span style={{
            fontSize: '0.65rem',
            fontFamily: 'var(--font-body)',
            letterSpacing: '0.1em',
            padding: '0.2rem 0.7rem',
            borderRadius: '9999px',
            background: typeColor[exp.type] ?? 'rgba(255,255,255,0.05)',
            border: `1px solid ${typeBorder[exp.type] ?? 'rgba(255,255,255,0.1)'}`,
            color: 'rgba(255,255,255,0.7)',
          }}>
            {exp.type}
          </span>
        </div>
      </div>

      <p style={{
        fontSize: '0.88rem',
        color: 'rgba(255,255,255,0.5)',
        lineHeight: 1.7,
        fontFamily: 'var(--font-body)',
        marginBottom: '1.25rem',
      }}>
        {exp.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {exp.techs.map(tech => (
          <span key={tech} style={{
            fontSize: '0.7rem',
            fontFamily: 'var(--font-body)',
            padding: '0.2rem 0.6rem',
            borderRadius: '9999px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
            color: 'rgba(255,255,255,0.5)',
          }}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  const { ref: titleRef, visible: titleVisible } = useReveal()
  const { ref: skillsRef, visible: skillsVisible } = useReveal()
  const { ref: expRef, visible: expVisible } = useReveal()

  return (
    <div style={{
      background: `
        radial-gradient(circle at top right, rgba(241, 190, 108, 0.07), transparent 50%),
        radial-gradient(circle at bottom left, rgba(167, 139, 250, 0.05), transparent 40%),
        #131313
      `,
    }}>
      <section id="experiencias" style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '8rem 2rem',
      }}>

        {/* Título */}
        <div ref={titleRef} style={{ marginBottom: '5rem', textAlign: 'center' }}>
          <p style={{
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.3)',
            fontFamily: 'var(--font-body)',
            marginBottom: '0.75rem',
            opacity: titleVisible ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}>
            TRAJETÓRIA
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
            Experiência & Habilidades
          </h2>
        </div>

        {/* Grid 2 colunas */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: '4rem',
          alignItems: 'start',
        }}>

          {/* Coluna esquerda — linguagens */}
          <div ref={skillsRef}>
            <h3 style={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 'normal',
              fontSize: '1.4rem',
              color: '#fff',
              marginBottom: '2rem',
              opacity: skillsVisible ? 1 : 0,
              transition: 'opacity 0.5s ease',
            }}>
              Linguagens & Tecnologias
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {languages.map((lang, i) => (
                <SkillBar
                  key={lang.name}
                  {...lang}
                  visible={skillsVisible}
                  delay={i * 0.08}
                />
              ))}
            </div>
          </div>

          {/* Coluna direita — empregos */}
          <div ref={expRef} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 'normal',
              fontSize: '1.4rem',
              color: '#fff',
              marginBottom: '1rem',
              opacity: expVisible ? 1 : 0,
              transition: 'opacity 0.5s ease',
            }}>
              Empregos
            </h3>
            {experiences.map((exp, i) => (
              <ExpCard
                key={i}
                exp={exp}
                visible={expVisible}
                delay={i * 0.12}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}