import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Services from "./components/Services";
export default function Home() {
  return (
      <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      </div>
  );
}
// git add .
// git commit -m "Updated feature or fixed bug"
// git push origin main