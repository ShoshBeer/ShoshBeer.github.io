import Image from "next/image";
import EmailLight from '../public/images/envelope-light.svg';
import GitLight from '../public/images/github_light.svg';
import LinkLight from '../public/images/linkedin_light.svg';
import HouseLight from '../public/images/house.svg';

export default function Contact() {

  return (
    <section id='contact' className="scroll-mt-[138px] sm:scroll-mt-[102px] mb-20">
      <div className="max-w-6xl mx-auto py-14 antialiased">
        <h2 className="text-4xl lg:text-5xl font-bold text-center">
          I'd love to hear from you!
        </h2>
      </div>
      <div className="relative max-w-5xl md:mx-4 lg:mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <a href="mailto:shoshanabeer@gmail.com" className="rounded-sm hover:bg-blue-200 dark:hover:bg-blue-900 border-2 py-2 font-medium text-center">
            <Image src={EmailLight} width={25} height={25} alt='Email icon' className="inline pr-1 align-middle dark:invert" />
            <p className="inline pl-3">Send me an email!</p>
          </a>
          <a href="https://www.linkedin.com/in/shoshana-beer-493152264/" rel="noreferrer" target="_blank" className="rounded-sm hover:bg-blue-200 dark:hover:bg-blue-900 border-2 py-2 font-medium text-center">
            <Image src={LinkLight} width={25} height={25} alt='LinkedIn icon' className="inline pr-1 align-middle fill-slate-400 dark:invert" />
            <p className="inline pl-3">Add me on LinkedIn!</p>
          </a>
          <a href="https://github.com/ShoshBeer" rel="noreferrer" target="_blank" className="rounded-sm hover:bg-blue-200 dark:hover:bg-blue-900 border-2 py-2 font-medium text-center">
            <Image src={GitLight} width={25} height={25} alt='GitHub icon' className="inline pr-1 align-middle dark:invert" />
            <p className="inline pl-3">Follow me on GitHub!</p>
          </a>
          <a onClick={() => alert('Just kidding')} className="rounded-sm hover:bg-blue-200 dark:hover:bg-blue-900 border-2 py-2 font-medium text-center cursor-pointer">
            <Image src={HouseLight} width={25} height={25} alt='House icon' className="inline pr-1 align-middle dark:invert" />
            <p className="inline pl-3">Drop by my house!</p>
          </a>
        </div>
      </div>
    </section>
  )
}
