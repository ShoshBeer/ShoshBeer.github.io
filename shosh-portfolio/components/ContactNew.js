import Image from "next/image";
import react from "react";
import { useTheme } from "next-themes";
import EmailLight from '../public/images/envelope-light.svg';
import EmailDark from '../public/images/envelope-dark.svg';
import GitLight from '../public/images/github_light.svg';
import GitDark from '../public/images/github_dark.svg';
import LinkLight from '../public/images/linkedin_light.svg';
import LinkDark from '../public/images/linkedin_dark.svg';
import HouseLight from '../public/images/house.svg';
import HouseDark from '../public/images/house-dark.svg';

export default function Contact() {

  const { theme, setTheme } = useTheme();

  return (
    <section id='contact' className="scroll-mt-[138px] sm:scroll-mt-[102px]">
      <div className="max-w-6xl mx-auto py-10 bg-white dark:bg-[#121212] antialiased">
        <h2 className="text-4xl lg:text-5xl font-bold text-center">
          I'd love to hear from you!
        </h2>
      </div>
      <div className="relative rounded-md shadow-md p-4 md:p-10 lg:p-16 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-2 gap-2">
          <a href="mailto:shoshanabeer@gmail.com" className="rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900 border-2 py-2 font-medium text-center">
            <Image src={theme==="dark" ? EmailDark : EmailLight} width={25} height={25} alt='Email icon' className="inline pr-1 align-middle" />
            <p className="inline  pl-3">Send me an email!</p>
          </a>
          <a href="https://www.linkedin.com/in/shoshana-beer-493152264/" rel="noreferrer" target="_blank" className="rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900 border-2 py-2 font-medium text-center">
            <Image src={theme==="dark" ? LinkDark : LinkLight} width={25} height={25} alt='LinkedIn icon' className="inline pr-1 align-middle fill-slate-400" />
            <p className="inline  pl-3">Add me on LinkedIn!</p>
          </a>
          <a href="https://github.com/ShoshBeer" rel="noreferrer" target="_blank" className="rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900 border-2 py-2 font-medium text-center">
            <Image src={theme==="dark" ? GitDark : GitLight} width={25} height={25} alt='GitHub icon' className="inline pr-1 align-middle" />
            <p className="inline  pl-3">Follow me on GitHub!</p>
          </a>
          <a onClick={() => alert('Just kidding')} className="rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900 border-2 py-2 font-medium text-center cursor-pointer">
            <Image src={theme==="dark" ? HouseDark : HouseLight} width={25} height={25} alt='House icon' className="inline pr-1 align-middle" />
            <p className="inline pl-3">Drop by my house!</p>
          </a>
        </div>
      </div>
    </section>
  )
}