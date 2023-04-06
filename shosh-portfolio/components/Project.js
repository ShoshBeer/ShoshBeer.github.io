import react from "react";
import Image from "next/image";

export default function Project(props) {

  const { project } = props;

  return (
    <div className="grid h-min relative group">
      <Image src={project.image} width={500} height={500} alt='A sneak peek at the project.' className="col-span-full row-span-full m-auto group-hover:opacity-20" />
      <div className="mx-[47px] col-span-full row-span-full self-center px-3 grid grid-cols-2 auto-rows-min text-center invisible opacity-0 group-hover:visible group-hover:opacity-100 h-min">
        <h3 className="col-span-2 py-3 text-2xl">{project.title}</h3>
        <p className="col-span-2 pb-4">{project.description}</p>
        <p><a href={project.siteLink} target="_blank">Go to project</a></p>
        <p><a href={project.repoLink} target="_blank">View on GitHub</a></p>
      </div>
    </div>
  );
}
