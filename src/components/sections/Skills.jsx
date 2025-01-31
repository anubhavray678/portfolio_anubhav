import React from "react";
import Image from "next/image";
import { skills } from "../../../data/constant";

const Skills = () => {
  return (
    <div
      className="flex flex-col justify-center items-center relative z-10"
      id="Skills"
    >
      <div className="flex flex-col justify-between items-center w-full max-w-[1100px] gap-3 relative">
        <h2 className="text-[52px] max-md:text-[32px] text-center font-semibold mt-5 max-md:mt-3 text-text_primary">
          Skills
        </h2>
        <p className="text-lg max-md:text-base text-center font-semibold text-text_secondary mb-10">
          Here are some of my skills on which I have been working on for the
          past 3 years.
        </p>

        <div className="flex flex-wrap w-full mt-5 gap-[50px] justify-center">
          {skills.map((skill, index) => (
            <span key={`skill-${index}`}>
              <div className="max-w-[500px] border border-[rgba(255,255,255,0.125)] shadow-[rgba(23,92,230,0.15)_0px_4px_24px] rounded-2xl p-[18px_36px] md:max-w-[400px] md:p-[10px_36px] max-md:max-w-[330px]">
                <h3 className="text-2xl font-semibold mb-5 text-center text-text_secondary">
                  {skill.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-3 mb-5">
                  {skill.skills.map((item, index_x) => (
                    <div
                      key={`skill-x-${index_x}`}
                      className="text-base font-normal text-text_primary/80 border border-text_primary/80 rounded-xl px-4 py-3 flex items-center gap-2 bg-orange-100"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
