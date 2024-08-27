"use client";
import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const phrases = [
    "políticos",
    "assessores",
    "candidatos",
    "estratégicos",
    "organizados",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <section className="flex items-center justify-between min-h-screen bg-gray-100 p-6">
      <div className="w-full md:w-1/2 lg:w-2/5">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Um software online de gestão política
        </h1>
        <p className="text-xl mb-6">
          Eleve seu desempenho eleitoral a um novo nível
          <br />
          Gestão estratégica para{" "}
          <span className="font-bold">{phrases[currentPhraseIndex]}</span>
        </p>
      </div>
      <div className="w-full md:w-1/2 lg:w-2/5 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <input
              id="password"
              type="password"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <a
              href="#forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Esqueci minha senha
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Entrar
          </button>
          <div className="my-4 text-center">
            <p className="text-sm text-gray-600">ou entre com</p>
            <div className="flex justify-center space-x-4 mt-2">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Google
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Facebook
              </button>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Não tem uma conta?{" "}
              <a href="#signup" className="text-blue-500 hover:underline">
                Cadastre-se
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
