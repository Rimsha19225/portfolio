"use client"
import React, { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    const circles = document.querySelectorAll(".circle");
    circles.forEach((progress) => {
      let degree = 0;
      const targetDegree = parseInt(progress.getAttribute("data-degree")?? "0");
      const color = progress.getAttribute("data-color");
      // const number: Element | null = progress.querySelector(".number");

      const interval = setInterval(() => {
        degree += 1;
        if (degree > targetDegree) {
          clearInterval(interval);
          return;
        }
        const progress = document.querySelector('.progress') as HTMLElement;
        progress.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`;
        const number = document.querySelector('.number');
if (number instanceof HTMLElement) {
  number.innerHTML = `${degree ?? 0}<span>%</span>`;  // Fallback to 0 if degree is null or undefined

  // Check if color is not null, otherwise provide a default value
  number.style.color = color ?? 'black';  // Default to 'black' if color is null
}

      }, 10);
    });
  }, []);

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
        <div className="circle" data-degree={95} data-color="cyan">
          <h2 className="number">95<span>%</span></h2>
          <h4>HTML</h4>
        </div>
        <div className="circle" data-degree={75} data-color="blue">
          <h2 className="number">75<span>%</span></h2>
          <h4>CSS</h4>
        </div>
        <div className="circle" data-degree={67} data-color="cyan">
          <h2 className="number">67<span>%</span></h2>
          <h4>JavaScript</h4>
        </div>
        <div className="circle" data-degree={70} data-color="blue">
          <h2 className="number">70<span>%</span></h2>
          <h4>TypeScript</h4>
        </div>
        <div className="circle" data-degree={50} data-color="cyan">
          <h2 className="number">50<span>%</span></h2>
          <h4>Python</h4>
        </div>
        <div className="circle" data-degree={55} data-color="blue">
          <h2 className="number">55<span>%</span></h2>
          <h4>Next.js</h4>
        </div>
      </div>
    </div>
  );
};

export default Skills;
