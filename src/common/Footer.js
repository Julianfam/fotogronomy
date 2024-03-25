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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.01 9.34c-.04.33-.09.66-.15.99-.38 1.96-2.15 3.42-4.24 3.42-2.47 0-4.48-2.01-4.48-4.48 0-.41.05-.81.14-1.2-.68-.12-1.29-.38-1.8-.72a1.59 1.59 0 0 1-.69-1.31c0-.91.9-1.65 2-1.65.96 0 1.77.67 1.97 1.56.03.11.09.2.15.29.82-.27 1.73-.42 2.68-.42 1.63 0 3.1.67 4.16 1.75.37-.15.71-.35 1.01-.59zM12 16c1.11 0 2.04-.71 2.38-1.7H9.62c.34 1 1.27 1.7 2.38 1.7z"></path>
      </svg>

      <div className="ml-3 text-gray-500 cursor-pointer">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
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
