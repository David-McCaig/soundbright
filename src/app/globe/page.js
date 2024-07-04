'use client'

// In your Globe page component
import React, { useEffect, useState } from 'react';
import VoiceControlledSphere from '../../components/voice-controlled-sphere';

export default function Globe() {

  const [testing, setTesting] = useState(null)

  useEffect(() => {

    function test () {
        setTesting(<VoiceControlledSphere  />)
    }
    test()
  },[])

  

  return (
    <div className='w-full h-screen'>
      {testing}
    </div>
  );
}


