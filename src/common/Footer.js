import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EmailPage from '@components/EmailPage';
import icono1 from '/public/assets/iconos/001-instagram.png';
import icono2 from '/public/assets/iconos/001-tik-tok.png';

const Footer = () => {
  // Constants for category section
  const categoryText = 'CATEGORIES';

  // Constants for social media section
  const socialMediaIcons = (
    <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <div className="text-gray-500 cursor-pointer">
        <a href="https://www.instagram.com/fotogronomy" target="_blank" rel="noopener noreferrer">
          <Image src={icono1} alt="Instagram" width={20} height={20} />
        </a>
      </div>
      <div className="ml-3 text-gray-500 cursor-pointer">
        <a href="https://www.tiktok.com/@fotogronomy" target="_blank" rel="noopener noreferrer">
          <Image src={icono2} alt="TikTok" width={20} height={20} />
        </a>
      </div>
    </div>
  );

  return (
    <footer className="text-gray-600 body-font text-center py-12">
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap md:text-left text-center">
          {/* Category Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">{categoryText}</h2>
            <nav className="list-none mb-10">
              <div className="mr-5 hover:text-gray-900">
                <Link legacyBehavior href="/" className="block">
                  Home
                </Link>
              </div>
              <div className="mr-5 hover:text-gray-900">
                <Link legacyBehavior href="/clientes" className="block">
                  Clientes
                </Link>
              </div>
              <div className="mr-5 hover:text-gray-900">
                <Link legacyBehavior href="/contact" className="block">
                  Contacto
                </Link>
              </div>
            </nav>
          </div>

          {/* Subscription Form Section */}
          <EmailPage />

          {/* Social Media Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">{socialMediaIcons}</div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="bg-gray-100">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <Link href="/" passHref>
            <button className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 cursor-pointer">
              <Image src="/assets/images/icons_478376.svg" alt="Icon" className="text-white p-2 bg-indigo-500 rounded-full" width={15} height={15} />
              <span className="ml-3 text-xl">FotoGronomy</span>
            </button>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2024 FotoGronomy —
            <a href="https://www.juliandev.tech" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">
              @julianandrade
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
