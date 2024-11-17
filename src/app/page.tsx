import Link from "next/link";
import Image from "next/image"
import profile from "../../public/images/profile.png"
import Icon from "@/components/icon";

export default function Home() {
  return (
    <div>
      <div className="home w-full h-screen flex justify-center shadow-black shadow-2xl items-center gap-24 align-center bg-fixed">
        <div className=" w-[32rem] bg-gradient-to-tl from-cyan-300 to-blue-400 p-6 rounded-2xl border-y-4 border-black shadow-xl shadow-cyan-300/70">
          <h3 className="text-[2.8rem] font-sans font-bold cursor-pointer">RIMSHA ARSHAD</h3>
          <hr/>
          <p className="text-xl cursor-pointer whitespace-normal mt-1 text-justify">&ldquo;As a passionate developer with a strong foundation in web technologies, I craft responsive & interactive digital experiences. From front-end finesse to back-end logic, I blend creativity with technical expertise to bring ideas to life.&ldquo;</p>
          <Icon />
        </div>
        <div className="box">
          <div className="content">
            <Image 
            src={profile}
            alt="profile"
            className="image"
            />
            <h4>Rimsha Arshad <br /> <span>UX/UI Designer</span></h4>
            <Link href="/resuma" className="a">Resume</Link>
          </div>
        </div>
      </div>
      <div className=" w-[75%] h-[100vh] flex flex-col ml-52 justify-center whitespace-pre-line">
        <h4 className="text-center text-blue-900 font-bold text-5xl mb-6">My Self</h4>
        <p className="font-semibold text-xl text-justify">My name is Rimsha, a final-year BS Mathematics student with a strong passion for coding, learning, and teaching. Over the years, I’ve developed a solid foundation in mathematics, problem-solving, and analytical thinking, which I have applied in various projects involving programming and web development. I enjoy creating interactive, user-friendly applications that combine my love for logic with a touch of creativity.</p>
        <p className="font-semibold text-xl text-justify">Throughout my academic journey, I’ve worked on multiple projects where I’ve taken on leadership roles, managing teams and overseeing project completion. These experiences have sharpened my project management and teamwork skills, preparing me to handle real-world challenges and collaborate effectively in a professional environment. While I don’t have formal work experience, I’ve led projects in a way that emulates the collaborative nature of industry work.</p>
        <p className="font-semibold text-xl text-justify">Technically, I’m skilled in TypeScript, HTML, CSS, and React, with experience in tools like Next.js, Inquirer.js, and jsPDF. I’m comfortable building responsive web components, managing user prompts, and creating dynamic forms with clean, structured code. I enjoy adding interactivity to my projects by toggling elements, updating data dynamically, and generating shareable content such as PDFs. Additionally, I have experience with ESLint and CSS modules for maintaining consistency and style in my projects.</p>
        <p className="font-semibold text-xl text-justify">Beyond coding, I’m a cricket enthusiast and enjoy activities that keep me learning and creating. My aim is to start my professional journey where I can leverage my technical skills, problem-solving abilities, and leadership experience. I’m excited to contribute to a forward-thinking organization, develop my skills further, and make a positive impact in the tech industry.</p>
      </div>
    </div>
  );
}
