import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
export default function ScrollToTop() {
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const update = () => setShowTop(window.scrollY > 600)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

return showTop ? <a className="scroll-top icon-button" href="#home" aria-label="Voltar ao in?cio"><ArrowUp size={20} /></a> : null
}
