'use client'

import { useId } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'


import { TransitionEffect } from "../lib/transition-effect";

import { Container } from './container'
import screenshotContacts from '../../public/green-globe.png'
import screenshotInventory from '../../public/yellow-globe.png'
import screenshotProfitLoss from '../../public/red-globe.png'

const features = [
  {
    name: 'Red: Low Volume',
    summary: 'Talking at 0-40 dB',
    description:
      'If the globe is red, your speaking volume is too low, making it difficult for others to hear you. Aim to increase your volume for clearer communication.',
    image: screenshotProfitLoss,
    icon: function ReportingIcon() {
      let id = useId()
      return (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          </svg>
        </>
      )
    },
  },
  {
    name: 'Yellow: Moderate Volume',
    summary:
      'Talking at 40-55 dB',
    description:
      'When the globe turns yellow, your volume is better but still may be challenging for some to hear. Try to speak a bit louder to ensure your message is understood.',
    image: screenshotInventory,
    icon: function InventoryIcon() {
      return (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.463 8.288a5.25 5.25 0 0 1 0 7.424" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          </svg>
        </>
      )
    },
  },
  {
    name: 'Green: Optimal Volume',
    summary:
      'Talking at 55+ dB',
    description:
      'A green globe indicates an optimal speaking volume, ensuring your voice is heard clearly by those around you. Great job!',
    image: screenshotContacts,
    icon: function ContactsIcon() {
      return (
        <>
          <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          </svg>
        </>
      )
    },
  },
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-slate-500',
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9 p-1" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text focus:border-white' : 'text-slate-600',
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.summary}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-white sm:-inset-x-6" />
            <div className="relative mx-auto  overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <TabGroup className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <TabList className="grid grid-cols-3 gap-x-8" role="tablist" aria-orientation="horizontal">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.summary}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="ui-not-focus-visible:outline-none" role="tab">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </TabList>
          <TabPanels className="relative mt-0 overflow-hidden rounded-4xl bg-secondary-bg-color rounded-md px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <TabPanel
                  static
                  key={feature.summary}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none',
                    featureIndex !== selectedIndex && 'opacity-60',
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[52.75rem] overflow-hidden   ">
                    <Image
                      className="w-full"
                      src={feature.image}
                      alt=""
                      sizes="52.75rem"
                    />
                  </div>
                </TabPanel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0" />
          </TabPanels>
        </>
      )}
    </TabGroup>
  )
}

export function PrimaryFeatures() {
  const { transitionRef, determineTransitionType } = TransitionEffect();

  return (
    <section
      style={determineTransitionType("translateY(100px)")}
      id='features'
      aria-label="Features for simplifying everyday business tasks"
      className="bg-secondary-bg-color pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container >
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-primary-font-color sm:text-4xl">
            Understand Your Speech Volume at a Glance.
          </h2>
          <p ref={transitionRef} className="mt-4 text-lg tracking-tight text-secondary-font-color">
            Our volumeLight tool provides instant feedback on your speaking volume through a simple color-coded system.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}