import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <nav className="flex space-x-6">
        <a href="#home" className="hover:text-gray-400">
          Início
        </a>
        <a href="#features" className="hover:text-gray-400">
          Funcionalidades
        </a>
        <a href="#pricing" className="hover:text-gray-400">
          Preços
        </a>
      </nav>

      <div className="flex space-x-4">
        <a
          href="#signup"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Cadastre-se
        </a>
        <a
          href="#login"
          className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
        >
          Login
        </a>
      </div>
    </header>
  );
};

export default Header;
