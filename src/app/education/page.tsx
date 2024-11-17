import Image from "next/image"
import school from "../../../public/images/school.jpg"
import college from "../../../public/images/college.jpg"
import uni from "../../../public/images/university.jpg"
const Education = () => {
  return (
    <div>
      <div className="education w-full h-screen flex justify-center shadow-black shadow-2xl items-center gap-2 align-center bg-fixed">
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
            <p>Sindh Public Secondary School.</p>
            <p className="whitespace-normal text-justify">&ldquo;Broad foundation in core sciences, setting the groundwork for further studies in engineering and technology.&ldquo;</p>
          </div>
          <div className="w-[23rem] h-[23rem] p-4 bg-gradient-to-tl from-cyan-300 to-blue-400 rounded-2xl shadow-xl shadow-cyan-300/70">
          <Image
            src={college}
            alt="school"
            className=" w-[22rem] h-40 shadow-xl shadow-cyan-500/70 rounded"
            />
            <h3 className="font-semibold mt-2 text-xl mb-1">College</h3>
            <hr />
            <h3 className="mt-2 font-semibold font-sans text-[0.95rem]">Higher Secondary Education (Pre Engineering)</h3>
            <p>Scholar Higher Secondary School.</p>
            <p className="whitespace-normal text-justify">&ldquo;Emphasis on foundational sciences, including mathematics, physics, and chemistry.&ldquo;</p>
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
            <p>Final Year, Jinnah University for Women.</p>
            <p className="whitespace-normal text-justify">&ldquo;Focus on advanced mathematical theories, problem-solving, and analytical skills.&ldquo;</p>
          </div>
        </div>
      </div>
      <div className="w-[75%] h-[100vh] flex flex-col ml-52 justify-center whitespace-pre-line">
        <h4 className="text-center text-blue-900 font-bold text-5xl mb-6">More Detail</h4>
        <p className="font-semibold text-xl text-justify">I am currently in my final year of a BS Mathematics program, building on a strong foundation in Science and Pre-engineering from my earlier studies. My academic journey began with a focus on science at the secondary level, where I developed a keen interest in understanding complex concepts and logical problem-solving. Moving into Pre-engineering in higher secondary education, I was able to deepen my analytical thinking, particularly in mathematics and physics, which laid the groundwork for my current studies.</p>
        <p className="font-semibold text-xl text-justify">In my undergraduate program, I have explored advanced topics in mathematics, including calculus, algebra, and differential equations. These subjects have not only enhanced my technical knowledge but also refined my critical thinking and analytical skills. Additionally, my coursework has involved practical applications of mathematical theories, which has allowed me to understand the importance of precision, attention to detail, and logical reasoning in solving real-world problems.</p>
        <p className="font-semibold text-xl text-justify">This academic experience has also enabled me to pursue interests beyond pure mathematics, including coding and project work in web development, where I’ve applied mathematical concepts to programming. I am eager to integrate my educational background into a professional role, where I can leverage these skills and continue to learn and grow.</p>
        <p className="font-semibold text-xl text-justify"></p>
      </div>
    </div>
  )
}

export default Education
