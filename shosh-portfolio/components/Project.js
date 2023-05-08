import react from "react";
import Image from "next/image";

export default function Project(props) {

  const { project } = props;

  return (
    <div className="grid h-min relative group">
      <Image 
        src={project.image}
        alt='A sneak peek at the project.'
        // placeholder="blur"
        sizes="(max-width: 767px) 90vw,
                  45vw"
        className="col-span-full row-span-full m-auto group-hover:opacity-20 group-hover:pointer-events-none" />

      <div className="min-[410px]:mx-[47px] min-[768px]:mx-0 col-span-full row-span-full self-center px-3 grid grid-cols-2 auto-rows-min text-center invisible opacity-0 group-hover:visible group-hover:opacity-100 h-min">

        <h3 className="col-span-2 py-3 text-2xl">{project.title}</h3>
        <p className="col-span-2 pb-4 text-sm min-[410px]:text-base">{project.description}</p>

        <p><a 
          className="rounded-md border border-blue-600 p-1 hover:bg-blue-200" href={project.siteLink} target="_blank">
            Go to project
        </a></p>

        <p><a 
          className="rounded-md border border-blue-600 p-1 hover:bg-blue-200" href={project.repoLink} target="_blank">
            View on GitHub
        </a></p>
      </div>
    </div>
  );
}
