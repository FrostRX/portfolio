import { AiOutlineTwitter } from "react-icons/ai";
import { BsTwitch, BsInstagram, BsGithub } from "react-icons/bs";
export default function Hero() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-wide text-gray-600">
            Let's code somethings together ❤️🧑🏻‍💻
          </p>
          <h1 className="pt-4 pb-2 text-gray-700">
            Hi, I'm <span className="text-blue-700">ByFr0st</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[80%] md:max-w-[60%] mx-auto">
            I'm a Front-End web developer. Currently, I'm focused on building
            responsive front-end web applications while learning back-end
            technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] mx-auto py-4">
            <div className="rounded-full shadow-lg shadow-blue-700 p-3 cursor-pointer hover:scale-110 transition-transform">
              <BsInstagram size={25} />
            </div>
            <div className="rounded-full shadow-lg shadow-blue-700 p-3 cursor-pointer hover:scale-110 transition-transform">
              <BsTwitch size={25} />
            </div>
            <div className="rounded-full shadow-lg shadow-blue-700 p-3 cursor-pointer hover:scale-110 transition-transform">
              <AiOutlineTwitter size={25} />
            </div>
            <div className="rounded-full shadow-lg shadow-blue-700 p-3 cursor-pointer hover:scale-110 transition-transform">
              <BsGithub size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
