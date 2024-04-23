import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXLine,
} from "react-icons/ri";

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

function Contact() {
  return (
    <div
      id="contact"
      className=" h-[40vh] w-screen flex flex-col justify-center items-center gap-5 md:gap-2"
    >
      {/* Main Heading */}
      <h1 className=" heading w-full border-b text-center py-4 border-slate-600 text-3xl text-slate-500 font-semibold">
        Contact
      </h1>

      {/* Mail & Social Handle Links */}
      <div className="mailLinks w-[80vw] flex flex-col md:flex-row lg:flex-row items-center justify-around">
        <p className=" text-xl">
          <span className=" font-medium text-slate-600">Email :</span> &nbsp;
          <a
            className=" text-slate-500 hover:text-slate-700"
            href="mailto:dev@rajatpatel.xyz"
          >
            dev@rajatpatel.xyz
          </a>
        </p>

        <div className="socialLinks md:pb-6 flex flex-row justify-center items-center gap-4 py-4">
          {socialMedia.map((item, index) => (
            <div key={index}>
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
  );
}

export default Contact;
