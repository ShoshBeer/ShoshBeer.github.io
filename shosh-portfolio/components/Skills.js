import Image from "next/image";
import react from "react";

export default function Skills() {
  const skillsList = [{
    skill: 'HTML',
    icon: '/images/html-1.svg'
  }, {
    skill: 'Vanilla JS',
    icon: '/images/Javascript-logo.png'
  }, {
    skill: 'React',
    icon: '/images/React-icon.svg.png'
  }, {
    skill: 'Redux',
    icon: '/images/redux_logo.png'
  }, {
    skill: 'Git',
    icon: '/images/Git-Icon-1788C.png'
  }, {
    skill: 'Node JS',
    icon: '/images/node_js_logo.png'
  }, {
    skill: 'Python',
    icon: '/images/Python-logo-notext.svg.png'
  }, {
    skill: 'Enzyme',
    icon: '/images/enzyme.png'
  }, {
    skill: 'CSS',
    icon: '/images/CSS3_logo.svg.png'
  }, {
    skill: 'Bootstrap',
    icon: '/images/Bootstrap_logo.png'
  }, {
    skill: 'React-Bootstrap',
    icon: '/images/react_bootstrap.png'
  }, {
    skill: 'Tailwind',
    icon: '/images/Tailwind_CSS_Logo.svg.png'
  }];

  return (
    <section id='skills' className="scroll-mt-[138px] sm:scroll-mt-[102px]">
      <div className="max-w-6xl mx-auto py-10 bg-white dark:bg-[#121212] antialiased">
        <h2 className="text-4xl lg:text-5xl font-bold text-center">
          Skills
        </h2>
      </div>
      <div className="relative rounded-md shadow-md p-4 md:p-10 lg:p-16 max-w-6xl mx-auto -mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {skillsList.map(skill => {
          return (
            <div className="border-2 text-center py-2">
              <Image src={skill.icon} width={35} height={35} alt={`${skill.skill} icon`} className="inline pr-2 align-text-top" />
              <p className="inline ml-2 font-semibold text-xl">{skill.skill}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}