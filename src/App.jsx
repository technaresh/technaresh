import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Experience } from "@/components/sections/experience"
import { Certifications } from "@/components/sections/certifications"
import { Contact } from "@/components/sections/contact"

function App() {
  const [heroSectionEl, setHeroSectionEl] = useState(null)

  return (
    <div className="min-h-svh bg-background text-foreground">
      <Navbar heroSectionEl={heroSectionEl} />
      <main>
        <Hero sectionRef={setHeroSectionEl} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </div>
  )
}

export default App
