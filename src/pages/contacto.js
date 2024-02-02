import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {
  const formRef = useRef();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm('service_v0nv5xo', 'template_v38heg6', formRef.current, 'LYRlOjidE5geJfm1E');
      console.log('Email sent successfully');
      setShowConfirmation(true);

      setTimeout(() => {
        setShowConfirmation(false);
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error.text);
      // Handle error as needed
    }
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">Contáctanos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Información de contacto</h2>
          <p className="text-gray-700">Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto con nosotros.</p>
          <p className="text-gray-700 mt-4">BOGOTÁ - COLOMBIA</p>
          <p className="text-gray-700">Teléfono: 3202502648</p>
          <p className="text-gray-700">Email: fotogronomy@gmail.com</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Formulario de contacto</h2>
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="mb-4">
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input type="text" id="nombre" name="user_name" className="mt-1 p-2 border rounded w-full focus:ring focus:ring-indigo-300" placeholder="Escribe tu nombre" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <input type="email" id="email" name="user_email" className="mt-1 p-2 border rounded w-full focus:ring focus:ring-indigo-300" placeholder="correo@mail.com" />
            </div>
                <div className="mb-4">
                  <label htmlFor="plan" className="block text-sm font-medium text-gray-700">
                    Selecciona un plan
                  </label>
                  <select id="plan" name="selected_plan" className="mt-1 p-2 border rounded w-full focus:ring focus:ring-indigo-300">
                    <option value="plan1">Fotografía Gastronómica con Maquillaje de Alimentos</option>
                    <option value="plan2">Día Completo de Fotografía O Reels</option>
                    <option value="plan3">Manejo de Redes y Planeación de Campañas</option>
                    <option value="plan4">Solicitud Especializada</option>
                  </select>
                </div>
            <div className="mb-4">
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="message"
                rows="4"
                className="mt-1 p-2 border rounded w-full focus:ring focus:ring-indigo-300"
                placeholder="Escribenos tus dudas, inquietudes o requerimientos, pronto te respondemos."
              />
            </div>
            <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:ring focus:ring-indigo-300">
              Enviar
            </button>
          </form>
          {showConfirmation && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
              <div className="w-24 h-24 bg-white border border-black p-2 text-center">
                <p className="text-xs">¡Enviado!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacto;
