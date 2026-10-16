import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { github } from '../data'
const navLinks = [{ label: 'Sobre', id: 'Sobre' }, { label: 'Projetos', id: 'projetos' }, { label: 'Experiência', id: 'experiencias' }, { label: 'Contato', id: 'contatos' }]

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false)
return (    <header className="site-header container">
      <a href="#home" className="wordmark" aria-label="GabrielH — início"><span className="brand-mark" aria-hidden="true">◭</span>GabrielH.</a>
      <button className="menu-toggle icon-button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav id="main-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Navegação principal" onKeyDown={event => { if (event.key === 'Escape') { setMenuOpen(false); document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus() } }}>
        {navLinks.map(link => <a key={link.id} href={'#' + link.id} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
        <a className="nav-social" href={github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
      </nav>
    </header>)
}
