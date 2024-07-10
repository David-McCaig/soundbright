'use client'

// In your Globe page component
import React, { useState } from 'react';
import VoiceControlledSphere from '../../components/voice-controlled-sphere';
import { Container } from '../../components/container';

export default function Globe() {

  const [ambientNoiseFilter, setAmbientNoiseFilter] = useState(0)

  return (
    <>
      <div className=' w-full pt-6 bg-primary-bg-color'>
        <Container>
          <div className="w-full flex justify-end ">
            <div className="w-60 p-4 rounded-lg shadow-md text-stone-800">
              <label className="font-semibold text-stone-800 text-xl text-center ">Ambient Noise Filter</label>
              <input id="range" type="range" className="h-2 w-full mt-4 cursor-ew-resize appearance-none rounded-full bg-gray-200 disabled:cursor-not-allowed slider" min="-50" max="50" value={ambientNoiseFilter} onChange={(e) => setAmbientNoiseFilter(e.target.value)} />
              <div className="border flex justify-center border-stone-300 px-4 py-1 mt-2  w-1/12 rounded-md ">
                <p >{ambientNoiseFilter}</p>
              </div>
            </div>
          </div>
        </Container>
        {/* <SideNav ambientNoiseFilter={ambientNoiseFilter} setAmbientNoiseFilter={setAmbientNoiseFilter} /> */}
        <div className='flex w-full h-screen justify-center'>
          <div className=' sm:hidden'>
          </div>
          <VoiceControlledSphere ambientNoiseFilter={ambientNoiseFilter} setAmbientNoiseFilter={setAmbientNoiseFilter} />
        </div>
      </div>
    </>
  );
}


