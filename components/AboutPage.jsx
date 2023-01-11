import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Logo from "../public/assets/media/TRANSPARENT_Logo_NoOutline.png";

export default function aboutPage() {
  return (
    <div className="w-full p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 content-center">
        <div className="col-span-2">
          <p className="text-blue-700 text-xl tracking-wide uppercase">{`<About Me/>`}</p>
          <h2 className=" text-3xl">Who I Am</h2>
          <div className="flex flex-col gap-5 mt-4">
            <p>
              Frontend Developer with a passion for creating engaging and
              functional user experiences. I have extensive experience using
              modern front-end technologies, as well as developing responsive
              and cross-device web applications.
            </p>
            <p>
              In my spare time, I keep abreast of the latest trends and
              technologies in front-end development and love to share my
              knowledge and experience with others.
            </p>
            <p>
              I am confident that my experience and skills are a great addition
              to any development team and I am eager to contribute to exciting
              and challenging projects as a Front-End developer.
            </p>
            <Link
              href="/"
              className="relative flex items-center group bg-blue-700 md:w-[20%] text-center px-5 py-2 rounded-full text-white"
            >
              Download CV
              <IoIosArrowForward
                className="absolute opacity-0 right-6 group-hover:opacity-100 group-hover:right-5 group-hover:flex ease-in duration-300"
                size={16}
              />
            </Link>
          </div>
        </div>
        <div className="col-span-1">
          <Image
            src={Logo}
            alt="Logo about me ByFr0st"
            width="700"
            height="700"
          />
        </div>
      </div>
    </div>
  );
}
