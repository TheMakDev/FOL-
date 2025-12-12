import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Evans",
      city: "Liverpool",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "My children love the Sunday programs, and I feel spiritually refreshed every time I attend.",
    },
    {
      name: "Hannah Mitchell",
      city: "Cambridge",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "My children love the Sunday programs, and I feel spiritually refreshed every time I attend.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12">
      {/* Left Image */}
      <div className="flex-1">
        <img
          src="/mnt/data/e1083a16-2219-446e-b552-48efe2019a60.png"
          alt="Pastor"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Right Content */}
      <div className="flex-1 flex flex-col justify-center gap-6">
        <h2 className="text-4xl font-serif font-bold">
          Testimonies of God’s Goodness
        </h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in
          viverra velit. Praesent feugiat, nunc in tincidunt efficitur, nulla
          erat feugiat risus, a cursus eros ipsum sed turpis.
        </p>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[#FFF7F5] p-6 rounded-lg shadow-sm flex flex-col gap-4"
            >
              <p className="text-gray-700 italic">"{t.text}"</p>
              <div className="flex items-center gap-4 mt-2">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-gray-400 text-sm">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
