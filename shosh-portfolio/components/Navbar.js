import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [mounted, setMounted] = useState(false);
  const [pulling, setPulling] = useState('');
  const [animation, setAnimation] = useState('');
  const { theme, setTheme } = useTheme();
  const name = 'Shoshana Beer';

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePull = () => {
    setAnimation('!animate-none');
    setPulling('animate-pull-down');
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
    }, 250);
    setTimeout(() => {
      setPulling('');
      setAnimation('');
    }, 400);
  }

  return (
    <div className="z-10 mx-auto px-4 fixed w-full py-3 dark:bg-[#121212] dark:border-b dark:border-white bg-[#d1e3f3]">
      <div className="flex justify-between items-center flex-wrap">
        <div className="lg:absolute">
          <h1 className='px-3 xs:px-6 text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight inline float-right mt-2 whitespace-pre-line'><Link href='/'>{name}</Link></h1>
        </div>
        <div className="float-right w-full text-end order-3 pt-2 pr-5 contents xs:inline-flex xs:justify-end sm:order-2 md:w-min sm:pr-0 lg:absolute lg:right-6">
          <Link className="xs:px-2 text-xl font-medium hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold" href='#projects'>Projects</Link>
          <Link className="px-2 text-xl font-medium hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold" href='#skills'>Skills</Link>
          <Link className="px-2 text-xl font-medium hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold" href='#contact'>Contact</Link>
          <a className="px-2 text-xl font-medium hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold" href='/resume.pdf' target="_blank" >Resume</a>
        </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-10 p-3 rounded focus:outline-none h-20 overflow-visible lg:m-auto"
          onClick={() => {
            handlePull();
          }}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="w-4 h-4 text-yellow-500"
            >
              {theme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
          <div>
            <p className={`dark:text-gray-50 text-gray-700 leading-[0.4rem] ${pulling}`}>
              <span className="relative">.</span><br/>
              <span className={`relative ${animation} animate-wiggle-less`}>.</span><br/>
              <span className={`relative ${animation} animate-wiggle`}>.</span><br/>
              <span className={`relative ${animation} animate-wiggle-less`}>.</span><br/>
              <span className={`relative ${animation} animate-[wiggleHalf_linear_1s_reverse_infinite]`}>.</span><br/>
              <span className={`relative ${animation} animate-wiggle`}>.</span><br/>
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}