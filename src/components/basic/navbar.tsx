import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white w-auto mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">MICELIO</h1>
          </div>

          {/* Links de escritorio */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">Inicio</a>
            <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">Servicios</a>
            <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">Acerca</a>
            <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">Contacto</a>
          </div>

          {/* Botón de menú móvil */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <a href="#" className="block px-4 py-2 hover:bg-gray-600">Inicio</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-600">Servicios</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-600">Acerca</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-600">Contacto</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
