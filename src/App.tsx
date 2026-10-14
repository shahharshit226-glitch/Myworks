import { useEffect } from "react";
import { Route, Routes, useLocation, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import CaseStudyPage from "./pages/CaseStudy";
import Blog from "./pages/Blog";
import PostPage from "./pages/Post";
import About from "./pages/About";
function ScrollToTop() { const { pathname } = useLocation(); useEffect(() => { window.scrollTo(0, 0); }, [pathname]); return null; }
export default function App() {
  return <><ScrollToTop /><Navbar />
    <main id="main" className="mx-auto min-h-[70vh] max-w-6xl px-5 sm:px-8">
      <Routes>
        <Route path="/" element={<Home />} /><Route path="/work" element={<Portfolio />} /><Route path="/work/:slug" element={<CaseStudyPage />} />
        <Route path="/blog" element={<Blog />} /><Route path="/blog/:slug" element={<PostPage />} /><Route path="/about" element={<About />} />
        <Route path="*" element={<div className="py-32"><h1 className="text-5xl font-bold tracking-tight">Page not found</h1><p className="mb-8 mt-3 text-slate-600">That page doesn't exist.</p><Button to="/">Back home</Button></div>} />
      </Routes></main><Footer /></>;
}
