import react from "react";
import Image from "next/image";

export default function Project(props) {

  const { project } = props;

  return (
    <div className="text-white py-4 grid grid-rows-auto text-center md:grid-cols-2">
      <h3 className="text-2xl md:col-span-2 mb-2">{project.title}</h3>
      <p >{project.description}</p>
      <a className="pt-4 order-3" target="_blank" href={project.repoLink}>View on GitHub</a>
      <a className="order-2 md:row-span-2 m-auto" href={project.siteLink} target="_blank"><Image src={project.image} width={250} height={250} alt='A sneak peek at the project.'></Image></a>
    </div>
  );
}
