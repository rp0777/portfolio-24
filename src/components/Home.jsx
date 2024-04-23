import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Home() {
  useGSAP(() => {
    const animation = gsap.to(".introduction", {
      yPercent: 20,
      opacity: 0,
    });

    ScrollTrigger.create({
      trigger: ".blob",
      start: "top 50%",
      end: "60% bottom",
      pin: ".introduction",
      animation: animation,
      scrub: 1,
      // markers: true,
    });

    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
      ScrollTrigger.create({
        trigger: ".blob",
        start: "20% 50%",
        end: "bottom bottom",
        animation: gsap.from(".aboutPara", {
          yPercent: -100,
          opacity: 0,
        }),
        scrub: 1,
      });
    });
  });

  return (
    <div className=" home w-full h-full flex flex-col justify-center items-center overflow-hidden">
      {/* INTRODUCTION */}
      <div className=" introduction w-[90vh] md:w-full lg:w-full h-[40vh] md:h-[50vh] lg:h-[50vh] flex flex-col justify-end md:justify-start lg:justify-center items-center">
        <h1 className=" name text-[10vw] md:text-[5vw] lg:text-[3vw] font-semibold text-slate-700">
          Rajat Patel
        </h1>

        <h3 className=" role text-[5vw] md:text-[1.5vw] lg:text-[1.2vw] font-medium text-slate-600">
          Fullstack Developer
        </h3>

        <p className=" summary md:w-full text-[4vw] md:text-[2vw] text-center lg:text-[1vw] text-slate-500">
          I build pixel-perfect, engaging,
          <br className=" md:hidden lg:hidden"></br> and accessible digital
          experiences.
        </p>
      </div>

      {/* ABOUT */}
      <div
        id="about"
        className=" about relative w-[85vw] md:w-[50vw] h-screen md:h-[full] flex flex-col justify-center items-center"
      >
        {/* Animated Blob */}
        <iframe
          className=" blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[4] md:scale-[3] lg:scale-[6]"
          src="https://lottie.host/embed/c9c3d026-4d91-4eeb-ad74-fee0c82cf19e/NxAYwWfONG.json"
          style={{ pointerEvents: "none" }}
        ></iframe>

        {/* About Paragraph */}
        <p className=" aboutPara text-[5vw] md:text-[2vw] lg:text-[1.5vw] text-center font-medium text-slate-600">
          Saved over&nbsp;
          <span className=" text-slate-700 font-bold lg:text-[2vw]">
            $3200+
          </span>
          &nbsp; monthly in labor costs and achieved a &nbsp;
          <span className=" text-slate-700 font-bold lg:text-[2vw]">50%</span>
          &nbsp; improvement in website load time through optimizing HR
          workflows, overhauling the platform, and developing CSS frameworks.
          Explore my portfolio to see the projects!
        </p>
      </div>
    </div>
  );
}

export default Home;
