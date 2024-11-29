'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className='font-serif'>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-lime-600 font-bold hover:animate-bounce">LOGO</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-lime-700 rounded-md outline-none focus:border-black-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-lime-800 py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-lime-300  border-lime-900  md:hover:text-lime-600 md:hover:bg-transparent hover:animate-bounce">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 text-xl text-lime-800 py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-lime-300  border-lime-900  md:hover:text-lime-600 md:hover:bg-transparent hover:animate-bounce">
                  <Link href="/assignment" onClick={() => setNavbar(!navbar)}>
                    Assignment
                  </Link>
                </li>
                <li className="pb-6 text-xl text-lime-800 py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-lime-300  border-lime-900  md:hover:text-lime-600 md:hover:bg-transparent hover:animate-bounce">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
            
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
