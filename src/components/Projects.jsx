import { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [expanded, setExpanded] = useState(false);

  const toggleProjects = () => {
    setExpanded(!expanded);
    setVisibleProjects(expanded ? 3 : PROJECTS.length);
  };

  return (
    <div className='border-b border-neutral-800 pb-4'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>
        Projects
      </motion.h1>
      <div className='flex flex-wrap justify-center'>
        {PROJECTS.slice(0, visibleProjects).map((project, index) => (
          <div key={index} className='mb-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4'>
            <div className='rounded-xl p-4 h-full flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-transparent bg-gradient-to-r from-gray-700 to-gray-800'>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className='w-full'>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className='mb-4 rounded-2xl w-full h-auto max-h-48 object-cover' 
                />            
              </motion.div>
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className='w-full flex flex-col'>
                <h6 className='mb-2 font-semibold text-white'>{project.title}</h6>
                <p className='mb-4 text-neutral-400'>{project.description}</p>
                <div className='mb-4 flex flex-wrap'>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className='mr-2 mb-2 inline-block rounded bg-gray-700 px-2 py-1 text-sm font-medium text-gray-300'>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='links flex flex-wrap space-x-4'>
                  <a href={project.SourceCode} target="_blank" rel="noopener noreferrer" className='text-purple-400 hover:underline'>Source Code</a>
                  <a href={project.liveProject} target="_blank" rel="noopener noreferrer" className='text-purple-400 hover:underline'>Live Project</a>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
        <div className='text-center w-full'>
          <button 
            onClick={toggleProjects}
            className='mt-4 text-purple-500 hover:text-purple-300 font-medium'>
            {expanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;






