import React from 'react'
import {FaSquareGithub, FaLinkedin, FaFacebookF} from 'react-icons/fa6'
import {GiSelfLove} from 'react-icons/gi'
import {Link} from 'react-scroll'

export default function Footer() {



  return (
    <footer className='bg-transparent'>
              <div className='flex justify-center items-center flex-col py-7 h-[200px] bg-transparent'>
          <h1 className=' bg-gradient-to-r from-cyan-400 via-yellow-400 to-pink-400 text-transparent bg-clip-text flex gap-2 justify-center text-2xl italic pt-3 hover:font-medium'>Get In Touch with Me </h1>
          <GiSelfLove size={25} className='w-[40px] mt-2' /> 
          <li className='py-7 px-7 flex flex-row justify-center'>
            <a href="https://github.com/BISHAL214"> <FaSquareGithub size={25}/> </a>
            <a className="px-5" href="https://www.linkedin.com/in/bishal-mondal-1521aa21b/"> <FaLinkedin size={25}/> </a>
            <a href="https://www.facebook.com/bishal.mondal.12720100/">  <FaFacebookF size={25}/> </a>
          </li>
          <span className="text-sm bg-gradient-to-r from-cyan-400 via-yellow-400 to-pink-400 text-transparent bg-clip-text sm:text-center">

            <Link to='about' spy={true} smooth={true }>

              <p className="hover:bg-gradient-to-r from-blue-300 via-red-400 to-orange-400 text-transparent bg-clip-text cursor-pointer">
              ©2023  Bishal Mondal. All Rights Reserved.
              </p>

            </Link>

        </span>
        </div>
    </footer>
  )
}
