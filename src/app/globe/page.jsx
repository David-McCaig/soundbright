'use client'

// In your Globe page component
import React, { useEffect, useState } from 'react';
import VoiceControlledSphere from '../../components/voice-controlled-sphere';
import SideNav from '../../components/side-nav';

export default function Globe() {

  const [testing, setTesting] = useState(null)
 

  // useEffect(() => {

  //   function test() {
  //     setTesting(<VoiceControlledSphere />)
  //   }
  //   test()
  // }, [])



  return (
    <>

      <div className='w-full h-screen flex'>

        <SideNav />

        <div className='flex w-full h-screen justify-center'>
          <div className=' sm:hidden'>

        </div>
        <VoiceControlledSphere/>       
        </div>
      </div>
    </>
  );
}


