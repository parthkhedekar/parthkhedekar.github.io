import React from "react";

const Work = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-3">
        {/* <p className="text-sm uppercase tracking-[0.3em] text-indigo-600">Work</p> */}
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl pb-1.5">
          WORK
        </h1>
        
        {/* <p className="max-w-3xl text-base leading-8 text-slate-600">
          Highlighting roles, impact, and the systems work that shapes my engineering practice.
        </p> */}
        <div className="h-1.5 w-10 mr-1.5 rounded-full bg-emerald-500 pt-1.5" />
      </div>

      <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm">
        <article className="space-y-3">
          <p className="text-sm font-medium text-slate-500 pt-1.5">
            April 2025 - Current
          </p>
          <h2 className="text-xl font-semibold text-slate-950 pt-1.5">
            Edgeverve Systems Limited
          </h2>
          <p className="text-sm font-semibold text-slate-700 pt-1.5">
            System Engineer
          </p>
           {/* <p className="text-sm font-semibold text-slate-700 pt-1.5">
            As a {" "} <strong>Backend Engineer</strong>, I build scalable and high-performance backend systems for one of India's largest banks using <strong>Java, Spring Boot, Hibernate, and Oracle</strong>. My work focuses on developing reliable REST APIs, optimizing application performance, and delivering secure, production-ready solutions in a regulated banking environment.

          </p> */}
          <ul className="text-slate-500 leading-7 pt-1.5 list-disc list-inside space-y-3">
            <li>
              Develop and maintain high-performance banking applications
              supporting mission-critical financial transactions for one of
              India's largest banks.
            </li>

            <li>
              Design and build RESTful APIs using{" "}
              <strong>Java, Spring Boot, Hibernate, and Oracle</strong> for
              services including fund transfers, payment processing, and account
              management.
            </li>

            <li>
              Optimize backend performance by tuning SQL queries, improving
              Oracle indexing strategies, and configuring connection pooling to
              reduce API response times and improve scalability.
            </li>

            <li>
              Implement robust request validation, centralized exception
              handling, and standardized API response contracts to ensure secure
              and reliable transaction processing.
            </li>

            <li>
              Diagnose and resolve production performance issues through query
              profiling, performance analysis, and backend optimization.
            </li>

            <li>
              Collaborate with cross-functional teams in an Agile environment,
              participate in code reviews, and deliver stable, maintainable, and
              high-quality software for a regulated banking ecosystem.
            </li>
          </ul>
        </article>
        {/* <article className="space-y-3 border-t border-slate-200 pt-6">
          <p className="text-sm font-medium text-slate-500">Jan 2024 - May 2025</p>
          <h2 className="text-xl font-semibold text-slate-950">Backend Engineer</h2>
          <p className="text-sm font-semibold text-slate-700">Technical Consultant</p>
          <p className="text-slate-600 leading-7">
            Delivered backend architecture and API design for enterprise web applications, focusing on reliability, observability, and performance.
            Collaborated with product and design teams to turn complex requirements into scalable services.
          </p>
        </article> */}
      </div>
    </div>
  );
};

export default Work;
