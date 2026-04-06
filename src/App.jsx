import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import profile from "./data/profile";

function App() {
  useEffect(() => {
    document.title = profile.pageTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", profile.metaDescription);
    document
      .querySelector('meta[name="author"]')
      ?.setAttribute("content", profile.name);
  }, []);

  return (
    <main className="bg-stone-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
