export default function Navbar() {
  return (
    <nav className="flex justify-between items-center 
    pb-6 border-b border-[#F2B591]/40 gap-12
text-gray-500
hover:text-gray-900">

      {/* LOGO */}
      <h1 className="text-lg font-medium text-gray-900 tracking-wide">
        Christina
      </h1>

      {/* LINKS */}
      <div className="flex items-center gap-10 text-sm text-gray-600">

        <a
          href="#about"
          className="hover:text-black transition relative 
          after:absolute after:-bottom-1 after:left-0 
          after:w-0 after:h-[1px] after:bg-black 
          hover:after:w-full after:transition-all"
        >
          About me
        </a>

        <a
          href="#projects"
          className="hover:text-black transition relative 
          after:absolute after:-bottom-1 after:left-0 
          after:w-0 after:h-[1px] after:bg-black 
          hover:after:w-full after:transition-all"
        >
          Projects
        </a>

        <a
          href="/christina-lu-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition relative 
          after:absolute after:-bottom-1 after:left-0 
          after:w-0 after:h-[1px] after:bg-black 
          hover:after:w-full after:transition-all"
        >
          Resume
        </a>

      </div>
    </nav>
  );
}