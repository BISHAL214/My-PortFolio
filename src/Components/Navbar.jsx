import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";




export default function Navbar() {


  return (
            <header className="bg-black md:sticky top-0 z-10">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="title-font font-medium text-white mb-4 md:mb-0">
                        <a href="#about" className="ml-3 text-3xl bg-gradient-to-bl from-green-500 to-blue-400 text-transparent bg-clip-text
                        hover:animate-ping">
                            BM
                        </a>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                        <a href="#projects" className="mr-5 hover:bg-gradient-to-bl hover:from-green-500 hover:to-blue-400 hover:text-transparent bg-clip-text font-bold hover:animate-bounce">
                            Past Work
                        </a>
                        <a href="#skills" className="mr-5 hover:bg-gradient-to-bl hover:from-green-500 hover:to-blue-400 hover:text-transparent bg-clip-text font-bold hover:animate-bounce">
                            Skills
                        </a>
                        <a href="#contact" className="mr-5 hover:bg-gradient-to-bl hover:from-green-500 hover:to-blue-400 hover:text-transparent bg-clip-text font-bold hover:animate-bounce">
                            Contact Me
                        </a>
                    </nav>
                </div>
            </header>
  );
}
