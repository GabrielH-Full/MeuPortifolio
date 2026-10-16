import { ArrowDown, ArrowUpRight } from 'lucide-react'
import Constellation from './Constellation'
export default function Hero() { return (      <section id="home" className="hero container">
        <div className="hero-copy"><span className="eyebrow">Gabriel Henrique · Desenvolvedor fullstack</span><h1>Conectando<br />ideias.<br /><span>Construindo</span><br />possibilidades.</h1><p>Desenvolvendo soluções, aprendendo todos os dias e construindo meu caminho na tecnologia.</p><div className="actions"><a className="primary-button" href="#projetos">Conheça meus projetos <ArrowUpRight size={17} /></a><a className="text-link" href="#Sobre">Sobre mim</a></div></div>
        <div className="hero-art"><Constellation /><span className="art-caption">CÓDIGO. CONEXÕES. POSSIBILIDADES.</span></div>
        <div className="hero-bottom"><span><i className="status-dot" />Aberto a novas oportunidades</span><a href="#Sobre">Explore o portfólio <ArrowDown size={15} /></a><span>RJ / SP — BR</span></div>
      </section>) }
