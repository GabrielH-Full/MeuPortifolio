import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { projects } from '../data'
import Technologies from '../components/Technologies'
function ProjectDetails({ project, onClose }: { project: typeof projects[number]; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = ref.current
    const previousOverflow = document.body.style.overflow
    dialog?.showModal()
    document.body.style.overflow = 'hidden'
    return () => { dialog?.close(); document.body.style.overflow = previousOverflow }
  }, [])
  return <dialog ref={ref} className="project-dialog" aria-labelledby="project-title" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose() }}>
    <div className="dialog-content">
      <button autoFocus className="dialog-close icon-button" onClick={onClose} aria-label="Fechar projeto"><X /></button>
      <span className="eyebrow">{project.tag} / {project.number}</span>
      <h2 id="project-title">{project.title}</h2><p>{project.description}</p>
      <div className="project-gallery">{project.images?.map((image, index) => <img key={image} src={image} alt={`Captura ${index + 1} do projeto ${project.title}`} />)}</div>
      <p className="long-description">{project.longDescription}</p>
      <Technologies items={project.techs} />
      <div className="actions">
        {project.link !== '#' && <a className="primary-button" href={project.link} target="_blank" rel="noreferrer">Visitar projeto <ArrowUpRight size={16} /></a>}
        {project.github !== '#' && <a className="text-link" href={project.github} target="_blank" rel="noreferrer">Código no GitHub <ArrowUpRight size={16} /></a>}
      </div>
    </div>
  </dialog>
}

export default function Projects() {
const [selected, setSelected] = useState<typeof projects[number] | null>(null)
return <>      <section id="projetos" className="section container">
        <div className="section-heading"><div><span className="eyebrow">02 / Projetos selecionados</span><h2>Ideias que<br />ganham vida.</h2></div><p>Da automação de processos a experiências na web. Tecnologia aplicada a problemas reais.</p></div>
        <div className="project-list">{projects.map(project => <article className="project-row" key={project.number}>
          <button className="project-visual" onClick={() => setSelected(project)} aria-label={'Ver detalhes do ' + project.title}><span className="project-index" aria-hidden="true">{project.number}</span><span className="project-glyph" aria-hidden="true">{project.number === '01' ? '↗' : project.number === '02' ? '⌘' : project.number === '04' ? '+' : '✳'}</span><span className="visual-caption">{project.tag}<ArrowUpRight size={20} /></span></button>
          <div className="project-copy"><span className="eyebrow muted">{project.number} / {project.tag}</span><h3>{project.title}</h3><p>{project.description}</p><Technologies items={project.techs} /><button className="text-link" onClick={() => setSelected(project)}>Explorar projeto <ArrowUpRight size={18} /></button></div>
        </article>)}</div>
      </section>{selected && <ProjectDetails project={selected} onClose={() => setSelected(null)} />}</>
}
