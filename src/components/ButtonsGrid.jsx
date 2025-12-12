import React from "react";
import Card from "./Card";
import { MdLocationPin } from "react-icons/md";
import { PiHeadphonesBold } from "react-icons/pi";
import { LuBookOpen } from "react-icons/lu";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function ButtonsGrid() {
  const items = [
    { icon: MdLocationPin, title: "Find a church near you", link: "/churches" },
    { icon: LuBookOpen, title: "Daddy G.O's messages", link: "/messages" },
    {
      icon: HiOutlineChatBubbleOvalLeft,
      title: "Contact a counsellor",
      desc: "Get immediate spiritual guidance.",
      highlight: true,
      link: "/contact-counsellor",
    },
    { icon: PiHeadphonesBold, title: "Audio messages", link: "/audio" },
    { icon: LuBookOpen, title: "Open Heavens devotional", link: "/open-heavens" },
  ];

  return (
    <section className="px-6 md:px-12 py-16">

      {/* Title + Subtitle */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Explore Our Resources
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Everything you need for your spiritual growth in one place.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <Link key={i} to={item.link} className="block">
            <Card
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              highlight={item.highlight}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
