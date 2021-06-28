import React from "react";
import react from "../assets/icons/react.svg";
import Bar from "../components/Bar";

const languages = [
  {
    icon: react,
    name: "React.js",
    level: "45",
  },
  {
    icon: react,
    name: "Vue.js",
    level: "45",
  },
  {
    icon: react,
    name: "CSS",
    level: "45",
  },
  {
    icon: react,
    name: "C#",
    level: "45",
  },
];
const tools = [
  {
    icon: react,
    name: "Visual Studio",
    level: "45",
  },
  {
    icon: react,
    name: "MS SQL Server",
    level: "45",
  },
  {
    icon: react,
    name: "VS Code",
    level: "45",
  },
  {
    icon: react,
    name: "Firebase",
    level: "45",
  },
];
function Resume() {
  return (
    <div className="container resume">
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Infomation Technology</h5>
            <p className="resume-card__name">
              Southern Institute of Technology
            </p>
            <p className="resume-card__details">
              Southern Institute of Technology
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Experience</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Infomation Technology</h5>
            <p className="resume-card__name">
              Southern Institute of Technology
            </p>
            <p className="resume-card__details">
              Southern Institute of Technology
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-languages__heading">Language and Framework</h5>
          <div className="resume-languages__body mt-3">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-languages__heading">Tools and Softwares</h5>
          <div className="resume-languages__body mt-3">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
