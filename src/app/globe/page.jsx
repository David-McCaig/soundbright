'use client'

// In your Globe page component
import React, { useEffect, useState } from 'react';
import VoiceControlledSphere from '../../components/voice-controlled-sphere';
import SideNav from '../../components/side-nav';
import { type } from 'os';

export default function Globe() {

  const [testing, setTesting] = useState(null)
  const [ambientNoiseFilter, setAmbientNoiseFilter] = useState(0)
console.log(+ambientNoiseFilter + 10)

  return (
    <>
      <div className='bg-[#FFFEFA] w-full h-screen flex'>
        <SideNav ambientNoiseFilter={ambientNoiseFilter} setAmbientNoiseFilter={setAmbientNoiseFilter} />
        <div className='flex w-full h-screen justify-center'>
          <div className=' sm:hidden'>
          </div>
          <VoiceControlledSphere ambientNoiseFilter={ambientNoiseFilter} setAmbientNoiseFilter={setAmbientNoiseFilter} />
        </div>
      </div>
    </>
  );
}


