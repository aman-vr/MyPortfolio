import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-stone-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Footer />
    </main>
  );
}

export default App;
