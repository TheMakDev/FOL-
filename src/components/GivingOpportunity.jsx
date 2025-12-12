import React from "react";

export default function GivingOpportunity() {
  return (
    <section className="w-full bg-[#F5F7FC] pt-14 pb-40 px-5 md:px-10">
      {/* Added pb-40 to give room for the overlapping image */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <p className="text-sm text-indigo-700 font-semibold mb-2">
            Giving Opportunity
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-5">
            Let the Mission Church direct your gifts to <br />
            the places where they are needed most.
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            Let us respond to immediate and changing needs at home and throughout the world.
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <button className="bg-indigo-900 text-white font-semibold rounded-full py-3 px-7 text-sm shadow-lg hover:shadow-xl transition">
              CONTRIBUTE
            </button>
            <button className="bg-indigo-200 text-indigo-900 font-semibold rounded-full py-3 px-7 text-sm shadow-md hover:shadow-lg transition">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative w-full flex justify-center">

          {/* MAIN IMAGE */}
          <img
            src="https://i0.wp.com/rccgonline.org/wp-content/uploads/2023/03/FB_IMG_1679046047040.jpg?fit=720%2C620&ssl=1"
            alt="Main"
            className="rounded-xl object-cover w-64 h-72 md:w-96 md:h-96 shadow-2xl"
          />

          {/* OVERLAY IMAGE */}
          <img
            src="https://cdn.punchng.com/wp-content/uploads/2025/02/09151736/PAPA-Adeboye-2.jpg"
            alt="Overlay"
            className="
              absolute
              top-48 sm:top-52 md:top-56
              left-10 sm:left-16 md:left-20
              w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72
              rounded-xl
              object-cover
              shadow-xl
              border-4 border-white
              transition-all
            "
          />

        </div>

      </div>
    </section>
  );
}
