import Image from "next/image";
import Link from "next/link";

import NotFound from "../public/assets/projects/notFound.jpg";

export default function ProjectCard({ title, srcImage, type, link }) {
  return (
    <div className="relative flex justify-center items-center h-auto w-full shadow-lg shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-blue-700 to-blue-400">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={srcImage || NotFound}
        alt="Project Image"
        width={950}
        height={950}
      />
      <div className="hidden group-hover:block absolute text-center text-white">
        <h3 className="text-2xl font-bold tracking-wide">
          {title || "Project not found"}
        </h3>
        <p className="pb-4 pt-2">{type || ""}</p>
        <Link
          target={"_blank"}
          className="py-3 rounded-lg bg-white/80 px-5 text-black font-bold text-lg w-[30px]"
          href={link || "/"}
        >
          More Info
        </Link>
      </div>
    </div>
  );
}
