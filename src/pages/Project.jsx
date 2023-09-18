import React from 'react'
// import Navbar from '../Components/Navbar'

export default function Project() {
  const projects = [
    {
      name: "My Calculator",
      link: "https://sugyanikumarimohapatra.github.io/My--Calculator/",
      description: "The project is a fully functional calculator implemented using HTML, CSS, and JavaScript, allowing users to perform basic arithmetic operations with a userfriendly interface.",
      Techstack: "HTML, CSS, JS"
    },
    {
        name: "Tic-Tac-Toe Game",
        link: "https://sugyanikumarimohapatra.github.io/My--TicTacToe/",
        description: "The project is an interactive Tic Tac Toe game built using HTML, CSS, and JavaScript, enabling users to play against each other with a visually appealing design and intuitive gameplay.",
        Techstack: "HTML, CSS, JS"
    },
    {
        name: "MyPortfolio",
        link: "",
        description: "",
        Techstack: "Reactjs, Tailwindcss"
    },
    {
        name: "Bioinformatics DNA Sequence Alignment",
        link: "",
        description: "ongoing",
        Techstack: ""
    }
  ];
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 w-full md:h-fit">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mt-16">
          <h2 className="text-4xl font-bold border-b-4 p-2 border-gray-500 inline">
            Projects
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-10 sm:px-0 ">
          {projects.map((project, index) => (
            <div key={index} className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-white hover:underline"
              >
                {project.name}
              </a>
              <p className="text-gray-500 mt-2 pt-5">{project.description}</p>
              <p className="text-gray-500 mt-2 pt-10">{"Tech_Stack : " + project.Techstack}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}