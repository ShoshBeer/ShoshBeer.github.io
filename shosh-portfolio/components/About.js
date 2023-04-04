import react from "react"

export default function About() {
  return (
    <section id='about'>
      <div className="max-w-6xl mx-auto py-10 bg-white dark:bg-[#121212] antialiased">
        <h2 className="text-4xl lg:text-5xl font-bold text-center md:text-left">
          Hey there,
        </h2>
      </div>
      <div className="relative z-10 rounded-md shadow-md bg-[#a01f6a] p-4 md:p-10 lg:p-16 max-w-6xl mx-auto -mt-4">
        <p className="text-xl text-white">
          I taught myself how to build websites! This website showcases some things I've done. Take a look around and send me a message if you want to work together. Or climb. Or visit New Zealand.
        </p>
      </div>
    </section>
  )
}