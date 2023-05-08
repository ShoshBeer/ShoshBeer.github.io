import react from "react";
import Image from "next/image";

export default function About() {
  return (
    <section id='about'>
      <div className="max-w-6xl mx-auto pt-10 pb-5 bg-white dark:bg-[#121212] antialiased text-center">
        {/* <Image
          priority
          src='/profile_1.jpg'
          className='rounded-full inline pb-3'
          height={108}
          width={108}
          alt='A photo of me!' 
        /> */}
        <h2 className="text-4xl lg:text-5xl font-bold text-center">
          Hey there!
        </h2>
      </div>
      <div className="relative rounded-md shadow-md p-4 md:p-8 lg:p-8 max-w-6xl mx-auto -mt-4">
        <p className="text-xl text-center sm:text-left dark:text-white">
          I taught myself how to build websites! On this page you can see some things I've done. Take a look around and send me a message if you want to work together. Or climb. Or visit New Zealand.
        </p>
      </div>
    </section>
  )
}