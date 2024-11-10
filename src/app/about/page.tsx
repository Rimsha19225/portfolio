import Link from "next/link"
import Image from "next/image"
import profile from "../../../public/images/profile.png"
const About = () => {
  return (
    <div>
      <div className="about w-full h-screen flex justify-center items-center gap-24 align-center bg-fixed">
        <div className="box">
          <div className="content">
            <Image 
            src={profile}
            alt="profile"
            className="image"
            />
            <h4>Someone Famous <br /> <span>UX/UI Designer</span></h4>
            <Link href="/work" className="a">My Work</Link>
          </div>
        </div>
        <div className="w-[38rem] bg-gradient-to-tl from-cyan-300 to-blue-400 p-6 rounded-2xl border-y-4 border-black shadow-xl shadow-cyan-300/70">
          <h5 className="text-[2.8rem] font-sans font-bold cursor-pointer">About Me</h5>
          <hr/>
          <p className="text-xl cursor-pointer whitespace-normal mt-1">&ldquo;I’m Rimsha Arshad, a final-year BS Mathematics student with a strong passion for coding, learning, and sharing knowledge. My journey in development began with a curiosity for how things work behind the scenes, evolving into a skillset in front-end and back-end technologies. With experience in TypeScript, React, and Next.js, I create intuitive, interactive applications, constantly driven by my love for problem-solving and innovation. Beyond development, I enjoy playing cricket, experimenting with new ideas, and mentoring others in the coding community.&ldquo;</p>
        </div>
      </div>
    </div>
  )
}

export default About
