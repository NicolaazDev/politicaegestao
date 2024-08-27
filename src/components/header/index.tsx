import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-transparent fixed top-0 text-foreground w-full center h-[80px]">
      <div className="center !justify-between max-w-screen-2xl w-full">
        <nav className="flex space-x-6 ">
          <a
            href="#home"
            className="hover:border-b-foreground border border-solid border-transparent transition-all"
          >
            Início
          </a>
          <a
            href="#features"
            className="hover:border-b-foreground border border-solid border-transparent transition-all"
          >
            Funcionalidades
          </a>
          <a
            href="#pricing"
            className="hover:border-b-foreground border border-solid border-transparent transition-all"
          >
            Preços
          </a>
          <a
            href="#pricing"
            className="hover:border-b-foreground border border-solid border-transparent transition-all"
          >
            Cadastre-se
          </a>
        </nav>

        <div className="flex space-x-4">
          <a
            href="#login"
            className="main-gradient w-[120px] text-center text-white font-poppinsLight py-2 px-4 rounded"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
