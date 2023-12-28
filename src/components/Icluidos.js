import React from 'react';

// Textos modificables
const pitchforkTitle = 'Pitchfork Kickstarter Taxidermy';
const pitchforkDescription = 'Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.';

const cardTitles = ['Shooting Stars', 'The Catalyzer', 'Neptune', 'Melanchole', 'Bunker', 'Ramona Falls'];

const cardContents = [
  'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
  'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
  'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
  'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
  'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
  'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.',
];

const buttonText = 'Button';

const SeccionConIcluidos = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{pitchforkTitle}</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">{pitchforkDescription}</p>
        </div>

        <div className="flex flex-wrap -m-4">
          {/* Cards con estilos personalizados */}
          {cardTitles.map((title, index) => (
            <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                {/* Icono */}
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                {/* Título */}
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{title}</h2>
                {/* Contenido */}
                <p className="leading-relaxed text-base">{cardContents[index]}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Botón */}
        <button className="flex mx-auto mt-16 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">{buttonText}</button>
      </div>
    </section>
  );
};

export default SeccionConIcluidos;
