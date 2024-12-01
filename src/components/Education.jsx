import React from "react";
import { educations } from "../utils/data/education";
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from "../../public/img/Animation-edu.json";
import AnimationLottie from "../components/helper/AnimationLottie";
import AOS from "aos";

AOS.init();

function Education() {
  return (
    <div
      id="Education"
      className="bg-[#000336] relative z-50 border-t border-[#25213b]"
    >
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Educations
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
            <div className="w-3/4 h-full">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6 mx-2 px-3">
              {educations.map((education) => (
                <div
                  className="p-2 text-white bg-[#1a1443] rounded-lg"
                  key={education.id}
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <div className="flex justify-center">
                    <p className="text-lg sm:text-md text-[#16f2b3] font-semibold">
                      {education.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-8 px-3 py-5">
                    <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    <div>
                      <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                        {education.title}
                      </p>
                      <p className="text-sm sm:text-base">
                        {education.institution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
