"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactTyped } from "react-typed";
import LoginForm from "../form";
import Header from "../header";
import RegisterForm from "../form/registerForm";
import { useFormContext } from "@/context/formContext";
import { AnimatePresence, motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const { isRegister } = useFormContext();
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
    <section className="center min-h-[870px] bg-[#111111] relative overflow-hidden">
      <img
        ref={bgRef}
        src="https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?cs=srgb&dl=pexels-essow-k-251295-936722.jpg&fm=jpg"
        alt=""
        className="h-[100%] w-[100vw] object-cover absolute bottom-0 scale-x-[-1] left-0 z-[0] opacity-40"
      />
      <Header />
      <div className="max-w-screen-2xl px-4 center z-10 !justify-between w-full sm:center-col sm:text-center sm:px-4 sm:py-[80px]">
        <div className="">
          <h1 className="text-[65px] title-gradient uppercase leading-[1] w-auto font-poppinsExtraBold font-bold mb-4 sm:text-[44px]">
            Um software online <br /> de gestão política
          </h1>
          <p className="text-2xl mb-6 text-background sm:text-[22px]">
            Eleve seu desempenho eleitoral a um novo nível{" "}
            <br className="sm:hidden" />
            gestão estratégica para{" "}
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
        {isRegister ? (
          <motion.div
            key="register"
            className="w-[40%] sm:w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <RegisterForm />
          </motion.div>
        ) : (
          <motion.div
            key="login"
            className="w-[40%] sm:w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <LoginForm />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
