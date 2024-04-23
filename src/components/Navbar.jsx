import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXLine,
} from "react-icons/ri";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { title: "About", url: "#about" },
  { title: "Projects", url: "#projects" },
  { title: "Skills", url: "#skills" },
  { title: "Contact", url: "#contact" },
];

const socialMedia = [
  {
    title: "LinkedIn",
    icon: <RiLinkedinBoxFill size={20} />,
    iconLarge: <RiLinkedinBoxFill size={30} />,
    url: "https://www.linkedin.com/in/rajat-patel-332b82187/",
  },
  {
    title: "Twitter",
    icon: <RiTwitterXLine size={20} />,
    iconLarge: <RiTwitterXLine size={30} />,
    url: "https://twitter.com/Rajat_P97",
  },
  {
    title: "Github",
    icon: <RiGithubFill size={20} />,
    iconLarge: <RiGithubFill size={30} />,
    url: "https://github.com/rp0777",
  },
];

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  useGSAP(() => {
    const showHideHeader = gsap
      .from("#navbar", {
        yPercent: -100,
        duration: 0.25,
        ease: "sine.out",
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top-=" + 100,
      onUpdate: (self) => {
        if (self.direction === -1) {
          showHideHeader.play();
        } else {
          showHideHeader.reverse();
        }
      },
    });
  });

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      setToggleNav(!toggleNav);
    }
  };

  return (
    <nav
      id="navbar"
      className=" sticky backdrop-blur-md top-0 z-[999] w-full h-[10vh] md:h-[11vw] lg:h-[60px] flex justify-between items-center"
    >
      {/* DESKTOP DESIGN */}
      {/* Signature */}
      <header>
        <a href="#home">
          <img
            className=" signature scale-50"
            src="/blackSignature.png"
            alt="Signature Logo"
          />
        </a>
      </header>

      {/* Nav Links, Social Links and Dark mode Toggle buttons */}
      <div className=" links hidden lg:flex justify-between gap-4 items-center mr-[3vw]">
        {/* Navigation Links */}
        <ul className=" navbar-links flex justify-between gap-7 font-semibold">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                className=" opacity-60 hover:opacity-90"
                href={link.url}
                title={link.title}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <p>|</p>

        {/* Social Media Links */}
        <ul className=" social-media flex justify-between gap-7">
          {socialMedia.map((item, index) => (
            <li key={index}>
              <a
                className=" opacity-60 hover:opacity-90"
                href={item.url}
                title={item.title}
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* MOBILE DESIGN */}
      {/* Hamburger or Close Icons */}
      <button
        className=" lg:hidden mr-[5vw]"
        onClick={() => setToggleNav(!toggleNav)}
      >
        {toggleNav ? <CgClose /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {toggleNav && (
        <div
          onClick={handleBackdropClick}
          className="mobileMenu lg:hidden fixed h-[100vh] w-full flex justify-end items-start p-4 bg-black bg-opacity-50 top-[10vh] md:top-[11vw]"
        >
          <div className="menuContainer h-[45%] md:[100%] w-[65%] md:w-[80%] bg-[#d0d2e8] rounded-2xl flex flex-col justify-center items-center">
            {/* Navigation Links */}
            <div className="navLinks flex flex-col md:flex-row justify-start md:justify-center items-center h-[80%] w-full gap-4 py-4">
              {navLinks.map((link) => (
                <div
                  key={link}
                  onClick={() => setToggleNav(!toggleNav)}
                  className=" flex justify-center items-center"
                >
                  <a
                    className=" py-2 px-4 w-[40vw] md:w-[15vw] bg-[#7c83d3] text-xl md:text-sm flex justify-center items-center text-white rounded-xl"
                    href={link.url}
                    title={link.title}
                  >
                    {link.title}
                  </a>
                </div>
              ))}
            </div>

            {/* Social Handle Links */}
            <div className="socialLinks md:pb-6 flex flex-row justify-center items-center gap-4">
              {socialMedia.map((item, index) => (
                <div key={index} onClick={() => setToggleNav(!toggleNav)}>
                  <a
                    className=" opacity-60 hover:opacity-90"
                    href={item.url}
                    title={item.title}
                  >
                    {item.iconLarge}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* {toggleNav && <div></div>} */}
    </nav>
  );
}

export default Navbar;
