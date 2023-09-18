import React from 'react'

export const About = () => {
  const educa = [
    {
      institution: "ST. THOMAS' COLLEGE OF ENGINEERING AND TECHNOLOGY",
      year: "(2020-2024)",
      description: "Bachelor of Technology- Btech Information Technology",
      // Grade : ""
    },
    {
      institution: "ODM PUBLIC SCHOOL, Bhubaneswar",
      year: "(2017-2019)",
      description: "Senior Secondary Education, Class-XII",
      // Grade: ""
    },
    {
      institution: "Kendriya Vidyalaya, Arc Charbatia ",
      year: "(2016-2017)",
      description: "MATRICULATION",
      // Grade: ""
    }
  ]
  return (
    <div className="w-full h-fit bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pt-16">
          <p className="text-4xl font-bold border-b-4 p-2 border-gray-500 inline">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          I possess a strong drive to learn and grow within the industry
        </p>
        <br />
        <p className="text-xl">
          I am excited to contribute to a team where I can leverage my relevant skills or strengths to drive innovation and achieve shared goals.
        </p>
        <br />
        <p className="text-xl">
          I am eager to embark on a career journey that allows me to apply my knowledge, skills, and enthusiasm
        </p>
        <br />
        <p className="text-xl">
          I am eager to contribute my skills, passion, and dedication to a forward-thinking organization that values creativity, innovation, and growth.
        </p>
        <div className="mt-16 ">
          <p className="text-4xl font-bold border-b-4 p-2 border-gray-500 inline">
            Education</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-10 sm:px-0 ">
          {educa.map((educa, index) => (
            <div key={index} className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-500 flex flex-col items-center justify-center">
              <p className="text-xl font-bold text-white hover:underline">
                {educa.institution}
              </p>
              {educa.year}
              <p className="text-gray-500 mt-2 pt-5">{educa.description}</p>
              {/* <p className="text-gray-500 mt-2 pt-5">{"Grade: " + educa.Grade}</p> */}
            </div>
          ))}
        </div>

        <div className="pt-16">
          <p className="text-4xl font-bold border-b-4 p-2 border-gray-500 inline">
            Logical Knowledge
          </p>
        </div>
        <p className="text-xl mt-10">
          - Basics of DSA
        </p>
        <br />
        <p className="text-xl">
          - OOPS
        </p>
        <br />
        <p className="text-xl">
          - DBMS
        </p>
        <br />

        <div className="pt-16">
          <p className="text-4xl font-bold border-b-4 p-2 border-gray-500 inline">
            Achievements
          </p>
        </div>
        <p className="text-xl mt-10">
          - PrepSat 2023 | Rank: 921/90678
        </p>
        <br />
        <p className="text-xl">
          - Completed Course in Core Java at CMC
        </p>
        <br />
        <p className="text-xl">
          - Clear level 1.1 Tech Quiz of the flipkart grid 5.0
        </p>
        <br />

        <div className="pt-16">
          <p className="text-4xl font-bold border-b-4 p-2 border-gray-500 inline">
            Extra Activities
          </p>
        </div>
        <p className="text-xl mt-10">
          - Athletics
        </p>
        <br />
        <p className="text-xl">
          - Dance
        </p>
        <br />

        <div className="pt-16">
          <p className="text-4xl font-bold border-b-4 p-2 border-gray-500 inline ">
            Hobbies
          </p>
        </div>
        <p className="text-xl mt-10">
          - Reading Self-help books and magazines 
        </p>
        <br />
        <p className="text-xl">
          - playing badminton
        </p>
        <br />
        <p className="text-xl">
          - Watching movies and series
        </p>
        <br />

        <div className="pt-16">
          <p className="text-4xl font-bold border-b-4 p-2 border-gray-500 inline ">
            Languages Known
          </p>
        </div>
        <p className="text-xl mt-10">
          - English
        </p>
        <br />
        <p className="text-xl">
          - Hindi
        </p>
        <br />
        <p className="text-xl">
          - Odia
        </p>
        <br />
      </div>
    </div>
  )
}
