import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ButtonsGrid from "../components/ButtonsGrid";
import GivingOpportunity from "../components/GivingOpportunity";

export default function FOLConvertsPage() {
  return (
    <div className="min-h-screen bg-[#f9f7f2]">
      <Hero />
      <ButtonsGrid />
      <GivingOpportunity/>
    </div>
  );
}
