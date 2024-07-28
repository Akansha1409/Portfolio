import React from 'react';
import aboutImg from "../assets/logo.jpeg";
// import frontendImg from "../assets/frontend.jpeg"; // Replace with actual path to your image
// import mernStackImg from "../assets/mernstack.jpeg"; // Replace with actual path to your image
// import programmerImg from "../assets/programmer.jpeg"; // Replace with actual path to your image
import { motion } from "framer-motion";
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:0.5}}
        className=' my-20 text-center text-4xl'>About Me</motion.h1>
        <div>
            {ABOUT_TEXT.map((aboutImg, index)=> (
             <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1}}
                 className='w-full lg:w-1/4'>
                <img src={aboutImg.image} width={150} height={150} alt={aboutImg.title} className='mb-6 rounded'/>            
        </motion.div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
        <h6 className='mb-2 font-semibold'>{aboutImg.title}</h6>
        <p className='mb-4 text-neutral-400'>{aboutImg.description}</p>
        
        </motion.div>
    </div>
  ))}
  </div>
  </div>
  );
}

export default About;



