'use client'


import React from 'react';
import { usePathname } from 'next/navigation';

function Test() {
  const pathname = usePathname();

  const handleClick = () => {
    window.location.href = '/globe';
  };

  return (
    <div>
      <p onClick={handleClick}>click me</p>
    </div>
  );
}

export default Test;


