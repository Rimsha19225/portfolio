import profile from "../../../public/images/profile.png"
import Image from "next/image"

const Resume = () => {
  return (
    <div>
      <div className="body">
        <h1>Rimsha Arshad Resume</h1>
        <div className="container">
            <div className="aside-portion">
                <aside className="w-[40%] float-left bg-teal-200 p-[18px] shadow-xl shadow-cyan-300/70">
                    <Image src={profile} alt="profile" className="img" />
                    <h2 className="font-serif">Objective</h2>
                    <p className="font-semibold text-blue-600 font-mono">To get an opportunity where I can make the best of my potential and contribute to the organization’s growth.</p>
                    <h2>Contact</h2>
                    <ul className="font-semibold text-blue-600 font-mono">
                        <li> +92 3131156294</li>
                        <li>Rimsha M Arshad</li>
                       <li>adeelarshad8900@gmail</li>
                       <li>House no 1726/1875 Ghouse Nagar Baldia Town Karachi</li>
                    </ul>
                </aside>
            </div>
            <div className="top-area">
                <h2>Rimsha</h2>
            </div>
            <div className="contents">
            <h5 className="text-2xl ml-[42%] font-bold shadow shadow-cyan-300 mb-2 font-serif p-1 mt-3">Education</h5>
            <div className="ml-[43%] text-[1rem]">
                <h6>👉 GRADUATION: BS Mathematics (progress)</h6>
                <h6>👉 FSC: Pre-Engineering </h6>
                <h6>👉 MATRIC: Science</h6>
            </div>
            <h5 className="text-2xl ml-[42%] font-bold shadow shadow-cyan-300 mb-2 font-serif p-1 mt-3">Computer Skills</h5>
            <div className="ml-[43%] text-[1rem]">
                <h6>👉 Microsoft Word, PowerPoint, Excel</h6>
                <h6>👉 HTML, CSS, JavaScript</h6>
                <h6>👉 TypeScript</h6>
                <h6>👉 Logo Designer</h6>
            </div>
            <h5 className="text-2xl ml-[42%] font-bold shadow shadow-cyan-300 mb-2 font-serif p-1 mt-3">Hobies</h5>
            <div className="ml-[43%] text-[1rem]">
                <h6>👉 Community Involvement</h6>
                <h6>👉 Learning Languages</h6>
                <h6>👉 Sports</h6>
                <h6>👉 Traveling</h6>
            </div>
            <h5 className="text-2xl ml-[42%] font-bold shadow shadow-cyan-300 mb-2 font-serif p-1 mt-3">Skills</h5>
            <div className="ml-[43%] text-[1rem]">
                <h6>👉 self-discipline</h6>
                <h6>👉 Work ethics</h6>
                <h6>👉 Public Relation</h6>
                <h6>👉 Creativity</h6>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Resume
