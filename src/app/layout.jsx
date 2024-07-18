import { Inter } from "next/font/google";
import { Header } from "../components/header";

import { Analytics } from '@vercel/analytics/react';

import Head from 'next/head';

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "volumeLight",
  description:
    "Volume Light is a voice visualization tool for Speach Therapists and folks with Parkinson's Disease. It helps you visualize your voice volume in real-time.",
  keywords:
    "voice visualization, speech therapy, speech pathology, parkinson's disease, voice volume, voice therapy, voice training, voice training tool, voice training app, voice training software, voice training program, voice training exercises, voice training exercises for singers, voice training exercises for actors, voice training exercises for public speaking, voice training exercises for speech therapy, voice training exercises for parkinson's disease, voice training exercises for parkinson's disease patients, voice training exercises for parkinson's disease patients at home",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en" className=
      'h-full scroll-smooth bg-white'>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link media="screen" rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
