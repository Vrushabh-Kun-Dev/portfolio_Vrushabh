import "./Skills.css";

import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <>
      <section id="skills">
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc">
         I build responsive and scalable web applications using React.js, TypeScript, and modern frontend tools. I emphasize performance optimization, reusable components, and clean architecture to deliver efficient and maintainable solutions.
        </span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={UIDesign} alt="UI Design" className="skillBarImg"/>
            <div className="skillBarText">
              <h2>UI/UX Design</h2>
              <p>
                I design clean and user-friendly interfaces with a focus on
                usability and modern design principles.
              </p>
            </div>
          </div>

          <div className="skillBar">
            <img src={WebDesign} alt="Web Development"  className="skillBarImg"/>
            <div className="skillBarText">
              <h2>Web Development</h2>
              <p>
                I build fast, responsive, and scalable web applications using
                React.js, TypeScript, and modern tools.
              </p>
            </div>
          </div>

          <div className="skillBar">
            <img src={AppDesign} alt="Frontend Development" className="skillBarImg"/>
            <div className="skillBarText">
              <h2>Frontend Development</h2>
              <p>
                I create interactive and high-performance user interfaces with
                clean code and optimized performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
