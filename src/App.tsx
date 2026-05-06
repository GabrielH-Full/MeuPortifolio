import './index.css'
import Navbar from './components/navBar'
import Hero from './components/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import videoBg from './assets/background1.mp4'

//const VIDEO_URL = '/MeuPortifolio/background1.mp4'

export default function App() {
  return (
    <>
      <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
        <video
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
            autoPlay
            loop
            muted
            playsInline
            src={videoBg}
        >
          {/*<source src={VIDEO_URL} type="video/mp4" />*/}
        </video>

        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Hero />
        </div>
      </div>

      <div style={{ background: '#131313' }}>
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>

      <ScrollToTop />
    </>
  )
}