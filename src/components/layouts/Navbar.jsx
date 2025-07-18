import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

const Navbar = () => {
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Me' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="bg-black w-full flex flex-col items-start py-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full px-8 space-y-4 md:space-y-0">
        
        {/* Lidhjet majtas */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-20">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-xl cursor-pointer ${
                  isActive ? 'text-white font-semibold' : 'text-blue-500 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Butoni "My Projects" */}
        <div className="self-start md:self-auto">
          <a href="/projects">
            <Button
              variant="outline"
              className="bg-blue-500 border-0 text-black px-6 py-3 text-lg"
            >
              My Projects
            </Button>
          </a>
        </div>
      </div>

      {/* Vija poshtë */}
      <div className="w-[30%] h-px bg-white mt-4" />
    </div>
  );
};

export default Navbar;
