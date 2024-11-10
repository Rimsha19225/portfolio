import Link from "next/link";
import Image from "next/image"
import profile from "../../public/images/profile.png"
import Icon from "@/components/icon";
import About from "./about/page"
import Skills from "./skills/page";
import Education from "./education/page";

export default function Home() {
  return (
    <div className="overflow-x-auto whitespace-nowrap">
      <div className="home w-full h-screen flex justify-center items-center gap-24 align-center bg-fixed">
        <div className="w-[30rem] bg-gradient-to-tl from-cyan-300 to-blue-400 p-6 rounded-2xl border-y-4 border-black shadow-xl shadow-cyan-300/70">
          <h3 className="text-[2.8rem] font-sans font-bold cursor-pointer">RIMSHA ARSHAD</h3>
          <hr/>
          <p className="text-xl cursor-pointer whitespace-normal mt-1">&ldquo;As a passionate developer with a strong foundation in web technologies, I craft responsive and interactive digital experiences. From front-end finesse to back-end logic, I blend creativity with technical expertise to bring ideas to life.&ldquo;</p>
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
      <About />
      <Skills />
      <Education />
    </div>
  );
}
