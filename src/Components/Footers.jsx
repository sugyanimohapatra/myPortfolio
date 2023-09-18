import React from 'react'
import { AiOutlineCopyrightCircle, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white flex flex-col p-4 justify-center">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center justify-around w-full sm:w-2/5 mb-4 sm:mb-0">
          <a className="mr-2 sm:mr-4" href="/">Home</a>
          <a className="mr-2 sm:mr-4" href="/about">About</a>
          <a className="mr-2 sm:mr-4" href="/technicalskills">Technical Skills</a>
          <a className="mr-2 sm:mr-4" href="/project">Projects</a>
          <a className="" href="/contact">Contact</a>
        </div>
        <div className="flex items-center justify-around w-full sm:w-2/5">
          <a className="" href="https://github.com/sugyanimohapatra">
            <AiFillGithub className="text-3xl sm:text-5xl mr-2 sm:mr-4" />
          </a>
          <a className="" href="https://instagram.com/7s_u_g_y_a_n_i2?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
            <AiFillInstagram className="text-3xl sm:text-5xl mr-2 sm:mr-4" />
          </a>
          <a className="" href="https://www.linkedin.com/in/sugyani-kumari-mohapatra-4870051bb">
            <AiFillLinkedin className="text-3xl sm:text-5xl mr-2 sm:mr-4" />
          </a>
        </div>
      </div>
      <div className="my-8 w-4/5 h-[1px] bg-white m-auto">

      </div>

      <div className="flex items-center justify-center">
        <AiOutlineCopyrightCircle />
        <p>Copyright || All rights reserved</p>
      </div>
    </div>
  )
}