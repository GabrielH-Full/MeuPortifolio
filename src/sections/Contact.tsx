import { useState } from 'react'
import { ArrowUpRight, Copy, Download } from 'lucide-react'
import { email, github, linkedin } from '../data'
export default function Contact() {
const [copyStatus, setCopyStatus] = useState('')
  async function copyEmail() {
    try { await navigator.clipboard.writeText(email); setCopyStatus('E-mail copiado!') }
    catch { setCopyStatus('Não foi possível copiar. Selecione o e-mail ou use o link para enviar uma mensagem.') }
  }

return (      <section id="contatos" className="section container contact-section"><span className="eyebrow">04 / Próxima conexão</span><div className="contact-layout"><div><h2>Vamos construir<br />algo <span>juntos.</span></h2><p>Aberto a oportunidades de emprego, projetos freelance e colaborações. Tem uma ideia interessante? Vamos conversar.</p><a className="primary-button" href={'mailto:' + email}>Começar uma conversa <ArrowUpRight size={17} /></a></div><div className="contact-details"><span className="eyebrow muted">Uma mensagem pode ser o começo.</span><div className="email-line"><a href={'mailto:' + email}>{email}</a><button className="icon-button" onClick={copyEmail} aria-label="Copiar e-mail"><Copy size={18} /></button></div><p className="copy-status" role="status">{copyStatus}</p><div className="contact-links"><a href={github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={19} /></a><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={19} /></a><a href={import.meta.env.BASE_URL + 'CurrículoAtt1.pdf'} download="Gabriel_Henrique_Currículo.pdf">Baixar currículo <Download size={18} /></a></div><span className="availability"><i className="status-dot" />Disponível para novas oportunidades</span></div></div></section>)
}
