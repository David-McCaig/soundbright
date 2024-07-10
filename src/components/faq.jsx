'use client'
import { Container } from './container'
import Link from 'next/link'
import { TransitionEffect } from "../lib/transition-effect";


const faqs = [
  [
    {
      question: 'What is volumeLight?',
      answer:
        "VolumeLight is an innovative voice visualization tool designed to help individuals, especially those with Parkinson's, adjust their speaking volume. It provides real-time visual feedback through a color-coded 3D globe, helping users see and understand their voice volume instantly.",
    },
    {
      question: 'Who can benefit from using volumeLight?',
      answer:
        "VolumeLight is ideal for individuals with Parkinson's who often speak at a lower volume without realizing it. It is also a valuable tool for speech therapists and anyone looking to improve their speaking volume and clarity.",
    },
    {
      question: 'How do I use volumeLight?',
      answer:
        "Simply speak towards your device's microphone, and the 3D globe will provide instant visual feedback on your speaking volume. Aim to keep the globe green to ensure optimal volume.",
    },
  ],
  [
    {
      question: 'How do I use the ambient noise filter?',
      answer:
        "The ambient noise filter helps you adjust the sensitivity of volumeLight based on your environment. To ensure accurate feedback despite background noise, follow these steps. Adjust the filter slider until the globe turns red when you're not speaking. Once the globe is red without any talking, you're good to go!",
    },
    {
      question: 'Can I use volumeLight on any device?',
      answer:
        "VolumeLight is compatible with most devices that have a microphone, including desktops, laptops, tablets, and smartphones.",
    },
    {
      question: 'How can I provide feedback or get support?',
      answer:
        'We value your feedback and are here to help. If you have any questions, need support, or want to provide feedback, please message us through our contact us page.',
    },
  ],
  [
    {
      question: 'Does volumeLight record or store my voice data?',
      answer:
        "No, volumeLight does not record or store your voice data. It operates in real-time to provide visual feedback on your speaking volume but does not retain any recordings or personal data.",
    },
    {
      question: 'Can volumeLight be used by children or older adults?',
      answer:
        "Yes, volumeLight is suitable for users of all ages, including children and older adults. It is designed to be intuitive and easy to use, making it accessible for a wide range of users.",
    },
    {
      question: 'Can I customize the sensitivity of volumeLight to better suit my needs?',
      answer:
        'volumeLight offers an ambient noise filter feature that allows you to adjust the sensitivity indirectly. This filter helps volumeLight interpret your speaking volume more accurately in various ambient environments, ensuring reliable feedback regardless of background noise levels..',
    },
  ],
]

export function Faq() {
  const { transitionRef, determineTransitionType } = TransitionEffect();
  return (
    <section
      style={determineTransitionType("translatey(100px)")}
      id="faq"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32 bg-primary-bg-color"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-primary-font-color"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-secondary-font-color">
            If you have anything else you want to ask,{' '}
            <Link
              href="/contact-us"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          ref={transitionRef}
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-primary-font-color">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-secondary-font-color">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}