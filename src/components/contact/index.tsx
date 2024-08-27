"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Contact: React.FC = () => {
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      yPercent: 70,
      ease: "none",
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="contact-section text-background py-20 relative overflow-hidden">
      <img
        ref={bgRef}
        src="https://images.unsplash.com/photo-1518334792104-db78a16ac8b8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGV0YWxoZSUyMGRvJTIwZWRpZiVDMyVBRGNpb3xlbnwwfHwwfHx8MA%3D%3D"
        alt=""
        className="h-[150%] w-[100vw] object-cover absolute bottom-0 scale-x-[-1] left-0 z-[0] opacity-30 sm:h-[200%]"
      />
      <div className="max-w-screen-2xl z-50 mx-auto center flex flex-col items-center space-y-12">
        <h2 className="text-5xl font-bold text-center mb-6 z-50 sm:max-w-[95%]">
          Contribua com o Política & Gestão
        </h2>
        <p className="text-lg text-center max-w-3xl z-50 sm:max-w-[90%]">
          Tem alguma dúvida, sugestão ou precisa de ajuda? Nossa equipe de
          suporte está sempre disponível para ajudar. Não hesite em entrar em
          contato conosco.
        </p>

        <div className="text-center z-50">
          <a
            href="mailto:suporte@politicaegestao.com"
            className="text-xl font-medium text-blue-500 hover:text-blue-700 transition-colors duration-300"
          >
            suporte@politicaegestao.com
          </a>
        </div>

        <div className="absolute bottom-4 text-sm text-gray-400 text-center w-full z-50">
          <p>&copy; 2024 Política & Gestão. Todos os direitos reservados.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
