import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>
        About Me
      </motion.h1>
      <div>
        {ABOUT_TEXT.map((item, index) => (
          <div key={index} className='mb-8 w-full lg:w-2/3 p-4 mx-auto'>
            <div className='border border-neutral-900 rounded-2xl p-4 h-full'>
              <div className='flex flex-wrap lg:justify-center'>
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}
                  className='w-full lg:w-1/3 mb-6 lg:mb-0 lg:mr-6'>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className='rounded-2xl w-full h-auto max-w-md max-h-72 object-cover' 
                  />            
                </motion.div>
                <motion.div 
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                  className='w-full max-w-xl lg:w-2/3'>
                  <h6 className='mb-2 font-semibold'>{item.title}</h6>
                  <p className='mb-4 text-neutral-400'>{item.description}</p>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;



