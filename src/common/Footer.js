import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EmailPage from '@components/EmailPage';

const Footer = () => {
  // Constants for category section
  const categoryText = 'CATEGORIES';

  // Constants for subscribe section

  // Constants for social media section
  const socialMediaIcons = (
    <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <div className="text-gray-500 cursor-pointer">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </div>
      <div className="ml-3 text-gray-500 cursor-pointer">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a 4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </div>
      <div className="ml-3 text-gray-500 cursor-pointer">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </div>
      <div className="ml-3 text-gray-500 cursor-pointer">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
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
              <div className="mr-5 hover:text-gray-900 cursor-pointer">
                <Link href="/" passHref>
                  <button>Home</button>
                </Link>
              </div>
              <div className="mr-5 hover-text-gray-900 cursor-pointer">
                <Link href="/clientes" passHref>
                  <div>Clientes</div>
                </Link>
              </div>
              <div className="mr-5 hover-text-gray-900 cursor-pointer">
                <Link href="/producto" passHref>
                  <div>Fotos</div>
                </Link>
              </div>
              <div className="mr-5 hover-text-gray-900 cursor-pointer">
                <Link href="/contacto" passHref>
                  <div>Contacto</div>
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
          <button className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 cursor-pointer">
            <Image src="/public/assets/images/icons_478376.svg" alt="Icon" className="text-white p-2 bg-indigo-500 rounded-full" width={15} height={15} />
            <span className="ml-3 text-xl">FotoGronomy</span>
          </button>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2024 FotoGronomy —
            <a href="www.juliandev.tech" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">
              @julianandrade
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
