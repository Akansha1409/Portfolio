import {motion} from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {Link} from 'react-router-dom';
const email = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div>
        <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}
    className="my-10 text-center text-4xl">Let's Connect</motion.h1>
    <div className=" flex flex-row items-center justify-center text-center  gap-4  text-4xl">
        <Link to="https://github.com/Akansha1409">
        <FaGithub/>
        </Link>
        <a href="https://www.linkedin.com/in/akansha-gautam-b29a19254">
        <FaLinkedin/>
        </a>
        <a href="https://www.instagram.com/akansha14_09_">
        <FaInstagram/>
        </a>
    </div>
        </div> 
    <div>
        <form className="flex flex-col ">
          <div className="mb-6">
          <label htmlFor="email" className="text-white block  text-sm mb-2 font-medium">
            Your email
          </label>
          <input
            type="email"
            id="email"
            required
            className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="example@gmail.com"
            />
            </div>
            <div className="mb-6">
            <label htmlFor="subject"
            className="text-white block  text-sm mb-2 font-medium">
              Subject
            </label>
            <input
            type="text"
            id="subject"
            required
            className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="subject"
            />
            </div>
            <div className="mb-6">
            <label htmlFor="message"
            className="text-white block  text-sm mb-2 font-medium">
              Message
            </label>
            <textarea
            name="message"
            id="message"
            required
            className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Let's talk about..."
            />
            </div>
            <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
              Send Message
            </button>

        </form>
    </div>
    </section>
    </div>
  )
}

export default email
