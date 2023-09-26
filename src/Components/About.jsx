import React from 'react'
import {Typewriter, Cursor} from 'react-simple-typewriter'


export default function About() {

  return (
    <section id='about'>
        <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center h-auto'>
            <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>

                <p className="mb-8 leading-relaxed text-3xl flex flex-row text-white"> Hi There
                    <img src="./Public/Image/Hiiii.png" alt="Hi There" className='px-3 animate-waving-hand' />
                 </p>

                <h1 className='title-font text-5xl mb-7 -mt-7 font-medium text-whit text-gray-400'>
                    I
                    <span className='font-bold ml-4 bg-gradient-to-tl from-yellow-300 via-cyan-300 to-pink-400 text-transparent bg-clip-text
                     font-display tracking-tighter'>
                        <Typewriter 
                        words={['am Bishal Mondal', 'am a Web Designer', 'am a Frontend Web Developer', 'Love To Build Amazing Web Apps']}
                        loop={false}
                        typeSpeed={70}
                        deleteSpeed={100}
                        delaySpeed={1000}
                        />
                    </span>
                    <Cursor className="text-red-400"/>
                </h1>
                <div className="flex justify-center">
                    <a
                    href="#contact"
                    className="inline-flex text-black bg-cyan-400 border-0 py-2 px-6 focus:outline-none hover:bg-black hover:text-white rounded text-lg">
                    Connect With Me
                    </a>
                    <a
                    href="#projects"
                    className="ml-4 inline-flex text-white bg-black hover:bg-cyan-400 hover:text-transparent hover:bg-clip-text border-0 py-2 px-6 focus:outline-none rounded text-lg">
                    See My Past Work
                    </a>
                </div>
            </div>


            <div class="devPic" className="relative bg-black w-[400px] h-[400px] rounded-full overflow-hidden before:content-[''] before:absolute before:inset-[-10px_140px] before:bg-gradient-to-r from-cyan-400 to-pink-400 before:animate-spin
            hover:before:inset-[-20px_0px] after:content-[''] after:absolute after:inset-[7px] after:bg-black after:rounded-full after:z-[1]">

                <div class="content" className='absolute inset-[30px] border-4 z-[3] border-black rounded-full overflow-hidden flex justify-center items-center flex-col'>

                    <img
                    className='absolute w-[149%] top-[0px] left-[0px] h-full object-cover pointer-events-none z-[3] transition-[0.5s]'
                    alt="Bishal Mondal"
                    src="./Public/Image/profile.jpg"
                    />
                </div>
            </div>

        </div>
    </section>

  )
}

