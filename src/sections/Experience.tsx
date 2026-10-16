import { languages, experiences } from '../data'
import Technologies from '../components/Technologies'
import { useReveal } from '../hooks/useRevea'
export default function Experience() {
  const { ref: skillsRef, visible: skillsVisible } = useReveal(0.25)
  return (      <section id="experiencias" className="section container">
        <div className="section-heading"><div><span className="eyebrow">03 / Trajetória</span><h2>Sempre em<br />construção.</h2></div><p>Cada experiência traz uma nova perspectiva. Cada desafio, uma oportunidade de evoluir.</p></div>
        <div className="experience-layout"><div><h3 className="small-title">Linguagens & tecnologias</h3><div ref={skillsRef} className="skills">{languages.map((language, index) => <div className="skill" key={language.name}><span>{language.name}</span><div className="skill-track" role="meter" aria-valuemin={0} aria-valuemax={100} aria-valuenow={language.level} aria-label={'Conhecimento em ' + language.name}><span className="skill-fill" style={{ width: language.level + '%', transform: skillsVisible ? 'scaleX(1)' : 'scaleX(0)', transitionDelay: index * 100 + 'ms' }} /></div></div>)}</div></div><div className="timeline">{experiences.map(exp => <article key={exp.company}><span className="eyebrow muted">{exp.period} · {exp.type}</span><h3>{exp.role}</h3><span className="company">{exp.company}</span><p>{exp.description}</p><Technologies items={exp.techs} /></article>)}</div></div>
      </section>) }
