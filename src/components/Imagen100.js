import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import image1 from '/public/assets/images/image07.jpg';
import image2 from '/public/assets/Hamburguesa-chill-grill.jpg';
import image3 from '/public/assets/images/image29.jpg';

export default function Imagen100() {
  const imageUrls = [image1, image2, image3];

  const textContent = [
    {
      categoryText: 'Fotografía y Maquillaje de Alimentos',
      titleText: 'Interesado en fotografía profesional de alimentos?',
      descriptionText: 'La idea es provocar, somos especializados en alimentos',
      learnMoreText: 'Descubre mas Fotos',
      likesText: '1.2K 1',
      commentsText: '6 1',
    },
    {
      categoryText: 'Fotografía de Producto',
      titleText: 'Tomas Únicas para tus dispositivos',
      descriptionText: 'Retratos Culinarios.',
      learnMoreText: '',
      likesText: '1.2K 2',
      commentsText: '6 2',
    },
    {
      categoryText: 'Nuevos Videos Gastronómicos',
      titleText: 'Reels?, Historias?, TikToks?',
      descriptionText: 'Videos que antojan',
      learnMoreText: 'Learn More 3',
      likesText: '1.2K 3',
      commentsText: '6 3',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
  };

  const imageContainerStyle = {
    width: '100%',
    height: '100vh',
    overflow: 'visible',
    position: 'relative',
  };

  return (
    <Slider {...sliderSettings}>
      {imageUrls.map((imageUrl, index) => (
        <div key={index}>
          <div className="container mx-auto" style={imageContainerStyle}>
            <Image
              src={imageUrl}
              alt={`Image ${index}`}
              fill="auto"
              style={{ objectFit: 'cover', overflow: 'hidden' }}
              loading="lazy" // Enable lazy loading
            />
            <div className="w-full md:w-1/2 lg:w-1/3" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <div className="h-full bg-gray-100 bg-opacity-75 rounded-lg overflow-hidden text-center relative">
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    borderRadius: '10px',
                    padding: '20px',
                    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 responsive-text">{textContent[index].categoryText}</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 responsive-text">{textContent[index].titleText}</h1>
                  <p className="leading-relaxed mb-3 responsive-text">{textContent[index].descriptionText}</p>
                  <button
                    className="text-indigo-500 inline-flex items-center responsive-text"
                    onClick={() => {
                      // Handle click event
                      const galeriaIntroSection = document.getElementById('galeriaIntroSection');
                      if (galeriaIntroSection) {
                        galeriaIntroSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {textContent[index].learnMoreText}
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
