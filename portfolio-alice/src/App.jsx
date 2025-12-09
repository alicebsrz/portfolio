import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import College from "./components/College";
import Contact from "./components/Contact";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div>
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <College />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;