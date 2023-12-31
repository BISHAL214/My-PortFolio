import React from 'react'
import {Typewriter, Cursor} from 'react-simple-typewriter'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'


export default function About() {

  return (
    <section id='about' className='bg-transparent'>
        <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center h-screen transparent'>
            <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>

                <motion.p initial={{x: -500}} animate={{x: 0}} transition={{ delay: 0.5 }}

                    className="mb-8 text-3xl flex flex-row text-white bg-transparent"
                > 

                    Hi There

                    <img src="./Hiiii.png" alt="Hi There" className='px-3' />
                </motion.p>

                <h1 className='title-font text-5xl mb-7 -mt-7 font-medium text-white'>

                    I am

                    <span className='font-bold ml-4 bg-gradient-to-tl from-yellow-300 via-cyan-300 to-pink-400 text-transparent bg-clip-text
                        font-display tracking-tighter'>
                        <Typewriter 
                            words={['Bishal Mondal', 'a Web Designer', 'a Frontend Web Developer']}
                            loop={false}
                            typeSpeed={150}
                            deleteSpeed={150}
                            delaySpeed={1500}
                        />
                    </span>
                    <Cursor 
                        cursorBlinking={true}
                        cursorStyle="_"
                    />
                </h1>

                <div className="flex justify-center">

                    <Link to='contact' spy={true} smooth={true}>

                        <motion.a
                        whileHover={{scale: 1.1}}
                        transition={{type: "spring", stiffness: 100, damping: 5}}
                        className="inline-flex text-white bg-transparent border-2 hover:border-none py-2 px-6 focus:outline-none hover:bg-cyan-500 hover:text-black rounded-[40px] text-lg
                        hover:shadow-cyan-400 hover:shadow-2xl cursor-pointer">
                        Connect With Me
                        </motion.a>

                    </Link>

                    <Link to='projects' spy={true} smooth={true}>

                        <motion.a
                        whileHover={{scale: 1.1}}
                        transition={{type: "spring", stiffness: 100, damping: 5}}
                        className="ml-4 inline-flex text-white cursor-pointer bg-transparent border-2 hover:border-none hover:bg-cyan-400 hover:text-black py-2 px-6 focus:outline-none rounded-[40px] hover:shadow-cyan-400 hover:shadow-2xl text-lg">
                        See My Past Work
                        </motion.a>

                    </Link>

                </div>
            </div>


            <div class="devPic" className="relative bg-black w-[400px] h-[400px] rounded-full overflow-hidden before:content-[''] before:absolute before:inset-[-10px_140px] before:bg-gradient-to-r from-cyan-400 to-pink-400 before:animate-rotate
            hover:before:inset-[-20px_0px] after:content-[''] after:absolute after:inset-[7px] after:bg-transparent after:rounded-full after:z-[1]">

                <div class="content" className='absolute w-[383px] h-[383px] top-[10px] left-[9px] inset-[30px] border z-[3] border-transparent rounded-full overflow-hidden flex justify-center items-center flex-col'>

                    <img
                    className='absolute w-[149%] top-[0px] left-[0px] h-full object-cover pointer-events-none z-[3] transition-[0.5s]'
                    alt="Bishal Mondal"
                    src="./profile.jpg"
                    />
                </div>
            </div>

        </div>
    </section>

  )
}

