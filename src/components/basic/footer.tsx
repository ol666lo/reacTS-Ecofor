// Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Logo o nombre */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-bold">MICELIO</h1>
        </div>

        {/* Enlaces */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-gray-400">Inicio</a>
          <a href="#" className="hover:text-gray-400">Servicios</a>
          <a href="#" className="hover:text-gray-400">Acerca</a>
          <a href="#" className="hover:text-gray-400">Contacto</a>
        </div>

        {/* Redes sociales */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 001.88-2.37 8.59 8.59 0 01-2.71 1.03 4.28 4.28 0 00-7.3 3.9A12.16 12.16 0 013 4.79a4.28 4.28 0 001.32 5.72 4.24 4.24 0 01-1.94-.53v.05a4.28 4.28 0 003.44 4.19 4.3 4.3 0 01-1.93.07 4.28 4.28 0 003.99 2.97A8.6 8.6 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.39-.02-.58A8.7 8.7 0 0024 5.5a8.6 8.6 0 01-2.54.7z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-gray-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.86 8.16 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.53 9.53 0 012.5-.34c.85.004 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.74 0 .27.18.58.69.48A9.96 9.96 0 0022 12c0-5.5-4.46-9.96-9.96-9.96z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="text-center mt-6 text-gray-400 text-sm">
        © 2025 MiEmpresa. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
