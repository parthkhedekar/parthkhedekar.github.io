import React from "react";

const Blog = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-600">Blog</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Insights and writing</h1>
        <p className="max-w-3xl text-base leading-8 text-slate-600">
          Explore articles on distributed systems, backend architecture, and systems design.
        </p>
      </div>

      <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm">
        <article className="space-y-2">
          <p className="text-sm font-medium text-slate-500">May 3, 2026</p>
          <h2 className="text-xl font-semibold text-slate-950">Bloom Filters</h2>
          <p className="text-slate-600">Avoiding wasted work in distributed systems and databases.</p>
        </article>
        <article className="space-y-2">
          <p className="text-sm font-medium text-slate-500">Apr 19, 2026</p>
          <h2 className="text-xl font-semibold text-slate-950">Java 21 Virtual Threads</h2>
          <p className="text-slate-600">Scaling backend systems without thread pool headaches.</p>
        </article>
        <article className="space-y-2">
          <p className="text-sm font-medium text-slate-500">Apr 2, 2026</p>
          <h2 className="text-xl font-semibold text-slate-950">Full Text Search in PostgreSQL - Part 1</h2>
          <p className="text-slate-600">From basic string matching to actually useful search.</p>
        </article>
      </div>
    </div>
  );
};

export default Blog;
