import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/assets/images/icons_478376.svg';

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <Link href="/" passHref>
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src={logo}
              alt="Icon"
              className="w-50 h-50
           text-white p-2  bg-indigo-500 rounded-full"
              width={50}
              height={50}
            />
            <span className="ml-3 text-xl">FotoGronomy</span>
          </div>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/clientes" passHref>
            <div className="mr-5 hover:text-gray-900">Experiencia</div>
          </Link>
          <Link href="/producto" passHref>
            <div className="mr-5 hover:text-gray-900">Planes y Precios</div>
          </Link>
          <Link href="/sobre" passHref>
            <div className="mr-5 hover:text-gray-900">Sobre</div>
          </Link>
        </nav>
        <Link href="/contact" passHref>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Contáctanos
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
}
