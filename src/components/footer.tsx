import Link from "next/link"
import Image from "next/image"
import github from "../../public/images/github.png"
import whatsApp from "../../public/images/whatsapp.png"
import facebook from "../../public/images/facebook.png"
import instagram from "../../public/images/instagram.png"
import gmail from "../../public/images/gmail.png"

const Footer = () => {
  return (
    <div className="footer w-full h-64 bg-gray-300 flex justify-center gap-20">
      <div className="w-[20%] whitespace-pre-line p-5">
        <h4 className="text-cyan-800 text-3xl font-semibold font-mono">Rimsha Arshad</h4>
        <p className="text-justify">I’m Rimsha, a BS Mathematics final year student with skills in TypeScript, React, and project management. I enjoy coding, leading projects, and creating interactive applications, eager to start my professional journey.</p>
      </div>
      <div className="w-[3px] h-56 mt-4 bg-gray-400"></div>

      <div className="p-5">
        <h4 className="text-cyan-800 text-3xl font-semibold font-mono mb-2">Quick Links</h4>
        <div className="flex flex-col">
          <Link href={"/"} className='pl-3 pb-2' style={{textDecorationThickness:"3px"}}>👉 Home</Link>
          <Link href={"work"} className='pl-3 pb-2' style={{textDecorationThickness:"3px"}}>👉 Work</Link>
          <Link href={"contact"} className='pl-3 pb-2' style={{textDecorationThickness:"3px"}}>👉 Contact</Link>
        </div>
      </div>
      <div className="w-[3px] h-56 mt-4 bg-gray-400"></div>

      <div className="p-5">
        <h4 className="text-cyan-800 text-3xl font-semibold font-mono mb-2">Social Links</h4>
        <ul className="flex gap-3">
          <Link href="#" className="hover:bg-gradient-to-l from-blue-400 to-cyan-300 shadow-2xl shadow-slate-600 rounded-full hover:rounded-full w-10 h-10"><Image src={gmail} alt="gmail" width={30} height={30} className="pt-[0.35rem] ml-[0.35rem]"/></Link>
          <Link href="#" className="hover:bg-gradient-to-r from-blue-400 to-cyan-300 shadow-2xl shadow-slate-600 rounded-full hover:rounded-full w-10 h-10"><Image src={instagram} alt="instagram" width={30} height={30} className="pt-[0.35rem] ml-[0.35rem]"/></Link>
          <Link href="#" className="hover:bg-gradient-to-l from-blue-400 to-cyan-300 shadow-2xl shadow-slate-600 rounded-full hover:rounded-full w-10 h-10"><Image src={facebook} alt="facebook" width={30} height={30} className="pt-[0.35rem] ml-[0.35rem]"/></Link>
          <Link href="#" className="hover:bg-gradient-to-r from-blue-400 to-cyan-300 shadow-2xl shadow-slate-600 rounded-full hover:rounded-full w-10 h-10"><Image src={github} alt="github" width={30} height={30} className="pt-[0.35rem] ml-[0.35rem]"/></Link>
          <Link href="#" className="hover:bg-gradient-to-l from-blue-400 to-cyan-300 shadow-2xl shadow-slate-600 rounded-full hover:rounded-full w-10 h-10"><Image src={whatsApp} alt="whatsApp" width={30} height={30} className="pt-[0.35rem] ml-[0.35rem]"/></Link>
        </ul>
        <h4 className="mt-5">Privacy policy terms & conditions Partners</h4>
      </div>
    </div>
  )
}

export default Footer
