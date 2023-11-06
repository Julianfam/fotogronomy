import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Imagen100() {
  const imageUrls = [
    'https://images.rappi.com/restaurants_background/hamburguesas27-1663618601524.jpg',
    'https://static.nationalgeographic.es/files/styles/image_3200/public/p053lo_gettyimages_pa-1071365032.jpg?w=1600&h=900',
    'https://content.skyscnr.com/m/2dcd7d0e6f086057/original/GettyImages-186142785.jpg?crop=1224px:647px&quality=100&position=attention',
    // Agrega más URLs de imágenes según sea necesario
  ];

  const textContent = [
    {
      categoryText: 'Fotografía profesional 1',
      titleText: 'Capturar el sabor a través del 1',
      descriptionText: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat 1.',
      learnMoreText: 'Learn More 1',
      likesText: '1.2K 1',
      commentsText: '6 1',
    },
    {
      categoryText: 'Fotografía profesional 2',
      titleText: 'Capturar el sabor a través del 2',
      descriptionText: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat 2.',
      learnMoreText: 'Learn More 2',
      likesText: '1.2K 2',
      commentsText: '6 2',
    },
    {
      categoryText: 'Fotografía profesional 3',
      titleText: 'Capturar el sabor a través del 3',
      descriptionText: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat 3.',
      learnMoreText: 'Learn More 3',
      likesText: '1.2K 3',
      commentsText: '6 3',
    },
    // Agrega más objetos de contenido de texto según sea necesario
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500, // 1 segundo para la transición
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const imageContainerStyle = {
    width: '100%',
    height: '100vh', // 100% de la altura de la pantalla
    overflow: 'hidden', // Ocultar el exceso de la imagen
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: '100%', // 100% de la altura de su contenedor
    objectFit: 'cover', // Recortar la imagen automáticamente
    position: 'absolute',
    top: 0,
    left: 0,
  };

  return (
    <Slider {...sliderSettings}>
      {imageUrls.map((imageUrl, index) => (
        <div key={index}>
          <div className="container mx-auto" style={imageContainerStyle}>
            <img src={imageUrl} alt={`Image ${index}`} style={imageStyle} />
            <div className="w-full md:w-1/2 lg:w-1/3" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <div className="h-full bg-gray-100 bg-opacity-75 rounded-lg overflow-hidden text-center relative">
                <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)' }}>
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{textContent[index].categoryText}</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{textContent[index].titleText}</h1>
                  <p className="leading-relaxed mb-3">{textContent[index].descriptionText}</p>
                  <a className="text-indigo-500 inline-flex items-center">
                    {textContent[index].learnMoreText}
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
      ))}
    </Slider>
  );
}
