import React from "react";
import Skillcard from "../components/Skillcard";

const skills = [
  {
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPS using HTML, CSS, React.js and Vue.js",
  },
  {
    title: "Backend Development",
    about: "I can handle database, serve,api using, firebase, SQL Server",
  },
  {
    title: "UI/UX desinger",
    about:
      "Lorem iosum dolor, sit amet consectetur adipisicing elit. Anam error quos?",
  },
];

function About() {
  return (
    <div className="about">
      <h6 className="about__intro" style={{ backgroundColor: "lightblue" }}>
        I am having a passion of learning new technology. I love coding and
        believe that programming can make our life easier in many ways,
        especially bringing satisfaction of the customers with the successful
        products. I worked on Giv2 project using VueJs and firebase and worked
        on Project Talent using technologies such as C#, ReactJS, ASP.NET MVC,
        Semantic UI using agile methodologies. If my background is suitable for
        the role you are looking for, give me a call so we can have a quick
        chat.
      </h6>
      <div className="container about__container">
        <h6 className="about__heading">What I offer</h6>
        <div className="row">
          {skills.map((skill) => (
            <Skillcard skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
