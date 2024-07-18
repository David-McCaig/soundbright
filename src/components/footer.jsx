import Link from 'next/link'
import Image from 'next/image'
// import Logo from "../../public/logo-base-256x256.png";

import { Container } from './container'
import Logo from "../../public/logo-base-256x256.png";



export function Footer() {
  return (
    <footer className="bg-primary-bg-color">
      <Container>
        <div className="py-16">
          {/* <Logo className="mx-auto h-10 w-auto" /> */}

          <nav className="mt-10 text-sm" aria-label="quick links">
          <Link className="text-stone-800 flex align-middle gap-2 w-full mb-7 justify-center" href="/" aria-label="Home">
              <Image src={Logo} alt="vocalViewer" width={32} height={32} />
              <h1 className=" text-stone-800 font-semibold text-lg ">volumeLight</h1>
            </Link>
            <div className="-my-1 flex justify-center gap-x-6 text-primary-font-color">
              <Link href="#features">Features</Link>
              <Link href="/faq">FAQs</Link>
              <Link href="/contact-us">Contact Us</Link>
              <Link href="/terms-conditions">Terms</Link>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} volumLight. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}