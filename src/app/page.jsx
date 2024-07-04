'use client'
import Image from "next/image";
import Link from "next/link";

import PrimaryButton from "../components/primary-button";
import Hero from "../components/hero";
import { Header } from "../components/header";


export default function Home() {
  return (
    <main className="bg-slate-50">
      <Header/>
      <Hero/>
    </main>
  );
}
