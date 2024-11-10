import Link from "next/link"

const Contact = () => {
  return (
    <div className="contact w-full h-screen bg-fixed">
      <h1 className="text-center text-cyan-500 font-bold text-4xl pt-28">Contact Me</h1>
      <div className='w-[60%] h-[72vh] ml-72 mt-1 bg-gradient-to-tl from-blue-400 to-cyan-200 rounded-3xl p-8 border-solid border-y-4 border-black shadow-2xl shadow-cyan-500/70'>
        <form action="Post">
            <legend className='text-xl font-bold text-blue-900'>Name:</legend>
            <input type="text" placeholder='Enter Your Name' className='w-[100%] p-2 rounded-xl' />
            <legend className='text-xl font-bold text-blue-900 mt-2'>Email:</legend>
            <input type="email" placeholder='Enter Your Email' className='w-[100%] p-2 rounded-xl' />
            <legend className='text-xl font-bold text-blue-900 mt-2'>Phone NO:</legend>
            <input type="number" placeholder='Enter Your Phone number' className='w-[100%] p-2 rounded-xl' />
            <legend className='text-xl font-bold text-blue-900 mt-2 mb-2'>Gender:</legend>
            <span className=" bg-white w-[100%] p-2 rounded-xl">
              Male
              <input type="radio" name='gender' value="male" className='ml-4 mr-4'/>
              Female
              <input type="radio" name='gender' value="female" className='ml-4'/>
            </span>
            <legend className='text-xl font-bold text-blue-900 mt-2'>Comment:</legend>
            <textarea rows={5} cols={50} placeholder='write Message....' className='w-[100%] h-[10vh] p-2 rounded-xl'></textarea>
            <Link href="mailto:adeelarshad8900@gmail.com"><button className='w-28 p-2 mt-2 bg-white rounded-2xl text-blue-900 font-bold'>Submit</button></Link>
        </form>
      </div>
    </div>
  )
}

export default Contact
