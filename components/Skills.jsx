import SkillsCard from "./SkillsCard";

import HTML from "../public/assets/skills/html-5.png";
import CSS from "../public/assets/skills/css-3.png";
import NODE from "../public/assets/skills/node-js.png";
import REACT from "../public/assets/skills/physics.png";
import Tailwind from "../public/assets/skills/tailwind-css-logo.png";
import JavaScript from "../public/assets/skills/jsLogo.png";
import Github from "../public/assets/skills/githubLogo.png";
import Electron from "../public/assets/skills/electronLogo.png";

export default function Skills() {
  return (
    <div className="w-full p-2 ">
      <div className="max-w-[1248px] mx-auto flex flex-col justify-center h-full">
        <p className="text-blue-700 text-xl tracking-wide uppercase">{`<Skills/>`}</p>
        <h2 className=" text-3xl py-3">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsCard
            titleSkill={"HTML"}
            imageSkill={HTML}
            widthImage={100}
            heightImage={100}
          />
          <SkillsCard
            titleSkill={"Javascript"}
            imageSkill={JavaScript}
            widthImage={90}
            heightImage={90}
          />
          <SkillsCard
            titleSkill={"CSS"}
            imageSkill={CSS}
            widthImage={100}
            heightImage={100}
          />
          <SkillsCard
            titleSkill={"NODE"}
            imageSkill={NODE}
            widthImage={100}
            heightImage={100}
          />
          <SkillsCard
            titleSkill={"REACT"}
            imageSkill={REACT}
            widthImage={100}
            heightImage={100}
          />
          <SkillsCard
            titleSkill={"TailwindCSS"}
            imageSkill={Tailwind}
            widthImage={90}
            heightImage={100}
          />
          <SkillsCard
            titleSkill={"Github"}
            imageSkill={Github}
            widthImage={90}
            heightImage={90}
          />
          <SkillsCard
            titleSkill={"Electron"}
            imageSkill={Electron}
            widthImage={100}
            heightImage={100}
          />
        </div>
      </div>
    </div>
  );
}
