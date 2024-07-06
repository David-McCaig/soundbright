'use client'
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Link from "next/link";

function NavBar({ambientNoiseFilter, setAmbientNoiseFilter}) {
  const [showNavBar, setShowNavBar] = useState(true);


  const closeNavClick = () => {
    !showNavBar && setShowNavBar(true);
  };
  //navigate back to home page when user clicks evenShare logo


  return (
    <>
      <nav className="z-40">
        {showNavBar && <button className="sm:hidden fixed pt-2 pl-4" onClick={() => setShowNavBar(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>}
        <div className="sticky top-24 sm:top-0">
          <aside
            className={
              showNavBar
                ? `fixed top-16 sm:static left-0  rounded-medium  transition-transform -translate-x-full sm:translate-x-0  `
                : "fixed top-0 left-0 sm:static  h-screen transition-transform  sm:translate-x-0"
            }
          // className="fixed top-0 left-0 sm:static w-64 h-screen transition-transform  sm:translate-x-0"
          >
            <div className="bg-[#FFFEFA] z-40  h-screen w-56 pt-2 overflow-y-auto dark:bg-gray-800 rounded-xl shadow-lg sm:pt-0">
              <ul className=" p-3 space-y-2 font-medium">
                {!showNavBar && <button className="sm:hidden" onClick={() => setShowNavBar(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>}
                <div>Logo will go here</div>
                <li className="font-semibold text-stone-800 text-xl ">How to use:</li>
                <li className="font-normal"> <span className="font-semibold">Step 1: </span>You will be asked if soundBright can use your microphone. Click allow this time. This will allow the globe to react to your voice. </li>
                <li className="font-normal"> <span className="font-semibold">Step 2: </span> If the globe is not red without you talking, you may need to adjust the slider below to account for ambient noise </li>
                <li className="font-normal"> <span className="font-semibold">Step 3: </span> If the globe is in the green it means that you are talking at a sound level to where somebody should be able to hear you. If the globe is yellow or red it means that the person you are talking to might have trouble hearing you. </li>
              </ul>
              <div className="mx-auto px-2 mt-2 text-stone-800">
                <label className="font-semibold text-stone-800 text-xl text-center">Ambient Noise Filter</label>
                <input id="range" type="range" className="h-2 w-full cursor-ew-resize appearance-none rounded-full bg-gray-200 disabled:cursor-not-allowed" min="-25" max="25" value={ambientNoiseFilter} onChange={(e) => setAmbientNoiseFilter(e.target.value)} />
                <div className="border flex justify-center border-stone-300 px-4 py-1  w-1/12 rounded-md ">
                  <p className="" >{ambientNoiseFilter}</p>
                </div>
              </div>
            </div>

          </aside>
        </div>
      </nav>
    </>
  );
}

export default NavBar;