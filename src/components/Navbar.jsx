import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white/70 border-b border-slate-200/60 backdrop-blur-xs shadow-sm sticky top-0 z-50">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-12">
        <Link to="/" className="text-xl font-semibold tracking-tight text-slate-900 transition hover:text-indigo-600">
          Parth Khedekar
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-sm font-medium text-slate-600">
          {/* <Link to="/blog" className="transition hover:text-slate-900 hover:underline">
            Blog
          </Link> */}
          <Link to="/work" className="transition hover:text-slate-900 hover:underline">
            Work
          </Link>
          <Link to="/projects" className="transition hover:text-slate-900 hover:underline">
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;