// components/Hero.tsx
"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import LoginForm from "../form";
import Header from "../header";

const Hero: React.FC = () => {
  return (
    <section className="center min-h-screen bg-background relative">
      <img
        src="https://res.cloudinary.com/dmceve2cp/image/upload/v1724735683/pngegg_4_iwuqxj.png"
        alt=""
        className="h-[100vh] w-auto object-cover absolute bottom-0 scale-x-[-1] left-0 z-[0] opacity-30"
      />
      <Header />
      <div className="max-w-screen-2xl center z-10 !justify-between w-full">
        <div className="">
          <h1 className="text-[65px] title-gradient uppercase leading-[1] w-auto font-poppinsExtraBold font-bold mb-4">
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
