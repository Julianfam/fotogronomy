import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import imgcard from '/public/assets/tausha3salsas.jpg';

const Contact = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    // Enfoque del título h1 cuando la página se carga
    titleRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 ref={titleRef} className="text-4xl font-bold mb-8 p-3">
        Fotogronomy
      </h1>
      <h3 className="text-2xl mb-8 p-3">Este es nuestro portal de contacto</h3>
      <Image src={imgcard} alt="Tausha 3 Salsas" style={{ maxHeight: '80%', maxWidth: '400px', width: '80%', overflow: 'hidden' }} />
      <div className="flex flex-col items-center w-full py-4">
        <a href="https://www.fotogronomy.com" target="_blank" rel="noopener noreferrer">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 w-72 border border-gray-400 rounded-lg shadow w-90vw mb-4">WEB</button>
        </a>
        <a href="https://tiktok.com/fotogronomy" target="_blank" rel="noopener noreferrer">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 w-72 border border-gray-400 rounded-lg shadow w-90vw mb-4">TIKTOK</button>
        </a>
        <a href="https://www.instagram.com/fotogronomy" target="_blank" rel="noopener noreferrer">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 w-72 border border-gray-400 rounded-lg shadow w-90vw mb-4">INSTAGRAM</button>
        </a>
        <a href="https://wa.me/573202502648?text=Hola,%20Estoy%20interesado%20en%20mas%20información%20sobre%20como%20pueden%20mejorar%20la%20imagen%20de%20mi%20restaurante" target="_blank" rel="noopener noreferrer">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-8 w-72 border border-gray-400 rounded-lg shadow w-90vw">WHATSAPP</button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
