import React from 'react';

const title = "Producto";
const description = "Fotografía profesional única para tu producto ";

const items = [
  {
    imageSrc: "https://dummyimage.com/600x360",
    subtitle: "THE SUBTITLE",
    title: "Shooting Stars",
    content: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    imageSrc: "https://dummyimage.com/601x361",
    subtitle: "THE SUBTITLE",
    title: "The Catalyzer",
    content: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    imageSrc: "https://dummyimage.com/603x363",
    subtitle: "THE SUBTITLE",
    title: "The 400 Blows",
    content: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    imageSrc: "https://dummyimage.com/602x362",
    subtitle: "THE SUBTITLE",
    title: "Neptune",
    content: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    imageSrc: "https://dummyimage.com/605x365",
    subtitle: "THE SUBTITLE",
    title: "Holden Caulfield",
    content: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    imageSrc: "https://dummyimage.com/606x366",
    subtitle: "THE SUBTITLE",
    title: "Alper Kamu",
    content: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
];

export default function Producto() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{title}</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{description}</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {items.map((item, index) => (
            <div className="lg:w-1/3 sm:w-1/2 p-4" key={index}>
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={item.imageSrc} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{item.subtitle}</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.title}</h1>
                  <p className="leading-relaxed">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
