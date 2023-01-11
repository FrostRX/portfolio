import Image from "next/image";

export default function SkillsCard({
  titleSkill,
  imageSkill,
  widthImage,
  heightImage,
}) {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center h-full">
        <div className="m-auto">
          <Image
            src={imageSkill}
            alt={`${titleSkill} Logo`}
            width={widthImage || ""}
            height={heightImage || ""}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-bold uppercase">{titleSkill}</h3>
        </div>
      </div>
    </div>
  );
}
