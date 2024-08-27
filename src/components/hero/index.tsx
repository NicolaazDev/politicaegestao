// components/Hero.tsx
"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactTyped } from "react-typed";
import LoginForm from "../form";
import Header from "../header";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="center min-h-screen bg-[#111111] relative">
      <img
        ref={bgRef}
        src="https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?cs=srgb&dl=pexels-essow-k-251295-936722.jpg&fm=jpg"
        alt=""
        className="h-[100vh] w-[100vw] object-cover absolute bottom-0 scale-x-[-1] left-0 z-[0] opacity-40"
      />
      <Header />
      <div className="max-w-screen-2xl center z-10 !justify-between w-full">
        <div className="">
          <h1 className="text-[65px] title-gradient uppercase leading-[1] w-auto font-poppinsExtraBold font-bold mb-4">
            Um software online <br /> de gestão política
          </h1>
          <p className="text-2xl mb-6 text-background">
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
