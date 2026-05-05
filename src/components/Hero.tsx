const DISPLAY_FONT = "'Instrument Serif', serif"

export default function Hero() {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: 'clamp(3rem, 8vw, 5rem) 1.5rem clamp(4rem, 10vw, 8rem)',
      flex: 1,
      justifyContent: 'center',
    }}>
      {/* H1 */}
      <h1
        className="animate-fade-rise"
        style={{
          fontFamily: DISPLAY_FONT,
          fontWeight: 'normal',
          fontSize: 'clamp(2.2rem, 8vw, 6rem)',
          lineHeight: 0.95,
          letterSpacing: '-2.46px',
          color: 'hsl(var(--foreground))',
          maxWidth: '80rem',
          margin: '0 auto',
        }}
      >
        Bem{' '}
        <em style={{ fontStyle: 'normal', color: 'hsl(var(--muted-foreground))' }}>
          vindo
        </em>{' '}
        ao{' '}
        <em style={{ fontStyle: 'normal', color: 'hsl(var(--muted-foreground))' }}>
          meu Portfólio.
        </em>
      </h1>

      {/* Subtext */}
      <p
        className="animate-fade-rise-delay"
        style={{
          fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
          color: 'hsl(var(--muted-foreground))',
          maxWidth: '42rem',
          marginTop: '2rem',
          lineHeight: 1.75,
          fontFamily: 'var(--font-body)',
          padding: '0 0.5rem',
        }}
      >
        Desenvolvendo soluções, aprendendo todos os dias e construindo meu caminho na tecnologia.
        Conheça meus projetos e minha jornada.
      </p>

      {/* CTA Button */}
      <button
        className="liquid-glass animate-fade-rise-delay-2"
        style={{
          borderRadius: '9999px',
          padding: 'clamp(0.9rem, 3vw, 1.25rem) clamp(2rem, 6vw, 3.5rem)',
          fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
          color: 'hsl(var(--foreground))',
          fontFamily: 'var(--font-body)',
          marginTop: '2.5rem',
          cursor: 'pointer',
          transition: 'transform 0.2s',
          background: 'transparent',
          border: 'none',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        onClick={() => {
          const section = document.getElementById('Sobre')
          if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }}
      >
        Começar
      </button>
    </section>
  )
}
