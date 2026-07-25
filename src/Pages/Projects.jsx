import React from "react";

const Projects = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-3">
        {/* <p className="text-sm uppercase tracking-[0.3em] text-indigo-600">Work</p> */}
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          PROJECT
        </h1>
        <div className="h-1.5 w-8 mr-1.5 rounded-full bg-emerald-500 pt-1.5" />
      </div>

      <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm">
        <article className="space-y-4">
          <p className="text-sm font-medium text-slate-500">April 2026</p>

          <h2 className="text-xl font-semibold text-slate-950 pt-1.5">Cure All</h2>

          <p className="text-sm font-semibold text-slate-700 pt-1.5">
            Online Health Services — Full-Stack Hospital Management System
          </p>

          {/* Technologies */}
          <div className="pt-1.5">
           

            <div className="flex flex-wrap gap-2">
              {[
                "Spring Boot",
                "Java",
                "Hibernate",
                "MySQL",
                "JWT",
                "React",
                "Tailwind CSS",
                "Context API",
                "Redis",
                "Node.js",
                "Microservices",
                "REST APIs",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <ul className="list-disc list-inside space-y-3 pt-2 leading-7 text-slate-500">
            <li>
              Designed and developed RESTful APIs using{" "}
              <strong>Java, Spring Boot, and Hibernate</strong> following a
              layered architecture for appointment scheduling, doctor
              management, patient records, prescriptions, and hospital
              administration.
            </li>

            <li>
              Implemented <strong>JWT authentication</strong>, role-based access
              control (RBAC), request validation, and global exception handling
              to secure application access and improve API reliability.
            </li>

            <li>
              Designed a normalized <strong>MySQL</strong> database schema and
              integrated <strong>Redis</strong> for caching frequently accessed
              data, improving application responsiveness.
            </li>

            <li>
              Built a responsive frontend using{" "}
              <strong>React.js, Tailwind CSS, and Context API</strong>,
              providing dedicated dashboards and workflows for administrators,
              doctors, and patients.
            </li>

            <li>
              Developed a <strong>microservices-based architecture</strong> with
              Spring Boot handling core business services and a separate{" "}
              <strong>Node.js</strong> microservice responsible for email/alert
              notifications, enabling distributed and independently deployable
              services.
            </li>

            <li>
              Followed clean architecture principles by separating controllers,
              services, repositories, and DTOs, resulting in a modular,
              maintainable, and scalable codebase.
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
};

export default Projects;
