import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { BsDiscord } from 'react-icons/bs';

import { useTheme } from 'next-themes';
import Image from 'next/image';

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div>
      <Image src="https://github.com/rodrigofplourenco.png" alt="User Avatar" className='mx-auto rounded-full' height="128px" width="128px" layout="intrinsic" quality="100" />
      <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'><span className='text-purple'>Rodrigo</span> Lourenço</h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>Full-stack developer</p>

      <div className='flex justify-around w-9/12 mx-auto my-5 text-purple md:w-full'>
        <a href="https://github.com/rodrigofplourenco/">
          <AiFillGithub className='w-8 h-8 cursor-pointer' />
        </a>
        <a href="https://www.instagram.com/rodrigofplourenco/">
          <AiFillInstagram className='w-8 h-8 cursor-pointer' />
        </a>
        <a href="https://discord.com/invite/KhNtBPnbUr">
          <BsDiscord className='w-8 h-8 cursor-pointer' />
        </a>
      </div>

      <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200' style={{margin: '0 -1rem'}}>
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span>Viseu, Portugal</span>
        </div>

        <p className='my-2'>rodrigofplourenco2002@gmail.com</p>
        <p className='my-2'>+351 968362348</p>
      </div>

      <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-purple to-dark focus:outline-none dark:to-purple-300' onClick={() => window.open('mailto:rodrigofplourenco2002@gmail.com')}>Email Me</button>
      
      <button onClick={changeTheme} className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-purple to-dark dark:to-purple-300'>Toggle Theme</button>
    </div>
  )
};

export default Sidebar;
