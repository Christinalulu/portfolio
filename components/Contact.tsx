export default function Contact() {
  return (
    <section id="contact" className="py-24 flex justify-center">
      <div className="border border-gray-800 rounded-2xl p-10 text-center max-w-xl w-full bg-gradient-to-br from-[#1a1a1a] to-[#111] shadow-[0_0_40px_rgba(139,92,246,0.15)]">
        <h2 className="text-2xl md:text-3xl mb-3 font-medium">
          Let’s work together
        </h2>

        <p className="text-gray-400 mb-6">
          Open to internships and junior roles.
        </p>

        <div className="mb-8">
          <a href="mailto:christina.lu96@gmail.com">
            <button
              className="px-6 py-3 rounded-lg text-white 
  bg-gradient-to-r from-purple-500 to-red-500
  transition-all duration-300
  hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.7)]
  active:scale-95"
            >
              Get in touch
            </button>
          </a>
        </div>

        <div className="flex justify-center gap-6 text-sm text-gray-500">
          <a
            href="https://github.com/Christinalulu"
            className="hover:text-purple-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/christina-lu-fugelsnes-2074b022a/?skipRedirect=true"
            className="hover:text-purple-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="/christina-Lu-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

//
