import React, { useRef, useEffect } from 'react'
import {CodeIcon} from "@heroicons/react/solid"
import {projects} from "../data"
import VanillaTilt from 'vanilla-tilt'

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }


export default function Projects() {

    const options = {
        scale: 1.01,
        speed: 10,
        max: 30
    }
    

  return (
    <section id="projects" className="text-gray-400 body-font bg-transparent">

        <div className="container px-5 py-24 mx-auto text-center lg:px-40 bg-transparent">

            <div className="flex flex-col w-full mb-20">

                <CodeIcon className="mx-auto inline-block w-10 mb-0" />

                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">

                    Apps I've Built

                </h1>

                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">

                    I Created some amazing websites which helps me to understand all the logics behind the every projects and designing knowledge. 

                </p>

            </div>


                <div className="flex flex-wrap -m-4 justify-center">

                    {projects.map((project) => (


                        <Tilt options={options} className="pl-5 pt-5">

                            <a
                               href={project.link}
                            target='_blank'
                            className="sm:w-[1/2] rounded-[40px]">

                                <div className="px-8 py-10 relative z-10 w-[300px] bg-white bg-opacity-5 backdrop-blur-lg drop-shadow-lg opacity-100 hover:opacity-100 rounded-[40px]">

                                    <h2 className="tracking-widest text-sm title-font font-medium text-cyan-400 mb-1">

                                        {project.subtitle}

                                    </h2>

                                    <h1 className="title-font text-lg font-medium text-white mb-3">

                                        {project.title}

                                    </h1>

                                    <p className="leading-relaxed">{project.description}</p>

                                </div>

                            </a>

                        </Tilt>

                    ))}

                </div>

        </div>

    </section>

);
  
}
