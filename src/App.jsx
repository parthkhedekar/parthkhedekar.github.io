import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Work from "./Pages/Work";
import Projects from "./Pages/Projects";

const Section = ({ title, subtitle, children }) => (
  <section className="space-y-6 rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-10">
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.3em] text-indigo-600">{subtitle}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h1>
      <p className="mt-4 text-base leading-7 text-slate-600">
        Build a polished portfolio with clean navigation, refined spacing, and a modern visual rhythm.
      </p>
    </div>
    {children}
  </section>
);

const NotFound = () => (
  <Section title="404" subtitle="Not found">
    <p className="text-slate-600">The page you're looking for does not exist. Use the navigation above to continue.</p>
  </Section>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
        <Navbar />

        <main className="flex-grow px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/blog" element={<Blog />} /> */}
              <Route path="/work" element={<Work />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;