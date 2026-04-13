type Project = {
  title: string;
  description: string;
  tech: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Tailwind.",
    tech: "React • Tailwind",
  },
  {
    title: "Weather App",
    description: "Fetches live weather data from an API.",
    tech: "JavaScript • API",
  },
  {
    title: "Landing Page",
    description: "Responsive landing page with modern UI.",
    tech: "HTML • CSS",
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-20">
      <h2 className="text-sm text-gray-400 mb-6">PROJECTS</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-800 rounded-xl p-6 transition hover:border-purple-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]"
          >
            <h3 className="text-xl font-medium mb-2">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            <span className="text-sm text-gray-500">
              {project.tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}