const DISPLAY_FONT = "'Instrument Serif', serif"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <div style={{
      background: `
        radial-gradient(circle at center, rgba(241, 190, 108, 0.04), transparent 60%),
        #0e0e0e
      `,
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <footer style={{ padding: 'clamp(1.25rem, 4vw, 2rem)' }}>
        <div style={{
          maxWidth: '80rem',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          {/* Logo */}
          <span style={{
            fontFamily: DISPLAY_FONT,
            fontSize: '1.25rem',
            color: 'hsl(var(--foreground))',
            fontWeight: 'normal',
          }}>
            GabrielH<sup style={{ fontSize: '0.6rem' }}>®</sup>
          </span>

          {/* Copyright — esconde em telas muito pequenas */}
          <span style={{
            fontSize: '0.75rem',
            color: 'hsl(var(--muted-foreground))',
            fontFamily: 'var(--font-body)',
            textAlign: 'center',
            flex: '1 1 auto',
          }}>
            © {year} GabrielH. Todos os direitos reservados.
          </span>

          {/* Links sociais */}
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[
              { label: 'GitHub', url: 'https://github.com/GabrielH-Full' },
              { label: 'LinkedIn', url: 'https://linkedin.com/in/gabriel-henrique-da-silva-barboza-13931225b/' },
            ].map(({ label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.8rem',
                  color: 'hsl(var(--muted-foreground))',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-body)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'hsl(var(--foreground))')}
                onMouseLeave={e => (e.currentTarget.style.color = 'hsl(var(--muted-foreground))')}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
