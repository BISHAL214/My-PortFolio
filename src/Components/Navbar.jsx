import React from "react";
import {Link} from 'react-scroll'


export default function Navbar() {



  return (
            <header className="bg-transparent md:sticky top-0 z-10">

                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                    <Link to="about" spy={true} smooth={true}>
                        <p  className="ml-3 text-sm bg-gradient-to-bl from-green-500 to-blue-400 text-transparent bg-clip-text
                            hover:animate-ping cursor-pointer">

                            B | M

                        </p>

                    </Link>

                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">

                        <Link to="projects" spy={true} smooth={true}>

                            <p  className="mr-5 hover:bg-gradient-to-bl hover:from-green-500 hover:to-blue-400 hover:text-transparent           bg-clip-text font-bold hover:animate-bounce cursor-pointer">

                                Past Work

                            </p>

                        </Link>

                        <Link to="skills" spy={true} smooth={true}>

                            <p  className="mr-5 hover:bg-gradient-to-bl hover:from-green-500 hover:to-blue-400 hover:text-transparent           bg-clip-text font-bold hover:animate-bounce cursor-pointer">

                                Skills
                                
                            </p>

                        </Link>

                        <Link to="contact" spy={true} smooth={true}>

                            <p  className="mr-5 hover:bg-gradient-to-bl hover:from-green-500 hover:to-blue-400 hover:text-transparent bg-clip-text font-bold hover:animate-bounce cursor-pointer">

                                Contact Me
                                
                            </p>

                        </Link>

                    </nav>

                </div>

            </header>
  );
}
