import { motion } from 'framer-motion';
import Image from 'next/image';
import { FunctionComponent, useState } from 'react';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { fadeInUp, stagger } from '../animations';
import { IProject } from '../types';

const ProjectCard: FunctionComponent<{
  project: IProject,
  showDetail: null | number,
  setShowDetail: (id: null | number) => void 
}> = ({ project: {
  id,
  name,
  image_path,
  category,
  deployed_url,
  description,
  github_url,
  key_techs
}, showDetail, setShowDetail }) => {
  return (
    <div>
      <Image src={image_path} alt={name} className='cursor-pointer' onClick={() => setShowDetail(id)} height="150" width="300" layout="responsive" />

      <p className='my-2 text-center'>{name}</p>

      {
        showDetail === id && (
          <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100 md:p-10">
            <motion.div variants={stagger} initial="initial" animate="animate">
              <motion.div variants={fadeInUp} className='border-4 border-gray-100'>
                <Image src={image_path} alt={name} height="150" width="300" layout="responsive" />
              </motion.div>

              <motion.div className='flex justify-center my-4 space-x-3' variants={fadeInUp}>
                <a href={github_url} className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'>
                  <AiFillGithub /> <span>Github</span>
                </a>

                <a href={deployed_url} className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'>
                  <AiFillProject /> <span>Project</span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div variants={stagger} initial="initial" animate="animate">
              <motion.h2 variants={fadeInUp} className='mb-3 text-xl font-medium md:text-2xl'>{name}</motion.h2>
              <motion.h3 variants={fadeInUp} className='mb-3 font-medium'>{description}</motion.h3>

              <motion.div variants={fadeInUp} className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
                {
                  key_techs.map(tech => <span className='px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200' key={tech}>{tech}</span>)
                }
              </motion.div>
            </motion.div>

            <button className='absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200' onClick={() => setShowDetail(null)} ><MdClose size={30} /></button>
          </div>
        )
      }
    </div>
  )
};

export default ProjectCard;
