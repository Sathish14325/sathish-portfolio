// @flow strict

import { experiences } from "../utils/data/exprience";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../components/helper/AnimationLottie";
import experience from "../../public/img/code.json";
import AOS from "aos";

AOS.init();

function Experience() {
  return (
    <div id="Experience" className="relative z-50 border-t border-[#25213b]">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div
            className="flex flex-col gap-6 mx-2 px-3"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            {experiences.map((experience) => (
              <div
                className="p-3 text-white bg-[#1a1443] relative rounded-lg"
                key={experience.id}
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="flex justify-center">
                  <p className="text-lg sm:text-md font-bold text-[#16f2b3]">
                    {experience.duration}
                  </p>
                </div>
                <div className="flex items-center gap-x-8 px-3 py-5">
                  <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                    <BsPersonWorkspace size={36} />
                  </div>
                  <div>
                    <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                      {experience.title}
                    </p>
                    <p className="text-sm sm:text-base">{experience.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
