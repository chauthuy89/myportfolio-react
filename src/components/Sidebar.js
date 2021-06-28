import React from "react";
import resume from "../assets/rosele_resume.pdf";
import Avatar from "../assets/Avatar.jpeg";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import github from "../assets/icons/github.png";
import location from "../assets/icons/location.png";
import linkedin from "../assets/icons/linkedin.png";
import download from "../assets/icons/download.png";

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:rose.le.coder@gmail.com");
  };
  return (
    <div className="sidebar">
      <img src={Avatar} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">
        Rose <span> Le</span>
      </div>
      <div className="sidebar__item sidebar__title">Developer </div>
      <a href={resume} download="rosele_resume.pdf">
        <div className="sidebar__item sidebar__resume">
          <img src={download} alt="resume" className="sidebar__icon mr-3" />
          Download resume
        </div>
      </a>
      <figure className="sidebar__socical-icons my-2 ">
        <a href="https://www.facebook.com/leminhchauthuy">
          <img src={facebook} alt="facebook" className="sidebar__icon mr-3" />
        </a>
        <a href="https://www.linkedin.com/in/leminhchauthuy/">
          <img src={instagram} alt="instagram" className="sidebar__icon mr-3" />
        </a>
        <a href="https://www.linkedin.com/in/leminhchauthuy/">
          <img src={linkedin} alt="linkedin" className="sidebar__icon" />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github">
          <a href="https://github.com/chauthuy89">
            <img src={github} alt="github" className="sidebar__icon mr-3" />
            github
          </a>
        </div>
        <div className="sidebar__location">
          <img src={location} alt="location" className="sidebar__icon mr-3" />
          Auckland, New Zealand
        </div>
        <div className="sidebar__item">rose.le.coder@gmail.com</div>
        <div className="sidebar__item">0204639999</div>
      </div>
      <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
        Email Me
      </div>
    </div>
  );
};
export default Sidebar;
