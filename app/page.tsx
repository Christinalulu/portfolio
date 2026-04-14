"use client";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f5]">

      <main className="relative w-full h-screen 
      bg-white rounded-xl p-10 overflow-hidden flex flex-col">

        <Navbar />

        {/* ABOUT SECTION */}
        <section className="flex-1 grid md:grid-cols-2 items-center gap-24">

          {/* LEFT SIDE */}
          <div className="relative flex justify-center md:justify-start items-center h-full md:pl-32
left-[80px]  ">

            {/* 🔥 ANIMATED C SHAPE */}
            <div className="absolute left-[60px] top-1/2 -translate-y-1/2 animate-float-rotate">
              <div className="w-[340px] h-[340px] 
              border-[55px] border-[#F2B591]/70 
              rounded-full 
              border-r-transparent 
              border-b-transparent" />
            </div>

            {/* PROFILE IMAGE */}
            <img
              src="/profile.jpg"
              alt="profile"
              className="w-56 h-56 rounded-full object-cover 
              border-4 border-white shadow-xl relative z-10 md:ml-12"
            />

          </div>

          {/* RIGHT SIDE */}
          <div className="max-w-xl">

            <h1 className="text-5xl md:text-6xl font-semibold mb-4">
              About me
            </h1>

            <p className="text-gray-500 mb-6">
              Hello I’m Christina
            </p>

            <div className="space-y-5 text-gray-700 leading-relaxed">

              <p>
                I’m a frontend developer with a background in web development and experience with React, Vue.js, and Node.js, along with some backend experience in C# and .NET.
              </p>

              <p>
                I focus on building clean, user-friendly interfaces with strong attention to usability and visual design.
              </p>

              <p>
                I enjoy working on personal projects and improving my skills through building and refining solutions.
              </p>

              <p>
                I’m also open to collaboration and freelance opportunities.
              </p>

            </div>

            {/* SKILLS */}
            <div className="mt-10">
              <p className="text-sm text-gray-500 mb-3">
                My Skills
              </p>

              <div className="flex flex-wrap gap-3">
                {["HTML", "CSS", "JavaScript", "React", "TypeScript"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1.5 bg-[#9BF2EA]/60 
                      rounded-full text-sm text-gray-800"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-10">

              <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=christina.lu96@gmail.com"
  target="_blank">
                <button className="px-6 py-3 rounded-full text-white 
                bg-gradient-to-r from-[#a855f7] to-[#6366f1]
                hover:scale-105 transition">
                  Say Hello
                </button>
              </a>

              <button className="px-6 py-3 rounded-full border 
              border-purple-400 text-purple-500 
              hover:bg-purple-50 transition">
                View my work
              </button>

            </div>

          </div>
        </section>

      </main>
    </div>
  );
}