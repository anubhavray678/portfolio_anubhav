"use client";
import Image from "next/image";
import React from "react";
import Avatar from "@/assets/img/Avatar.jpg";
import about from "@/assets/img/about-us.png";

export default function About() {
  return (
    <section className="pl-5 pr-5 pt-5 pb-0">
      <div className="flex justify-center items-center flex-col md:flex-row">
        <div className="w-full sm:w-3/6">
          <Image className="card-image" src={about} alt="" />
        </div>

        <div className="w-full sm:w-3/6">
          <p className="text-3xl sm:text-4xl font-bold p-5">
            <span className="pl-2 pr-2 mr-2 text-violet-500 bg-violet-500 rounded-md">
              .
            </span>
            I&apos;m Anubhav, an aspiring software developer based in Noida.
          </p>
          <p className="p-5 font-semibold text-gray-500 text-xl">
            Hey there, I&apos;m Anubhav, an aspiring software developer based in
            Noida with a passion for creating seamless and delightful user
            experiences. I especially enjoy working on design operations and
            systems that help bring order to complexity.
          </p>
          <p className="p-5 font-semibold text-gray-500 text-xl">
            Whether you&apos;re seeking a talented developer to bring your ideas
            to life or a driven collaborator to innovate alongside, always ready
            to embark on the journey with you.
          </p>
        </div>
      </div>
    </section>
  );
}
