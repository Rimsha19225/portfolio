import Link from 'next/link';
import  Image  from 'next/image';
import logo from "../../public/images/black_vector-removebg-preview.png"
const Navbar = () => {
  return (
    <div className='flex justify-between bg-gradient-to-t from-cyan-500 to-blue-500 h-24 border-black border-y-4 fixed w-screen z-10'>
      <div className= 'ml-8 cursor-pointer'>
        <Image
        src={logo}
        alt="logo"
        width={100}
        height={100}
        className="hover:bg-gradient-to-l from-blue-300 to-cyan-300 shadow-2xl shadow-slate-900 rounded-full hover:rounded-full w-[4.4rem] hover:w-[4.8rem] h-[4.4rem] hover:h-[4.8rem] mt-[0.5rem] hover:mt-[0.2rem]"
        />
      </div>
      <div className='flex gap-6 mr-16 mt-[1.8rem] text-xl font-semibold font-sans'>
        <Link href={"/"} className='hover:underline hover:underline-offset-[6px]' style={{textDecorationThickness:"3px"}}>Home</Link>
        <Link href={"/about"} className='hover:underline hover:underline-offset-[6px]' style={{textDecorationThickness:"3px"}}>About Us</Link>
        <Link href={"/skills"} className='hover:underline hover:underline-offset-[6px]' style={{textDecorationThickness:"3px"}}>Skills</Link>
        <Link href={"education"} className='hover:underline hover:underline-offset-[6px]' style={{textDecorationThickness:"3px"}}>Education</Link>
        <Link href={"work"} className='hover:underline hover:underline-offset-[6px]' style={{textDecorationThickness:"3px"}}>Work</Link>
        <Link href={"contact"} className='hover:underline hover:underline-offset-[6px]' style={{textDecorationThickness:"3px"}}>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
