import React, { useState } from 'react';
import Image from 'next/image';

// Array de objetos que contiene el nombre y el título de cada imagen
const imageInfo = [
  { name: 'image01.jpg', title: 'Portobello relleno gratinato - Bruna' },
  { name: 'image02.jpg', title: 'Atún Flambeado - Bruna' },
  { name: 'image03.jpg', title: 'Serrano, Buffala, Champiñones, Tomates secos - La Divina Comedia' },
  { name: 'image04.jpg', title: 'Maquillando Producto Mermelada de frutos rojos' },
  { name: 'image05.jpg', title: 'Babaganoush, Berenjenas, Pimenton - Tausha' },
  { name: 'image06.jpg', title: 'Pepinillos con semilas de Mostaza -Tausha' },
  { name: 'image07.jpg', title: 'Jalapeños - Tausha' },
  { name: 'image08.jpg', title: 'Helado italiano de fresa - Pompelmo' },
  { name: 'image09.jpg', title: 'Pulpo y ahuyama - Tres Bastardos' },
  { name: 'image10.jpg', title: 'Vodka con Fresa - El Porto' },
  { name: 'image11.jpg', title: 'Hamburguesa, tocino y cebolla caramelizada - Chill & Grill' },
  { name: 'image12.jpg', title: 'Hamburguesa, tocino y cebolla caramelizada - Chill & Grill 2' },
  { name: 'image13.jpg', title: 'Helado Falso de fresa Maquillado - Cinco Sentidos Food Lab' },
  { name: 'image14.jpg', title: 'Helado Falso de fresa Maquillado 2 - Cinco Sentidos Food Lab' },
  { name: 'image15.jpg', title: 'Burrata al Forno - La divina Comedia' },
  { name: 'image16.jpg', title: 'Cannelloni Quattro Formaggi - La divina Comedia' },
  { name: 'image17.jpg', title: 'Malteada de frutos rojos, vainilla y chocolate - El Porto' },
  { name: 'image18.jpg', title: 'Tortelloni al Funghi' },
  { name: 'image19.jpg', title: 'Representación Artistica - Julian Hoyos Vallejo' },
  { name: 'image20.jpg', title: 'Spagguetti - Julian Andrade' },
  { name: 'image21.jpg', title: 'Menu enfocado en artistas- Julian Hoyos Vallejo' },
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
    <section id="galeriaIntroSection" className=" body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">El arte de Atraer</h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Fotografía especializada para su Producto y Proyecto Gastronómico.</p>
        </div>
        <div className="flex flex-wrap">
          {[...Array(loadedImages)].map((_, index) => (
            <div
              key={index}
              className="p-1 w-full md:w-1/2 lg:w-1/3 relative"
              onMouseEnter={() => handleImageHover(`image${(index + 1).toString().padStart(2, '0')}.jpg`)}
              onMouseLeave={handleImageLeave}
            >
              <Image alt={`gallery ${index + 1}`} className="w-full h-full object-cover object-center block" src={getImageUrl(index)} width="1200" height="720" />
              {hoveredImage === `image${(index + 1).toString().padStart(2, '0')}.jpg` && (
                <div className="absolute bottom-0 left-0 right-0 p-2 text-stone-500 text-right">{imageInfo[index]?.title}</div>
              )}
            </div>
          ))}
        </div>
        {loadedImages < 20 && (
          <div className="mx-auto mt-10">
            <button onClick={loadMoreImages} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base">
              Cargar Más
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default GaleriaIntro;
