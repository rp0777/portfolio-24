import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import { RiGithubFill } from "react-icons/ri";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const [activeSection, setActiveSection] = useState(0);

  useGSAP(() => {
    const details = gsap.utils.toArray(
      ".desktopProjectDetails:not(:first-child)"
    );

    const fullDetails = gsap.utils.toArray(".desktopProjectDetails");

    // to update the background color as per the project theme on scroll
    fullDetails.forEach((detail, index) => {
      ScrollTrigger.create({
        trigger: detail,
        start: "top 80%",
        end: "bottom 50%",
        onToggle: (self) => {
          if (self.isActive) {
            setActiveSection(index);
          }
        },
      });
    });

    const photos = gsap.utils.toArray(".desktopProjectPic:not(:first-child)");

    gsap.set(photos, { yPercent: 101 });

    const allPhotos = gsap.utils.toArray(".desktopProjectPic");

    // To pin the right section with respect to gallery on scroll
    ScrollTrigger.create({
      trigger: ".projects",
      start: "top top",
      end: "bottom bottom",
      pin: ".right",
      // markers: true,
    });

    // to update the project pictures as we scroll through their details section
    details.forEach((detail, index) => {
      let headline = detail.querySelector("h1");
      let animation = gsap
        .timeline()
        .to(photos[index], { yPercent: 0 })
        .set(allPhotos[index], { autoAlpha: 0 });
      ScrollTrigger.create({
        trigger: headline,
        start: "top 80%",
        end: "top 50%",
        stagger: 3,
        animation: animation,
        scrub: true,
        // markers: true,
      });
    });

    // End of useGSAP
  });

  const sectionColors = ["#EDE8F5", "#FAE1EE", "#FFEAE0", "#EDE8F5"];

  return (
    <div
      id="projects"
      className="projects w-full flex justify-center"
      style={{
        backgroundColor: sectionColors[activeSection],
        transition: "background-color 1s ease",
      }}
    >
      <div className="left w-1/2 flex flex-col justify-center items-end">
        {/* Bot AI - Project Details */}
        <div className="desktopProjectDetails w-[40%] h-screen px-3 mr-[5vw] flex flex-col justify-center items-start gap-4">
          {/* Project Live Link */}
          <a
            className=" text-[#8f96e6] hover:text-[#383e7b]"
            href="https://bot-ai-24.vercel.app/"
            target="_blank"
          >
            bot-ai-24.vercel.app
          </a>

          {/* Project Name */}
          <h1 className=" projectTitle text-[2.5vw] font-medium">
            Bot AI, <br /> AI Assistant
          </h1>

          {/* Tech Stack Used */}
          <p className=" techStack">React, Tailwind CSS, Recoil</p>

          {/* Github Repo Link */}
          <a
            className=" px-3 py-2 rounded-full text-[#8f96e6] hover:text-[#383e7b] hover:bg-[#8f96e6] border border-[#8f96e6] border-solid flex justify-center items-center gap-2"
            href="https://github.com/rp0777/bot-ai"
            target="_blank"
          >
            code <RiGithubFill size={24} />
          </a>
        </div>

        {/* Ochi - Project Details */}
        <div className="desktopProjectDetails w-[40%] h-screen px-3 mr-[5vw] flex flex-col justify-center items-start gap-4">
          {/* Project Live Link */}
          <a
            className=" text-[#ea99c0] hover:text-[#672c48]"
            href="https://ochi-24.vercel.app/"
            target="_blank"
          >
            ochi-24.vercel.app
          </a>

          {/* Project Name */}
          <h1 className=" projectTitle text-[2.5vw] font-medium">
            Ochi, <br /> Web Design
          </h1>

          {/* Tech Stack Used */}
          <p className=" techStack">React, GSAP, Framer Motion</p>

          {/* Github Repo Link */}
          <a
            className=" px-3 py-2 rounded-full text-[#ea99c0] hover:bg-[#ea99c0] hover:text-[#672c48] border border-[#ea99c0] border-solid flex justify-center items-center gap-2"
            href="https://github.com/rp0777/ochi"
            target="_blank"
          >
            code <RiGithubFill size={24} />
          </a>
        </div>

        {/* Foodbox - Project Details */}
        <div className="desktopProjectDetails w-[40%] h-screen px-3 mr-[5vw] flex flex-col justify-center items-start gap-4">
          {/* Project Live Link */}
          <a
            className=" text-[#dda694] hover:text-[#764332]"
            href="https://foodbox-24.vercel.app/"
            target="_blank"
          >
            foodbox-24.vercel.com
          </a>

          {/* Project Name */}
          <h1 className=" projectTitle text-[2.5vw] font-medium">
            Foodbox, <br /> Food Delivery
          </h1>

          {/* Tech Stack Used */}
          <p className=" techStack">
            Next JS, Prisma, Docker, Stripe, Tailwind CSS
          </p>

          {/* Github Repo Link */}
          <a
            className=" px-3 py-2 rounded-full text-[#dda694] hover:bg-[#dda694] hover:text-[#764332] border border-[#dda694] border-solid flex justify-center items-center gap-2"
            href="https://github.com/rp0777/foodbox"
            target="_blank"
          >
            code <RiGithubFill size={24} />
          </a>
        </div>

        {/* Countdown Timer - Project Details */}
        <div className="desktopProjectDetails w-[40%] h-screen px-3 mr-[5vw] flex flex-col justify-center items-start gap-4">
          {/* Project Live Link */}
          <a
            className=" text-[#8f96e6] hover:text-[#383e7b]"
            href="https://timer-24.vercel.app/"
            target="_blank"
          >
            timer-24.vercel.app
          </a>

          {/* Project Name */}
          <h1 className=" projectTitle text-[2.5vw] font-medium">
            Timer, <br /> Countdown Timer
          </h1>

          {/* Tech Stack Used */}
          <p className=" techStack">React, Recoil, Spline 3D Model</p>

          {/* Github Repo Link */}
          <a
            className=" px-3 py-2 rounded-full text-[#8f96e6] hover:text-[#383e7b] hover:bg-[#8f96e6] border border-[#8f96e6] border-solid flex justify-center items-center gap-2"
            href="https://github.com/rp0777/countdown-timer"
            target="_blank"
          >
            code <RiGithubFill size={24} />
          </a>
        </div>
      </div>

      {/* <div className="desktopProjectPic absolute w-full h-full rounded-[60px] bg-[#CDD1FF] flex justify-center items-center my-[30vh]"> */}
      <div className="right w-1/2 h-screen flex flex-col justify-center items-start">
        <div className=" desktopProjectPics relative w-[60vh] h-[60vh] overflow-hidden flex justify-start items-center">
          {/* Bot AI - Project Picture */}
          <div className="desktopProjectPic absolute w-full px-[2vh] h-full rounded-[60px] bg-[#CDD1FF] flex justify-center items-center">
            <img
              className=" object-cover rounded-3xl cursor-pointer"
              style={{ boxShadow: "0 25px 25px 10px #8f96e6" }}
              src="/botai.png"
              alt=""
            />
          </div>

          {/* Ochi - Project Picture */}
          <div className="desktopProjectPic absolute w-full px-[2vh] h-full rounded-[60px] bg-[#F9D2E5] flex justify-center items-center">
            <img
              className=" object-cover rounded-3xl cursor-pointer"
              style={{ boxShadow: "0 25px 25px 10px #ea99c0" }}
              src="/ochi.png"
              alt=""
            />
          </div>

          {/* Foodbox - Project Picture */}
          <div className="desktopProjectPic absolute w-full px-[2vh] h-full rounded-[60px] bg-[#ffcdbd] flex justify-center items-center">
            <img
              className=" object-cover rounded-3xl cursor-pointer"
              style={{ boxShadow: "0 25px 25px 10px #dda694" }}
              src="/foodbox.png"
              alt=""
            />
          </div>

          {/* Countdown Timer - Project Picture */}
          <div className="desktopProjectPic absolute w-full px-[2vh] h-full rounded-[60px] bg-[#CDD1FF] flex justify-center items-center">
            <img
              className=" object-cover rounded-3xl cursor-pointer"
              style={{ boxShadow: "0 25px 25px 10px #8f96e6" }}
              src="/timer.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
