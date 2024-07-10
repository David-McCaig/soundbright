// import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from './circle-background'
import { Container } from './container'

import { TransitionEffect } from "../lib/transition-effect";

export function CallToAction() {
  const navigateClick = () => {
    window.location.href = '/globe';
  }
  const { transitionRef, determineTransitionType } = TransitionEffect();

  return (
    <section
      style={determineTransitionType("translateY(0px)")}
      id="get-free-shares-today"
      className="relative overflow-hidden bg-stone-950 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fafaf9" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div ref={transitionRef} className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-slate-50 sm:text-4xl">
            Improve Communication Effortlessly
          </h2>
          <p className="mt-4 text-lg text-slate-50">
            Don&apos;t let low volume hold you back. Use volumeLight to monitor and improve your speaking volume for clearer communication.
          </p>
          <div className="mt-8 flex justify-center">
            <button onClick={navigateClick} className="relative h-12 overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 text-primary-bg-color before:absolute before:bottom-0 before:left-0 before:block before:h-full before:w-full before:translate-x-full before:bg-neutral-900 before:transition-transform hover:before:translate-x-0"><span className="relative">Try volumeLight</span></button>
          </div>
        </div>
      </Container>
    </section>
  )
}