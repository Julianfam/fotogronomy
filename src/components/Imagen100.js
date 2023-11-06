import React from 'react';

export default function Imagen100() {
  // URL of the example image
  const imageUrl =
    'https://img.freepik.com/premium-photo/food-collage-white-wooden-background-assortment-dishes-drinks_187166-46114.jpg?w=826';

  const centerContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '90vh', // Centrar verticalmente en el viewport
  };

  const categoryText = 'Fotografía y Maquillaje de Alimentos';
  const titleText = 'Capturar el sabor atraves del lente';
  const descriptionText = 'Fotografía personalizada, Chef y maquillador de alimentos, ';
  const learnMoreText = 'aprende mas';
  const likesText = '1.2K';
  const commentsText = '6';

  const squareContainerStyles = {
    backgroundColor: 'white', // Fondo blanco
    borderRadius: '10px', // Bordes redondeados
    padding: '20px', // Espaciado interno
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Sombra
  };

  return (
    <section className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="container px-5 py-24 mx-auto" style={centerContainer}>
        <div className="flex justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 rounded-lg overflow-hidden text-center relative">
              {/* Contenedor cuadrado con fondo blanco y bordes redondeados */}
              <div style={squareContainerStyles}>
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{categoryText}</h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{titleText}</h1>
                <p className="leading-relaxed mb-3">{descriptionText}</p>
                <a className="text-indigo-500 inline-flex items-center">
                  {learnMoreText}
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

