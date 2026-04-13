import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#0f0f0f] text-white min-h-screen px-6 md:px-20">
      <Navbar />

      <section className="py-24">
        <p className="text-sm text-gray-400 mb-4">— FRONTEND DEVELOPER</p>

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
          Building things <br /> for the{" "}
          <span className="text-purple-500 italic">web</span>
        </h1>

        <p className="text-gray-400 max-w-xl mb-8">
          Junior frontend developer with a passion for clean UI and great user
          experiences.
        </p>

        <div className="flex gap-4">
          <button className="border border-gray-700 px-5 py-2 rounded-lg hover:border-purple-500">
            View my work
          </button>

          <a href="mailto:christina.lu96@gmail.com?subject=Let's work together&body=Hi Christina, I found your portfolio and would like to connect.">
            <button className="px-6 py-3 rounded-lg text-white 
  bg-gradient-to-r from-purple-500 to-purple-700
  transition-all duration-300
  hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.7)]
  active:scale-95">
              Say hello
            </button>
          </a>

        </div>
      </section>

      <Skills />

      <Projects />

      <Contact />
    </main>
  );
}
