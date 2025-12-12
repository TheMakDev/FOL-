import React from "react";

export default function Card({ icon: Icon, title, desc, highlight }) {
  return (
    <div
      className={`p-8 rounded-xl shadow-md text-center border 
      ${
        highlight
          ? "border-indigo-300 bg-indigo-50"       // Highlight matches section buttons
          : "border-gray-200 bg-white"
      }`}
    >
      <div className="flex justify-center mb-4">
        <Icon className="text-5xl text-indigo-700" />   {/* Matches the “Giving Opportunity” label */}
      </div>

      <h3 className="text-2xl font-semibold text-indigo-900 mb-2">
        {title}
      </h3>

      {desc && <p className="text-lg text-gray-600">{desc}</p>}
    </div>
  );
}
