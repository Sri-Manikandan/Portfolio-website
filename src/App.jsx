import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="font-body text-text-primary antialiased">
      <div className="noise-overlay" />
      <div className="fixed inset-0 -z-10 dot-grid opacity-40" />
      <div className="fixed inset-0 -z-10 bg-surface" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 -z-10 w-[800px] h-[600px] bg-accent-teal/[0.04] rounded-full blur-[120px]" />

      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  )
}

export default App
