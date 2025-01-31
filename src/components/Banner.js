"use client";
import Image from "next/image";
import React from "react";
import HomeImg from "../../public/project/anu.jpg";
import Link from "next/link";

function Banner() {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-6 sm:gap-24 w-full h-screen px-6">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="star-animation"></div>
      </div>

      <style jsx>{`
        /* Keyframes for gradient animation */
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        /* Gradient animation for heading */
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientAnimation 4s ease-in-out infinite;
        }

        /* Star animation keyframes */
        @keyframes starTwinkle {
          0%,
          100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        /* Star animation container styling */
        .star-animation {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(
              circle at 50% 50%,
              red 1px,
              transparent 1px
            ),
            radial-gradient(circle at 10% 20%, indigo 2px, transparent 2px),
            radial-gradient(circle at 80% 30%, yellow 1.5px, transparent 1.5px),
            radial-gradient(circle at 20% 80%, green 2px, transparent 2px),
            radial-gradient(circle at 90% 70%, orange 1px, transparent 1px);
          background-size: 100px 100px;
          animation: starTwinkle 5s infinite alternate ease-in-out;
        }
      `}</style>
      <div className="flex justify-center sm:justify-end">
        <Image
          className="h-48 w-48 sm:h-96 sm:w-96 rounded-full border-white border-[8px]"
          src={HomeImg}
          alt="Anubhav Ray, Software Development Engineer"
          priority // This improves the performance by loading the image early
        />
      </div>
      <div className="sm:w-1/2">
        <header>
          <h3 className="font-extrabold text-3xl sm:text-4xl">Hello,</h3>
          <h1 className="font-extrabold text-3xl sm:text-4xl">
            I am Anubhav Ray
          </h1>
          <h5 className="font-extrabold text-3xl sm:text-4xl text-indigo-500">
            Software Development Engineer
          </h5>
          <h5 className="font-extrabold text-gray-500">
            Navigating the World of Tomorrow, One Byte at a Time.
          </h5>
        </header>
        <div className="flex gap-5 pt-5 justify-center sm:justify-start">
          <Link
            href="https://drive.google.com/file/d/14NbHS1ZvDs-rJpUp5yPEKIK6Vfy0XfK3/view?usp=sharing"
            className="bg-violet-500 rounded-md px-4 text-white font-semibold flex items-center p-2"
            aria-label="Download Anubhav Ray's CV"
          >
            <span>Get CV</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;
