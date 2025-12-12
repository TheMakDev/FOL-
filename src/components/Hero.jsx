import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "https://plus.unsplash.com/premium_photo-1661377118520-287ec60a32f3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Welcome to FOL Converts",
    description:
      "Your spiritual journey starts here. Explore messages, find churches, and connect with counselors.",
  },
  {
    image: "https://images.unsplash.com/photo-1689783101582-98feb9393a57?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Discover Local Churches",
    description:
      "Find a church near you and become part of a loving spiritual community.",
  },
  {
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Get Inspired Daily",
    description:
      "Listen to powerful messages and devotionals that uplift your spirit every day.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 transition-opacity duration-1000">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          {slides[current].heading}
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md max-w-2xl">
          {slides[current].description}
        </p>

        {/* UPDATED BUTTON COLOR */}
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-3 rounded-full transition shadow-lg">
          Get Started
        </button>
      </div>
    </section>
  );
}
