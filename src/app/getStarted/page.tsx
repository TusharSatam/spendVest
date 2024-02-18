"use server"
import Image from 'next/image'
import React from 'react'
import { LOGO } from '../../assets/images'
import StartBtn from './component/StartBtn'


const GetStarted: React.FC = () => {

  return (
    <div className='flex justify-center items-center relative'>
      <Image src={LOGO} alt="LOGO" className='h-screen w-screen'/>
      <StartBtn/>
    </div>
  )
}

export default GetStarted
