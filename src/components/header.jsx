"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "../../public/logo-base-256x256.png";
import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import clsx from "clsx";

import Button from "./primary-button";
import { Container } from "./container";
import HowToModal from "./how-to-modal"

function MobileNavLink({ href, children }) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  );
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <Transition>
        <TransitionChild
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <PopoverOverlay className="fixed inset-0 bg-slate-300/50" />
        </TransitionChild>
        <TransitionChild
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <PopoverPanel className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-primary-font-color shadow-xl ring-1 ring-slate-900/5">
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#faq">FAQs</MobileNavLink>
            <MobileNavLink href="/contact-us">Contact Us</MobileNavLink>
          </PopoverPanel>
        </TransitionChild>
      </Transition>
    </Popover>
  );
}

export function Header() {
  const pathname = usePathname()

  let [isOpen, setIsOpen] = useState(false)

  const navigateHomeClick = () => {
    window.location.href = '/';
  };

  const navigateToGlobeClick = () => {
    window.location.href = '/globe';
  }

  return (
    <header className="py-8 bg-secondary-bg-color">
      <HowToModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <div onClick={navigateHomeClick} className="text-stone-800 flex align-middle gap-2 cursor-pointer" aria-label="Home">
              <Image src={Logo} alt="vocalViewer" width={32} height={32} />
              <h1 className=" text-stone-800 font-semibold text-lg ">volumeLight</h1>
            </div>
            <div className="hidden md:flex md:gap-x-6">
              <Link
                href="/#features"
                className="inline-block rounded-lg px-2 py-1 text-sm text-primary-font-color hover:bg-slate-200 hover:text-secondary-font-color"
              >
                Features
              </Link>
              <Link
                href="/#faq"
                className="inline-block rounded-lg px-2 py-1 text-sm text-primary-font-color hover:bg-slate-200 hover:text-secondary-font-color"
              >
                FAQs
              </Link>
              <Link
                href="/contact-us"
                className="inline-block rounded-lg px-2 py-1 text-sm text-primary-font-color hover:bg-slate-200 hover:text-secondary-font-color"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            {pathname !== '/globe' ?
              <div onClick={navigateToGlobeClick} className="hidden sm:block">
                <Button>Get Started</Button>
              </div>
              : <div onClick={() => setIsOpen(true)} >
                <Button style="w-32">Help</Button>
              </div>}

            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
