import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useFormContext } from "@/context/formContext";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isRegister, toggleForm } = useFormContext();
  const [scrollY, setScrollY] = useState(0);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleScrollChange = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollChange);

    return () => {
      window.removeEventListener("scroll", handleScrollChange);
    };
  }, []);

  return (
    <header
      className={`${
        scrollY > 0 ? "bg-background" : "bg-transparent"
      } fixed top-0 text-foreground w-full center h-[80px] px-4 z-30 duration-300`}
    >
      <div className="center !justify-between max-w-screen-2xl w-full">
        <div className="sm:flex hidden">
          <button
            className="text-white focus:outline-none z-30 ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>

        <nav
          className={`center space-x-6 ${
            scrollY > 0 ? "text-[#030303]" : "text-background"
          } sm:hidden`}
        >
          <a
            href="#inicio"
            onClick={(e) => scrollTop()}
            className="hover:border-b-background border border-solid border-transparent transition-all"
          >
            Inicio
          </a>
          <a
            href="#features"
            onClick={(e) => handleScroll(e, "features")}
            className="hover:border-b-background border border-solid border-transparent transition-all"
          >
            Funcionalidades
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleScroll(e, "pricing")}
            className="hover:border-b-background border border-solid border-transparent transition-all"
          >
            Preços
          </a>
          <a
            href="#signup"
            onClick={(e) => {
              if (!isRegister) toggleForm();
            }}
            className="hover:border-b-background border border-solid border-transparent transition-all"
          >
            Cadastre-se
          </a>
        </nav>

        <div className="flex space-x-4 sm:hidden">
          <a
            href="#login"
            onClick={(e) => {
              if (isRegister) toggleForm();
            }}
            className="main-gradient w-[120px] text-center text-white font-poppinsLight py-2 px-4 rounded"
          >
            Login
          </a>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="sm:flex flex-col items-center hidden bg-card-foreground fixed top-0 z-20 w-[100vw] pt-[60px] pb-[40px] text-white space-y-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="#inicio"
              onClick={(e) => scrollTop()}
              className="hover:border-b-background border border-solid border-transparent transition-all"
            >
              Inicio
            </a>
            <a
              href="#features"
              onClick={(e) => handleScroll(e, "features")}
              className="hover:border-b-background border border-solid border-transparent transition-all"
            >
              Funcionalidades
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleScroll(e, "pricing")}
              className="hover:border-b-background border border-solid border-transparent transition-all"
            >
              Preços
            </a>
            <a
              href="#signup"
              onClick={(e) => {
                if (!isRegister) toggleForm();
              }}
              className="hover:border-b-background border border-solid border-transparent transition-all"
            >
              Cadastre-se
            </a>
            <button
              onClick={(e) => {
                if (isRegister) toggleForm();
              }}
              className="main-gradient w-[80%] text-center text-white font-poppinsLight py-2 px-4 rounded"
            >
              Login
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
