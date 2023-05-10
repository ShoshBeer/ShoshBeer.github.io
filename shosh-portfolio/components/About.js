import Image from "next/image";

export default function About() {
  return (
    <section id='about' className="mb-6">
      <div className="max-w-6xl mx-auto pt-10 pb-10 antialiased text-center">
        <Image
          priority
          src='/profile_1.jpg'
          className='rotate-180 rounded-full inline relative right-4 sm:right-10'
          height={80}
          width={80}
          alt='A photo of me!' 
        />
        <h2 className="text-4xl lg:text-5xl font-bold text-center inline align-middle">
          Hey there!
        </h2>
      </div>
      <div className="relative rounded-sm border border-black dark:border-white p-4 md:p-6 max-w-5xl md:mx-4 lg:mx-auto">
        <p className="text-xl text-center sm:text-left dark:text-white">
          I taught myself how to build websites! On this page, you can see some things I've done. Take a look around and send me a message if you want to work together. Or climb. Or visit New Zealand.
        </p>
      </div>
    </section>
  )
}
