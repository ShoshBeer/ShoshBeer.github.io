import Image from "next/image";

export default function Project(props) {

  const { project } = props;

  return (
    <div className="grid relative group">
      <div className="col-span-full row-span-full self-center px-3 grid grid-cols-2 text-center border border-black dark:border-white h-full rounded-sm">

        <div className="col-span-2 py-3 text-2xl">
          <Image
            src={project.icon}
            height={38}
            className={`mr-3 inline ${project.iconDark && 'dark:hidden'}`}
            alt="Project icon"
          />          
          {project.iconDark && <Image
            src={project.iconDark}
            height={38}
            className="mr-3 hidden dark:inline"
            alt="Project icon"
            />
          }
          <h3 className="inline align-middle">{project.title}</h3>
        </div>
        <p className="col-span-2 pb-4 text-sm min-[410px]:text-lg">{project.description}</p>

        {project.siteLink && <a 
          className="rounded-md border border-black dark:border-white p-1 hover:bg-blue-200 dark:hover:bg-blue-900 mb-2 mx-1 md:mx-3" href={project.siteLink} rel="noreferrer" target="_blank">
            Go to project
        </a> }

        <a 
          className={`rounded-md border border-black dark:border-white p-1 hover:bg-blue-200 dark:hover:bg-blue-900 mb-2 mx-1 md:mx-3 flex h-fit self-end justify-center ${!project.siteLink && 'col-span-2'}`} href={project.repoLink} rel="noreferrer" target="_blank">
            View on GitHub
        </a>
      </div>
    </div>
  );
}
