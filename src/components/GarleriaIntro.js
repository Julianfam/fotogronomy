import React, { useState } from 'react';

// Array de objetos que contiene el nombre y el título de cada imagen
const imageInfo = [
  { name: 'image01.jpg', title: 'Título de la Imagen 1' },
  { name: 'image02.jpg', title: 'Título de la Imagen 2' },
  { name: 'image03.jpg', title: 'Título de la Imagen 3' },
  { name: 'image04.jpg', title: 'Título de la Imagen 4' },
  { name: 'image05.jpg', title: 'Título de la Imagen 5' },
  { name: 'image06.jpg', title: 'Título de la Imagen 6' },
  { name: 'image07.jpg', title: 'Título de la Imagen 7' },
  { name: 'image08.jpg', title: 'Título de la Imagen 8' },
  { name: 'image09.jpg', title: 'Título de la Imagen 9' },
  { name: 'image10.jpg', title: 'Título de la Imagen 10' },
  { name: 'image11.jpg', title: 'Título de la Imagen 11' },
  { name: 'image12.jpg', title: 'Título de la Imagen 12' },
  { name: 'image13.jpg', title: 'Título de la Imagen 13' },
  { name: 'image14.jpg', title: 'Título de la Imagen 14' },
  { name: 'image15.jpg', title: 'Título de la Imagen 15' },
  { name: 'image16.jpg', title: 'Título de la Imagen 16' },
  { name: 'image17.jpg', title: 'Título de la Imagen 17' },
  { name: 'image18.jpg', title: 'Título de la Imagen 18' },
  { name: 'image19.jpg', title: 'Título de la Imagen 19' },
  { name: 'image20.jpg', title: 'Título de la Imagen 20' },
  { name: 'image21.jpg', title: 'Título de la Imagen 21' },
  { name: 'image22.jpg', title: 'Título de la Imagen 22' },
  { name: 'image23.jpg', title: 'Título de la Imagen 23' },
  { name: 'image24.jpg', title: 'Título de la Imagen 24' },
  { name: 'image25.jpg', title: 'Título de la Imagen 25' },
  { name: 'image26.jpg', title: 'Título de la Imagen 26' },
];

function GaleriaIntro() {
  const [loadedImages, setLoadedImages] = useState(6); // Inicialmente carga 6 imágenes
  const [hoveredImage, setHoveredImage] = useState(null);

  const loadMoreImages = () => {
    setLoadedImages((prevLoadedImages) => prevLoadedImages + 3); // Carga 3 imágenes adicionales al hacer clic en "Cargar Más"
  };

  const handleImageHover = (imageName) => {
    setHoveredImage(imageName);
  };

  const handleImageLeave = () => {
    setHoveredImage(null);
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
            <div
              key={index}
              className="p-1 w-full md:w-1/2 lg:w-1/3"
              onMouseEnter={() => handleImageHover(`image${(index + 1).toString().padStart(2, '0')}.jpg`)}
              onMouseLeave={handleImageLeave}
            >
              <img
                alt={`gallery ${index + 1}`}
                className="w-full h-full object-cover object-center block"
                src={getImageUrl(index)}
              />
              {hoveredImage === `image${(index + 1).toString().padStart(2, '0')}.jpg` && (
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-white text-black text-center">
                  {imageInfo[index]?.title}
                </div>
              )}
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
