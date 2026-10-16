import perfil from '../assets/perfil.jpeg'
import Technologies from '../components/Technologies'
const tags = ['Desenvolvimento Web', 'React & TypeScript', 'Backend', 'Java', 'POO', 'Python', 'PostgreSQL', 'N8N', 'Docker']

export default function About() { return (      <section id="Sobre" className="section container about-layout">
        <div className="portrait-block"><img src={perfil} alt="Gabriel Henrique" loading="lazy" /><div className="portrait-caption"><span>Gabriel Henrique</span><span>Desenvolvedor fullstack</span></div></div>
        <div className="about-copy"><span className="eyebrow">01 / Um pouco sobre mim</span><h2>Curiosidade<br />que vira código.</h2><p>Cursando Engenharia da Computação. Sou desenvolvedor fullstack, com experiência na construção de aplicações completas, do banco de dados à interface.</p><p>Atuo com modelagem de dados, criação de APIs, integração de sistemas e interfaces responsivas. Também desenvolvo automações empresariais que reduzem tarefas manuais e tornam processos mais eficientes.</p><Technologies items={tags} /><div className="about-stats"><div><span>02</span><small>Anos de experiência</small></div><div><span>Fullstack</span><small>Do backend à interface</small></div></div></div>
      </section>) }
