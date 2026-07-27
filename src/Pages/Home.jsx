import React from "react";

import { Copy, Check } from "lucide-react";
import { useState } from "react";

const Home = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("parthkhedekar5120@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1000000);
  };
  return (
    <div className="mx-auto max-w-6xl space-y-14 px-4 py-10 sm:px-6 lg:px-8">
      {/* Hero */}
      <header className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
          Hi there, I am
        </p>

        <div className="space-y-4">
          <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl pt-3.5">
            Parth Khedekar
          </h1>

          <div className="flex flex-wrap items-center gap-3.5 pt-2.5">
            <p className="text-lg font-semibold text-emerald-600">
              System Engineer · Backend Engineer · Distributed Systems ·
              Databases
            </p>

            <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>

              <span className="text-md font-semibold text-emerald-800">
                Open to Work
              </span>
            </div>
          </div>
        </div>
        <div className="h-1.5 w-20 rounded-full bg-emerald-500 " />
      </header>

      {/* Content Wrapper (consistent width) */}
      <div className="max-w-5xl space-y-12">
        {/* About */}
        <section>
          <p className="text-base leading-8 text-slate-600">
            Backend Developer with 1+ year of experience at EdgeVerve Systems,
            currently working on-site with one of India’s largest banks. I
            contribute to building and maintaining production-grade features for
            a large-scale mobile banking application, focusing on payments and
            transaction modules. My work primarily involves Java, Spring Boot,
            and Oracle databases, where I develop secure, high-performance
            backend services and ensure data integrity in critical financial
            operations. I operate in a client-facing environment, collaborating
            closely with cross-functional teams to deliver reliable, scalable
            solutions in a live production ecosystem.
          </p>
        </section>

        {/* Posts
        <section className="space-y-4" id="posts">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-3 text-sm font-semibold text-slate-900">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Latest posts
            </div>
            <a
              className="text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
              href="#posts"
            >
              See all posts
            </a>
          </div>

          <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm">
            <article className="space-y-1">
              <h2 className="text-base font-semibold text-slate-950">
                Bloom Filters
              </h2>
              <p className="text-sm text-slate-500">
                Avoiding wasted work in distributed systems and databases
              </p>
            </article>

            <article className="space-y-1">
              <h2 className="text-base font-semibold text-slate-950">
                Java 21 Virtual Threads
              </h2>
              <p className="text-sm text-slate-500">
                Scaling backend systems without thread pool headaches
              </p>
            </article>

            <article className="space-y-1">
              <h2 className="text-base font-semibold text-slate-950">
                Full Text Search in PostgreSQL - Part 1
              </h2>
              <p className="text-sm text-slate-500">
                From basic string matching to actually useful search
              </p>
            </article>
          </div>
        </section> */}

        {/* Work */}
        <section className="space-y-4" id="work">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-3 text-sm font-semibold text-slate-900">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Work Experience
            </div>
            <Link
              className="text-sm font-semibold text-emerald-600 transition hover:text-emerald-700 pr-1.5"
              to="/work"
            >
              See all work
            </Link>
          </div>

          <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm">
            <div className="space-y-1">
              <p className="text-sm font-medium text-slate-500">
                April 2025 - Present
              </p>
              <h2 className="text-base font-semibold text-slate-950 pt-1.5">
                Edgeverve Systems Limited
              </h2>
              <p className="text-sm text-slate-500 pt-1.5">System Engineer</p>
              <p className="mt-3 text-sm leading-7 text-slate-600 pt-1.5">
                I'm a Backend Engineer with experience building scalable and
                high-performance banking applications using Java, Spring Boot,
                Hibernate, and Oracle. I specialize in designing REST APIs,
                optimizing database performance, and developing reliable backend
                systems that power mission-critical financial services.
                Passionate about clean architecture and continuous learning, I
                enjoy solving complex engineering challenges and building
                software that is both efficient and maintainable.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-4" id="projects">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-3 text-sm font-semibold text-slate-900">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Recent projects
            </div>
            <a
              className="text-sm font-semibold text-emerald-600 transition hover:text-emerald-700 pr-1.5"
              href="/projects"
            >
              See all projects
            </a>
          </div>

          <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm">
            <article className="space-y-1">
              <h2 className="text-base font-semibold text-slate-950">
                Cure All
              </h2>
              <p className="text-sm text-slate-500 pt-1.5">
                Online Health Services — Full-Stack Hospital Management System
              </p>
            </article>

            {/* <article className="space-y-1">
              <h2 className="text-base font-semibold text-slate-950">
                Urban Clamp
              </h2>
              <p className="text-sm text-slate-500">
                Household Services Platform
              </p>
            </article> */}
          </div>
        </section>

        {/* Contact */}
        <section className="space-y-4" id="contactUs">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-3 text-sm font-semibold text-slate-900">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Let's connect
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm">
            <div className="mt-0.5 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <a
                href="https://x.com/ParthKhedekar4"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-slate-900"
              >
                twitter-x
              </a>

              <span>/</span>

              <a
                href="https://github.com/parthkhedekar"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-slate-900"
              >
                github
              </a>

              <span>/</span>

              <a
                href="https://www.linkedin.com/in/parth-khedekar-b89425192/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-slate-900"
              >
                linkedin
              </a>

              <span>/</span>

              <div className="flex items-center gap-2">
                <a
                  href="mailto:parthkhedekar5120@gmail.com"
                  className="transition hover:text-slate-900"
                >
                  parthkhedekar5120@gmail.com
                </a>

                <button
                  onClick={copyEmail}
                  className="rounded p-1 transition hover:bg-slate-200"
                  title={copied ? "Copied!" : "Copy email"}
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
