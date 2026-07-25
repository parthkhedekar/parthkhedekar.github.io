import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200/80 bg-slate-50/90 py-8 px-6 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2 text-sm text-slate-700">
          <p className="text-base font-semibold text-slate-900">Parth</p>
          <p className="max-w-xl leading-6">
            Building scalable backend systems, one API at a time,
            
          </p>
          <p className="max-w-xl leading-6">
            Clean code. Scalable systems. Reliable software.
            
          </p>
          
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
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

        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Parth. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
