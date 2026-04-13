const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git",
  "Figma",
];

export default function Skills() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-sm text-gray-400 mb-6">SKILLS</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="border border-gray-700 px-4 py-2 rounded-full text-sm hover:border-purple-500 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}