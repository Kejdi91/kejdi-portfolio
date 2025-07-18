import React from "react";
import Navbar from "./layouts/Navbar";


const Projects = () => {
  const projects = [

    {
      title: "Car Dealership",
      image: "cardealership.png", // vendos imazhin në public/images
      description: "A clean and elegant interface for car listings with filtering and contact features. Built with HTML, CSS, and JavaScript.",  
      link: "https://car-dealership-ivory.vercel.app",
    },
    {
      title: "Green Land",
      image: "greenland.png",
      description: "Eco-friendly e-commerce platform focused on natural products. Built with full responsive design and optimized UI/UX.",
      link: "http://green-land-nine.vercel.app",
    },
    {
      title: "Restorantista",
      image: "restorantista.png",
      description: "A modern restaurant web app with dynamic menu, cart system, and admin dashboard. Built using HTML, CSS, JavaScript.",
      link: "http://pro-restorant.vercel.app",
    },

    {
      title: "WorkForce Pro",
      image: "workforcepro.png",
      description: "HR and task management tool for teams and businesses. Created with React, Express, and PostgreSQL.",
      link: "https://yourblog.com",
    },
    {
      title: "Moxxa Coffee",
      image: "moxxacoffee.png",
      description: "Digital restaurant menu,integration and real-time updates. Created with React, Express, and PostgreSQL.",
      link: "https://yourcalculatorapp.com",
    },
    
  ];

  return (
    <>
      <Navbar />
      <div className="bg-black text-white py-10 px-4 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-500">Projects</h1>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/50 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className=" text-sm text-blue-500 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default Projects;
