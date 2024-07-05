'use client'
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Link from "next/link";

function NavBar() {
  const [showNavBar, setShowNavBar] = useState(true);

  const [activeLink, setActiveLink] = useState("/");





  const closeNavClick = () => {
    !showNavBar && setShowNavBar(true);
  };
  //navigate back to home page when user clicks evenShare logo


  return (
    <>
  
      <nav className="z-40">
      {showNavBar && <button className="sm:hidden fixed pt-2 pl-4" onClick={() => setShowNavBar(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>}
        <div className="sticky top-24 sm:top-0">
          <aside
            className={
              showNavBar
                ? `fixed top-16 sm:static left-0 w-64 rounded-medium  transition-transform -translate-x-full sm:translate-x-0  `
                : "fixed top-0 left-0 sm:static w-64 h-screen transition-transform  sm:translate-x-0"
            }
          // className="fixed top-0 left-0 sm:static w-64 h-screen transition-transform  sm:translate-x-0"
          >
            <div className="bg-primary-bg-color z-40  h-screen w-56 pt-2 overflow-y-auto dark:bg-gray-800 rounded-xl shadow-lg sm:pt-0">
              <ul className="space-y-2 font-medium">
                {!showNavBar && <button className="sm:hidden" onClick={() => setShowNavBar(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>}
                <div>Logo will go here</div>
                <li>Some instructions will go here</li>

              </ul>
            </div>
          </aside>
        </div>
      </nav>


      {/* <nav className="z-40">
      <div className="sticky top-24 sm:top-0">
        <aside
          className={
            showNavBar
              ? `fixed top-16 sm:static left-0 w-64 rounded-medium  transition-transform -translate-x-full sm:translate-x-0  `
              : "fixed top-0 left-0 sm:static w-64 h-screen transition-transform  sm:translate-x-0"
          }
        >
          <div className="bg-primary-bg-color  h-screen pt-2 overflow-y-auto dark:bg-gray-800 rounded-xl shadow-lg sm:pt-0">
            <ul className="space-y-2 font-medium">
            <div onClick={closeNavClick} className="w-12 h-12 ml-1 sm:hidden"/>
              <li></li>
              <li>
                <Link
                  className={`flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${activeLink === "/dashboard" ? "text-primary-button-color" : "text-primary-font-color"}`}
                  onClick={() => setActiveLink("/dashboard")}
                  href={"/dashboard"}
                >
                
                  <span className="ml-3 text-2xl">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  className={`flex items-center p-2  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${activeLink === "/recentactivity" ? "text-primary-button-color" : ""}`}
                  onClick={() => setActiveLink("/recentactivity")}
                  href={"/recentactivity"}
                >
               
                  <span className="flex-1 ml-3 whitespace-nowrap text-2xl">
                    Recent Activity
                  </span>
                </Link>
              </li>
              <li>

              </li>
              <li>
                <Link 
                className={`flex items-center p-2  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${activeLink === "/profile" ? "text-primary-button-color" : "text-primary-font-color"}`}
                href={"/profile"}
                onClick={() => setActiveLink("/profile")}
                >
                
                  <span className="flex-1 ml-3 whitespace-nowrap mt-1 text-2xl">
                    Profile
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </nav>  */}
    </>
  );
}

export default NavBar;