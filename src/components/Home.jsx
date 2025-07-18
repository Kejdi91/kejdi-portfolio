import React, { useEffect, useRef } from 'react';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';

const Home = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 20,
        speed: 600,
        scale: 1.08,
        glare: true,
        'max-glare': 0.25,
      });
    }

    return () => tiltRef.current?.vanillaTilt?.destroy();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-blue-500">
      <Navbar />

      <main className="flex-grow flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-16">
        {/* Teksti me animacion */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start max-w-xl text-center md:text-left space-y-5"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Hi, I'm <span className="text-white">Kejdi Nela</span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-gray-400">
            Frontend Developer
          </h2>
          <p className="text-base text-white leading-relaxed">
            Passionate about building clean, responsive websites using React, JavaScript, and CSS. I enjoy
            turning ideas into interactive digital experiences that are both beautiful and user-friendly.
          </p>
          <a href="/contact">
            <Button
              variant="outline"
              className="bg-blue-500 border-0 text-black px-6 py-3 text-lg hover:scale-105 transition-transform shadow-md hover:shadow-blue-400/50"
            >
              Hire Me
            </Button>
          </a>
        </motion.div>

        {/* Foto me efekt 3D dhe animacion */}
        <motion.div
          ref={tiltRef}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl cursor-pointer ring-2 ring-blue-400/20 hover:ring-blue-400/40 transition duration-300"
        >
          <img
            src="/cv-foto.jpg"
            alt="Kejdi Nela"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
