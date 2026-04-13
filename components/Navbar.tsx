export default function Navbar(){
return(

     <nav className="sticky top-0 z-50 bg-[#0f0f0f]/80 backdrop-blur border-b border-gray-800 flex justify-between items-center py-6">
      <h1 className="text-lg font-medium tracking-wide">
        Christina
      </h1>

      <div className="flex gap-8 text-sm text-gray-400">
        <a href="#work" className="hover:text-white transition">
          WORK
        </a>
        <a href="#about" className="hover:text-white transition">
          ABOUT
        </a>
        <a href="#contact" className="hover:text-white transition">
          CONTACT
        </a>
      </div>
    </nav>

)

}