import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-blue-700 text-xl tracking-wide uppercase">{`<Projects/>`}</p>
        <h2 className=" text-3xl py-3">What I've Build</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Here go all the projects */}
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
