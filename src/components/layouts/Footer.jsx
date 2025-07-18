// Footer.jsx
import React from 'react'
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-7 px-8">
      <div className="flex justify-center items-center space-x-20">

        {/* Email (Gmail) */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=kejdiinela@gmail.com&su=Hello&body=Write%20your%20message%20here"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-200"
          aria-label="Send Email via Gmail"
        >
          <Mail size={28} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Kejdi91"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-200"
          aria-label="GitHub"
        >
          <Github size={28} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/kejdi-nela-00ab1a217/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <Linkedin size={28} />
        </a>

        {/* Phone (Optional) */}
        <a
          href="tel:+355xxxxxxxxx"
          className="hover:text-blue-400 transition-colors duration-200"
          aria-label="Call"
        >
          <Phone size={28} />
        </a>

      </div>
    </footer>
  );
};

export default Footer;
