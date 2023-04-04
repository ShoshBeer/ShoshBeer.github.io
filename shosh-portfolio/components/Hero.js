import react, { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [about, setAbout] = useState(0);

  const handleAboutButton = e => {
    setAbout(e.target.value);
  }

  const aboutText = ["Learning is my first passion.\nI love to work with something I don't yet understand.", 'Building websites is my newest passion.\nI want to create positive experiences for the betterment of the world.', 'Teaching lies at the intersection of thinking and communicating.\nMy teaching background allows me to effectively share ideas in diverse contexts.'];

  const profilePics = ['/profile_3.png', '/profile_2.jpg', '/profile_5.jpg'];

  return (
    <section id='about'>
      <div className="max-w-6xl mx-auto h-44 bg-white dark:bg-[#121212] antialiased">
        <h2 className="text-5xl lg:text-6xl font-bold py-20 text-center md:text-left">
          Who I Am
        </h2>
      </div>
      <div className="relative rounded-md shadow-md bg-[#a01f6a] p-4 md:p-10 lg:p-16 max-w-6xl mx-auto mb-20 -mt-4 grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1">

        <div className="pt-4">
          <Image
            priority
            src={profilePics[about]}
            className='rounded-full m-auto'
            height={144}
            width={144}
            alt='A photo of me!' 
          />
        </div>

        <div>
          <button 
            value="0" 
            className={`text-4xl text-gray-50 font-semibold block hover:border-current border-2 ${about == 0 ? 'border-current' : 'border-transparent'}`}
            onClick={(e) => handleAboutButton(e)}>
              Learner
          </button>

          <button 
            value="1"
            className={`text-4xl text-gray-50 font-semibold my-4 block hover:border-current border-2 ${about == 1 ? 'border-current' : 'border-transparent'}`}
            onClick={(e) => handleAboutButton(e)}>
              Developer
          </button>

          <button 
            value="2" 
            className={`text-4xl text-gray-50 font-semibold block hover:border-current border-2 ${about == 2 ? 'border-current' : 'border-transparent'}`}
            onClick={(e) => handleAboutButton(e)}
            >
              Teacher
          </button>
        </div>

        <div className="border mt-6 md:mt-0 col-span-2 md:col-span-1">
          <p className="text-gray-50 text-2xl whitespace-pre-line p-2">{aboutText[about]}</p>
        </div>

      </div>
    </section>
  );
}