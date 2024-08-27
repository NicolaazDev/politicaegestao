import React from "react";

import { Funcionalidades } from "@/components/funcionalidades";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Free from "@/components/free";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Stats />
      <Funcionalidades />
      <Free />
    </main>
  );
}
