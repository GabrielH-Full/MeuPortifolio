import Navbar from './components/navBar'
import Hero from './components/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './index.css'
import { useScrollAnimations } from './hooks/useScrollAnimations'
export default function App() {
useScrollAnimations()
return <><a className="skip-link" href="#conteudo">Pular para o conte?do</a><Navbar /><main id="conteudo"><Hero /><About /><Projects /><Experience /><Contact /></main><Footer /><ScrollToTop /></>
}
