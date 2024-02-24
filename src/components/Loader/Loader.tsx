import { FC } from 'react'

interface LoaderProps {
  
}

const Loader: FC<LoaderProps> = ({}) => {
  return (
    <div className='fixed inset-0 z-[100] bg-[rgba(0,0,0,0.3)] backdrop-blur-md flex justify-center items-center'>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:10}}>
     <path
      fill="none"
      stroke="#FFFF00"
      stroke-width="15"
      stroke-linecap="round"
      stroke-dasharray="300 385"
      stroke-dashoffset="0"
      d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
    >
      <animate
        attributeName="stroke-dashoffset"
        calcMode="spline"
        dur="2"
        values="685;-685"
        keySplines="0 0 1 1"
        repeatCount="indefinite"
      ></animate>
    </path>
  </svg>

    </div>
  )
}

export default Loader