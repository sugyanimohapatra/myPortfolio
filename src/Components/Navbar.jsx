import React, { useState } from 'react';
import {FaTimes, FaBars} from "react-icons/fa"

export default function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <nav className="">
      <div className="flex items-center justify-between w-full h-20 px-4 text-white bg-black fixed">
        <h1 className="text-4xl"> Sugyani </h1>
        <ul className="hidden md:flex">
          <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
            <a className="" href="/">
              Home
            </a>
          </li>
          <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
            <a className="" href="/about">
              About
            </a>
          </li>
          <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
              <a className="" href="/technicalskills">
                Technical Skills
              </a>
            </li>
          <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
            <a className="" href="/project">
              Projects
            </a>
          </li>
          <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
            <a className="" href="/contact">
              Contact
            </a>
          </li>
        </ul>
        
        <div onClick={()=> setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
          {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <a className="" href="/">
              Home
            </a>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <a className="" href="/about">
              About
            </a>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <a className="" href="/technicalskills">
              Technical Skills
            </a>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <a className="" href="/project">
              Project
            </a>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <a className="" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      )}
      </div>
    </nav>

  )
}