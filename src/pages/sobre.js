import React from 'react';
import Image from 'next/image';
import imgSobre from '/public/assets/images/image04.jpg';

const title = 'Despierta Paladares y Miradas: Donde la Gastronomía se Convierte en Arte Visual';
const subtitle = '¡Bienvenido al fascinante mundo de la fotografía gastronómica y visual con un toque provocativo!';
const description = [
  'Soy Julian Andrade, Chef, Fotógrafo Gastronómico y Maquillador de Alimentos con 4+ años de experiencia en la creación de imágenes que despiertan emociones. Destaco cada detalle culinario y fusiono el arte visual con la gastronomía. Experiencia culminante, imágenes emotivas, especialización y colaboración, exploramos el mundo del video. Transformemos la percepción de tus productos. ¿Listo para despertar miradas y sabores? ¡Conversemos y hagamos magia visual!',
];
const handleNavigation = () => {
  window.location.href = '/contacto';
};

export default function sobre() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-1/2 lg:w-1/2 md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image className="object-cover object-center rounded" alt="hero" src={imgSobre} />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {title}
            <br className="hidden lg:inline-block" />
          </h1>
          <h2 className="font-bold">{subtitle}</h2>
          <p className="mb-8 leading-relaxed">{description}</p>
          <div className="flex justify-center">
            <div className="flex justify-center">
              <button onClick={handleNavigation} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Dale calidad a tu imagen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
