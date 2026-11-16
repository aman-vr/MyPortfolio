import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import profile from "./data/profile";

// Loaded on demand so the Markdown renderer isn't part of the homepage bundle.
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));

function App() {
  // Title and description are per page (useDocumentMeta); the author is the same everywhere.
  useEffect(() => {
    document
      .querySelector('meta[name="author"]')
      ?.setAttribute("content", profile.name);
  }, []);

  return (
    <main className="bg-stone-950 text-white min-h-screen">
      <Navbar />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </main>
  );
}

export default App;
