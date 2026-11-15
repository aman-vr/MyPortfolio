// HomePage.jsx — The single-page portfolio: every section in order.

import { useEffect } from "react";
import { useLocation } from "react-router";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import useDocumentMeta from "../hooks/useDocumentMeta";
import profile from "../data/profile";

export default function HomePage() {
  const { hash } = useLocation();
  useDocumentMeta(profile.pageTitle, profile.metaDescription);

  // Arriving from another page (e.g. /#blog from a post) renders the sections after the
  // browser's own anchor jump, so scroll to the section once it exists.
  useEffect(() => {
    if (!hash) return;
    document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
    </>
  );
}
