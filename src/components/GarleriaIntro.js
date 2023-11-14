import React, { useState } from 'react';

function GaleriaIntro() {
  const [loadedImages, setLoadedImages] = useState(6); // Inicialmente carga 6 imágenes

  const loadMoreImages = () => {
    setLoadedImages((prevLoadedImages) => prevLoadedImages + 3); // Carga 3 imágenes adicionales al hacer clic en "Cargar Más"
  };

  const imageFolder = '/assets/images/';
  const getImageUrl = (index) => `${imageFolder}image${(index + 1).toString().padStart(2, '0')}.jpg`;

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            El arte de Atraer
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Fotografía especializada para su Producto y Proyecto Gastronómico.
          </p>
        </div>
        <div className="flex flex-wrap">
          {[...Array(loadedImages)].map((_, index) => (
            <div key={index} className="p-1 w-full md:w-1/2 lg:w-1/3">
              <img alt={`gallery ${index + 1}`} className="w-full h-full object-cover object-center block" src={getImageUrl(index)} />
            </div>
          ))}
        </div>
        {loadedImages < 20 && (
          <div className="mx-auto mt-10">
            <button
              onClick={loadMoreImages}
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base"
            >
              Cargar Más
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default GaleriaIntro;
