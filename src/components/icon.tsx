import Link from "next/link"
import Image from "next/image"
import github from "../../public/images/github.png"
import whatsApp from "../../public/images/whatsapp.png"
import facebook from "../../public/images/facebook.png"
import instagram from "../../public/images/instagram.png"
import gmail from "../../public/images/gmail.png"
const Icon = () => {
  return (
    <div>
      <ul className="flex gap-3 mt-2">
        <Link href="#" className="hover:bg-gradient-to-l from-blue-400 to-cyan-300 shadow-2xl shadow-slate-600 rounded-full hover:rounded-full w-16 h-16"><Image src={gmail} alt="gmail" width={50} height={50} className="pt-[0.45rem] ml-[0.45rem]"/></Link>
        <Link href="#" className="hover:bg-gradient-to-r from-blue-400 to-cyan-300 shadow-2xl shadow-slate-600 rounded-full hover:rounded-full w-16 h-16"><Image src={instagram} alt="instagram" width={50} height={50} className="pt-[0.45rem] ml-[0.45rem]"/></Link>
        <Link href="#" className="hover:bg-gradient-to-l from-blue-400 to-cyan-300 shadow-2xl shadow-slate-600 rounded-full hover:rounded-full w-16 h-16"><Image src={facebook} alt="facebook" width={50} height={50} className="pt-[0.45rem] ml-[0.45rem]"/></Link>
        <Link href="#" className="hover:bg-gradient-to-r from-blue-400 to-cyan-300 shadow-2xl shadow-slate-600 rounded-full hover:rounded-full w-16 h-16"><Image src={github} alt="github" width={50} height={50} className="pt-[0.45rem] ml-[0.45rem]"/></Link>
        <Link href="#" className="hover:bg-gradient-to-l from-blue-400 to-cyan-300 shadow-2xl shadow-slate-600 rounded-full hover:rounded-full w-16 h-16"><Image src={whatsApp} alt="whatsApp" width={50} height={50} className="pt-[0.45rem] ml-[0.45rem]"/></Link>
      </ul>
    </div>
  )
}

export default Icon
