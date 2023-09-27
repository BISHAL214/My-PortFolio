import React from 'react'
import {motion} from 'framer-motion'


const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 0)"
    }
  };
  
  const svgPath = "M 56.7 70 L 54.7 70 L 54.7 0 L 56.9 0 L 85.8 58.2 L 114.4 0 L 116.8 0 L 116.8 70 L 114.8 70 L 114.8 4 L 86.9 60.2 L 84.5 60.2 L 56.7 4.1 L 56.7 70 Z M 20 70 L 0 70 L 0 0 L 19.5 0 Q 24.847 0 28.72 1.22 A 17.726 17.726 0 0 1 31.6 2.4 A 17.96 17.96 0 0 1 35.371 4.988 A 14.228 14.228 0 0 1 38.35 8.75 Q 40.5 12.7 40.5 17.2 A 22.651 22.651 0 0 1 40.183 21.103 Q 39.637 24.222 38.15 26.5 Q 35.8 30.1 32.15 32 Q 28.5 33.9 24.6 34.5 L 24.6 33.6 A 17.43 17.43 0 0 1 32.399 35.677 A 20.515 20.515 0 0 1 32.9 35.95 Q 36.9 38.2 39.5 42.05 A 15.244 15.244 0 0 1 42.081 50.049 A 18.683 18.683 0 0 1 42.1 50.9 Q 42.1 55.8 40.1 60.15 Q 38.1 64.5 33.25 67.25 Q 29.676 69.277 24.176 69.81 A 43.347 43.347 0 0 1 20 70 Z M 2 34.8 L 2 68 L 20.9 68 Q 29.8 68 34.8 63.5 A 14.739 14.739 0 0 0 39.447 55.003 A 21.673 21.673 0 0 0 39.8 51 A 15.622 15.622 0 0 0 38.568 44.72 A 14.945 14.945 0 0 0 34.55 39.35 A 17.805 17.805 0 0 0 27.26 35.61 Q 24.567 34.908 21.386 34.815 A 33.642 33.642 0 0 0 20.4 34.8 L 2 34.8 Z M 2 1.8 L 2 32.8 L 20.8 32.8 A 26.308 26.308 0 0 0 25.898 32.337 Q 30.693 31.389 33.75 28.5 Q 38.3 24.2 38.3 17.2 A 15.013 15.013 0 0 0 36.999 10.894 A 14.696 14.696 0 0 0 33.55 6.2 A 15.816 15.816 0 0 0 26.658 2.526 Q 23.872 1.8 20.5 1.8 L 2 1.8 Z"


export default function Loader() {
  return (
    <div className='bg-black'>
    
    <div className="w-[150px] h-[150px] flex place-content-center overflow-hidden bg-white rounded-[30px] absolute top-[50%] left-[50%]
     -translate-x-2/4 -translate-y-2/4">
    <motion.svg
      xmlns= "https://www.w3.org/200/svg"
      viewBox="10 -10 100 100"
      className="w-[56%] overflow-visible stroke-black stroke-2 "
    >
            <motion.path
        d={svgPath}
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
    </motion.svg>
  </div>

    </div>
  )
}
