// components/Hero.tsx
"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import LoginForm from "../form";

const Hero: React.FC = () => {
  return (
    <section className="center min-h-screen bg-background">
      <div className="max-w-screen-2xl center !justify-between w-full">
        <div className="">
          <h1 className="text-[80px] title-gradient uppercase leading-[1] w-auto font-poppinsExtraBold font-bold mb-4">
            Um software online <br /> de gestão política
          </h1>
          <p className="text-2xl mb-6">
            Eleve seu desempenho eleitoral a um novo nível
            <br />
            Gestão estratégica para{" "}
            <span className="font-bold">
              <ReactTyped
                strings={[
                  "políticos",
                  "assessores",
                  "candidatos",
                  "estratégicos",
                  "organizados",
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={1000}
                loop
              />
            </span>
          </p>
        </div>
        <LoginForm />
      </div>
    </section>
  );
};

export default Hero;
