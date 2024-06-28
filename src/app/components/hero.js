import React from 'react'

import PrimaryButton from './primary-button'

export default function hero() {
  return (

    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,245,237,0.8),rgba(255,254,247,0.4))]">
    <div className="container flex max-w-[74rem] flex-col items-center gap-4 text-center">
      <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
        SoundBright <br />A Voice{" "}
        <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
          {" "}
          Visualizer
        </span>
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
      Watch as our 3D globe changes from red to yellow to green, giving you instant, easy-to-understand feedback on your speech volume.
      </p>
      <div className="space-x-4">
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </div>
  </section>
  )
}