"use client";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 sm:text-5xl text-4xl lg:text-5xl font-extrabold">
            <span className="text-transparent text-4xl bg-clip-text bg-gradient-to-r from-orange-300 via-coral-500 to-red-500">
              Olá, eu sou{" "}
            </span>{" "}
            <br />
            <TypeAnimation
              sequence={[
                "o João Renato",
                1000,
                "Web Developer",
                1000,
                "Analista de Dados",
                1000,
                "Programador",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:mb-6 text-lg lg:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum non
            voluptate nemo atque earum veniam eius quasi sint quos iste
            quibusdam, iusto commodi qui officiis nostrum pariatur quae. Maxime,
            pariatur.
          </p>
          <div>
            <button className="m-4 w-full sm:w-fit bg-gradient-to-br from-orange-300 via-coral-500 to-red-500 px-1 py-1  text-white rounded-full">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full lg:bg-[#181818] w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] bg-[#1f1f1f]  relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/avatar.png"
              width={300}
              height={300}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
