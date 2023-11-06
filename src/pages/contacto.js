
export default function Contacto() {
  return (
    
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-indigo-600 mb-6">Contáctanos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Información de contacto</h2>
            <p className="text-gray-700">Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto con nosotros.</p>
            <p className="text-gray-700 mt-4">BOGOTÁ - COLOMBIA</p>
            <p className="text-gray-700">Teléfono: 3202502648</p>
            <p className="text-gray-700">Correo electrónico: info@example.com</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Formulario de contacto</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="mt-1 p-2 border rounded w-full focus:ring focus:ring-indigo-300"
                  placeholder="Escribe tu nombre"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 border rounded w-full focus:ring focus:ring-indigo-300"
                  placeholder="example@example.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  className="mt-1 p-2 border rounded w-full focus:ring focus:ring-indigo-300"
                  placeholder="Escribenos tus dudas, inquietudes o requerimientos, pronto te respondemos."
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:ring focus:ring-indigo-300"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    
  );
}
