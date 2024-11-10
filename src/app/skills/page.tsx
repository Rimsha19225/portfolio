"use client";
import React, { useEffect, useState } from "react";

const skillsData = [
  { name: "HTML", degree: 95, color: "cyan" },
  { name: "CSS", degree: 75, color: "blue" },
  { name: "JavaScript", degree: 67, color: "cyan" },
  { name: "TypeScript", degree: 70, color: "blue" },
  { name: "Python", degree: 50, color: "cyan" },
  { name: "Next.js", degree: 55, color: "blue" },
];

const Skills = () => {
  const [degrees, setDegrees] = useState(Array(skillsData.length).fill(0));

  useEffect(() => {
    const animateSkills = () => {
      setDegrees((prevDegrees) => {
        const updatedDegrees = prevDegrees.map((degree, index) => {
          if (degree < skillsData[index].degree) {
            return degree + 1;
          }
          return degree;
        });
        return updatedDegrees;
      });

      if (degrees.some((degree, index) => degree < skillsData[index].degree)) {
        requestAnimationFrame(animateSkills);
      }
    };

    requestAnimationFrame(animateSkills);
  }, [degrees]);

  return (
    <div className="skills w-full h-[105vh] bg-fixed">
      <div className="flex justify-center items-center gap-4 align-center pt-[7.5rem]">
        <div className="sec1 w-[35rem] h-[20rem] shadow-xl shadow-cyan-300/70 p-4">
          <h3 className="text-3xl font-bold mb-2">Technical Skills</h3>
          <hr />
          <ul className="text-[1.1rem] list-none mt-2">
            <li>Programming Languages: JavaScript, TypeScript, HTML, CSS</li>
            <li>Frameworks & Libraries: React, Next.js, Inquirer.js</li>
            <li>Tools & Technologies: Git, ESLint, jsPDF</li>
            <li>Database: SQL, NoSQL basics</li>
            <li>
              <span className="font-bold">Others:</span> Front-end Development, Responsive Design,
              <br />
              Component-Based Architecture
            </li>
          </ul>
        </div>
        <div className="sec2 w-[35rem] h-[20rem] shadow-xl shadow-cyan-300/70 p-4">
          <h3 className="text-3xl font-bold mb-2">Soft Skills</h3>
          <hr />
          <h4 className="text-[1rem] font-bold mt-2">Problem Solving</h4>
          <p>Strong analytical skills with a knack for solving complex challenges</p>
          <h3 className="text-[1rem] font-bold">Collaboration</h3>
          <p>Team player with experience in cross-functional projects</p>
          <h3 className="text-[1rem] font-bold">Communication</h3>
          <p>Effective communicator, both in coding and teaching concepts</p>
          <h3 className="text-[1rem] font-bold">Continuous Learner</h3>
          <p>Passionate about keeping up with new technologies and industry trends</p>
        </div>
      </div>
      <div className="bar mt-10 flex gap-4 justify-center">
        {skillsData.map((skill, index) => (
          <div
            key={skill.name}
            className="circle relative flex flex-col items-center justify-center"
            style={{
              background: `conic-gradient(${skill.color} ${degrees[index]}%, #222 0%)`,
              width: "120px",
              height: "120px",
              borderRadius: "50%",
            }}
          >
            <h2 className="number text-2xl font-bold" style={{ color: skill.color }}>
              {degrees[index]}<span>%</span>
            </h2>
            <h4>{skill.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
