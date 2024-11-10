import Image from "next/image"
import Link from "next/link"
import PCB from "../../../public/images/pcb_ass.jpg"
import panacloud from "../../../public/images/panacloud_ass.jpg"
import product from "../../../public/images/product_ass.jpg"
import intro from "../../../public/images/intro_ass.jpg"
import food from "../../../public/images/food_ass.jpg"
import resuma from "../../../public/images/resuma_ass.jpg"
import world from "../../../public/images/world.jpg"
import resuma_form from "../../../public/images/resuma_form.jpg"

const Work = () => {
  return (
    <div className="work w-full h-auto flex justify-center items-center gap-2 align-center bg-fixed pb-14">
      <div className="grid grid-cols-3 gap-10 pt-40 justify-center items-center">
        <div className="w-[20rem] h-[22rem] border-solid border-y-4 border-black bg-cyan-200 rounded-xl shadow-2xl shadow-cyan-500/70">
          <Image src={PCB} alt="" width={150} height={150} className="w-screen h-48"/>
          <Link href={"https://pcb-bice.vercel.app/"} target="_blank"><button className="w-[20rem] bg-blue-400 text-black text-center mt-3 p-3 font-semibold text-xl">PCB</button></Link>
          <Link href={"https://github.com/Rimsha19225/PCB"} target="_blank"><button className="w-[20rem] bg-blue-400 text-black text-center mt-4 p-3 font-semibold text-xl">Source Code</button></Link>
        </div>
        <div className="w-[20rem] h-[22rem] border-solid border-y-4 border-black bg-cyan-200 rounded-xl shadow-2xl shadow-cyan-500/70">
          <Image src={world} alt="" width={150} height={150} className="w-screen h-48"/>
          <Link href={"https://world-country-eta.vercel.app/"} target="_blank"><button className="w-[20rem] bg-blue-400 text-black text-center mt-3 p-3 font-semibold text-xl">Countries Detail</button></Link>
          <Link href={"https://github.com/Rimsha19225/world_country"} target="_blank"><button className="w-[20rem] bg-blue-400 text-black text-center mt-4 p-3 font-semibold text-xl">Source Code</button></Link>
        </div>
        <div className="w-[20rem] h-[22rem] border-solid border-y-4 border-black bg-cyan-200 rounded-xl shadow-2xl shadow-cyan-500/70">
          <Image src={panacloud} alt="" width={150} height={150} className="w-screen h-48"/>
          <Link href={"https://final-assignment-red.vercel.app/"} target="_blank"><button className="w-[20rem] bg-blue-400 text-black text-center mt-3 p-3 font-semibold text-xl">Pana Cloud</button></Link>
          <Link href={"https://github.com/Rimsha19225/final-assignment"} target="_blank"><button className="w-[20rem] bg-blue-400 text-black text-center mt-4 p-3 font-semibold text-xl">Source Code</button></Link>
        </div>
        <div className="w-[20rem] h-[22rem] border-solid border-y-4 border-black bg-cyan-200 rounded-xl shadow-2xl shadow-cyan-500/70">
          <Image src={intro} alt="" width={150} height={150} className="w-screen h-48"/>
          <Link href={"https://class-2-six.vercel.app/"} target="_blank"><button className="w-[20rem] bg-blue-400 text-black text-center mt-3 p-3 font-semibold text-xl">Intro</button></Link>
          <Link href={"https://github.com/Rimsha19225/Quarter_2/tree/main/app"} target="_blank"><button className="w-[20rem] bg-blue-400 text-black text-center mt-4 p-3 font-semibold text-xl">Source Code</button></Link>
        </div>
        <div className="w-[20rem] h-[22rem] border-solid border-y-4 border-black bg-cyan-200 rounded-xl shadow-2xl shadow-cyan-500/70">
          <Image src={resuma_form} alt="" width={150} height={150} className="w-screen h-48"/>
          <Link href={"https://mile-1-sa31.vercel.app/"} target="_blank"><button className="w-[20rem] bg-blue-400 text-black text-center mt-3 p-3 font-semibold text-xl">Resuma form</button></Link>
          <Link href={"https://github.com/Rimsha19225/Mile_1/tree/main/Milestone%205"} target="_blank"><button className="w-[20rem] bg-blue-400 text-black text-center mt-4 p-3 font-semibold text-xl">Source Code</button></Link>
        </div>
        <div className="w-[20rem] h-[22rem] border-solid border-y-4 border-black bg-cyan-200 rounded-xl shadow-2xl shadow-cyan-500/70">
          <Image src={resuma} alt="" width={150} height={150} className="w-screen h-48"/>
          <Link href={"https://mile-1-iota.vercel.app/"} target="_blank"><button className="w-[20rem] bg-blue-400 text-black text-center mt-3 p-3 font-semibold text-xl">Resuma</button></Link>
          <Link href={"https://github.com/Rimsha19225/Mile_1"} target="_blank"><button className="w-[20rem] bg-blue-400 text-black text-center mt-4 p-3 font-semibold text-xl">Source Code</button></Link>
        </div>
        <div className="w-[20rem] h-[22rem] border-solid border-y-4 border-black bg-cyan-200 rounded-xl shadow-2xl shadow-cyan-500/70">
          <Image src={food} alt="" width={150} height={150} className="w-screen h-48"/>
          <Link href={"https://food-eight-kappa.vercel.app/"} target="_blank"><button className="w-[20rem] bg-blue-400 text-black text-center mt-3 p-3 font-semibold text-xl">Dishes</button></Link>
          <Link href={"https://github.com/Rimsha19225/food"} target="_blank"><button className="w-[20rem] bg-blue-400 text-black text-center mt-4 p-3 font-semibold text-xl">Source Code</button></Link>
        </div>
        <div className="w-[20rem] h-[22rem] border-solid border-y-4 border-black bg-cyan-200 rounded-xl shadow-2xl shadow-cyan-500/70">
          <Image src={product} alt="" width={150} height={150} className="w-screen h-48"/>
          <Link href={"https://class-3-mu.vercel.app/"} target="_blank"><button className="w-[20rem] bg-blue-400 text-black text-center mt-3 p-3 font-semibold text-xl">Products</button></Link>
          <Link href={"https://github.com/Rimsha19225/class-3"} target="_blank"><button className="w-[20rem] bg-blue-400 text-black text-center mt-4 p-3 font-semibold text-xl">Source Code</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Work
