"use server"
import Image from 'next/image'
import React from 'react'
import {  LOGO } from '../../assets/images'
import StartBtn from './component/StartBtn'


const GetStarted: React.FC = () => {

  return (
    <div className='flex justify-center items-center relative h-screen '>
      <Image src={LOGO} alt="LOGO" className='max-h-[40vh]'/>
      <StartBtn/>
    </div>
  )
}

export default GetStarted
