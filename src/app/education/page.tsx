import Image from "next/image"
import school from "../../../public/images/school.jpg"
import college from "../../../public/images/college.jpg"
import uni from "../../../public/images/university.jpg"
const Education = () => {
  return (
    <div>
      <div className="education w-full h-screen flex justify-center items-center gap-2 align-center bg-fixed">
        <div className="grid grid-cols-3 gap-6">
          <div className="w-[23rem] h-[23rem] p-4 bg-gradient-to-tl from-blue-400 to-cyan-300 rounded-2xl shadow-xl shadow-cyan-500/70">
            <Image
            src={school}
            alt="school"
            className="w-[22rem] h-40 shadow-xl shadow-cyan-500/70 rounded"
            />
            <h3 className="font-semibold mt-2 text-xl mb-1">School</h3>
            <hr />
            <h3 className="mt-2 font-semibold font-sans text-[1rem]">Secondary Education (Science)</h3>
            <p>Sindh Public Secondary School</p>
            <p className="whitespace-normal">&ldquo;Broad foundation in core sciences, setting the groundwork for further studies in engineering and technology.&ldquo;</p>
          </div>
          <div className="w-[23rem] h-[23rem] p-4 bg-gradient-to-tl from-cyan-300 to-blue-400 rounded-2xl shadow-xl shadow-cyan-300/70">
          <Image
            src={college}
            alt="school"
            className="w-[22rem] h-40 shadow-xl shadow-cyan-500/70 rounded"
            />
            <h3 className="font-semibold mt-2 text-xl mb-1">College</h3>
            <hr />
            <h3 className="mt-2 font-semibold font-sans text-[0.95rem]">Higher Secondary Education (Pre Engineering)</h3>
            <p>Scholar Higher Secondary School</p>
            <p className="whitespace-normal">&ldquo;Emphasis on foundational sciences, including mathematics, physics, and chemistry.&ldquo;</p>
          </div>
          <div className="w-[23rem] h-[23rem] p-4 bg-gradient-to-tl from-blue-400 to-cyan-300 rounded-2xl shadow-xl shadow-cyan-500/70">
          <Image
            src={uni}
            alt="school"
            className="w-[22rem] h-40 shadow-xl shadow-cyan-500/70 rounded"
            />
            <h3 className="font-semibold mt-2 text-xl mb-1">University</h3>
            <hr />
            <h3 className="mt-2 font-semibold font-sans text-[1rem]">Bachelor of Science in Mathematics</h3>
            <p>Final Year, Jinnah University for Women</p>
            <p className="whitespace-normal">&ldquo;Focus on advanced mathematical theories, problem-solving, and analytical skills.&ldquo;</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
