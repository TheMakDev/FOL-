export default function Home() {
  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">
        Now That You Are Born Again
      </h2>

      <img
        src="https://via.placeholder.com/500x300?text=Smiling+People+Thanking+God"
        alt="Smiling believers"
        className="mx-auto rounded-lg shadow-md mb-6"
      />

      <p className="text-lg max-w-2xl mx-auto text-gray-700 mb-10">
        Congratulations on your new life in Christ! Heaven rejoices over you,
        and we celebrate this wonderful decision you have made. Here are
        helpful resources to guide you as you grow in your walk with God.
      </p>

      <div className="flex flex-wrap justify-center gap-4">

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
          Find a Church Near You
        </button>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
          Daddy G.O's Messages
        </button>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
          Audio Messages
        </button>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
          Open Heavens Devotional
        </button>

        <a
          href="/contact-counsellor"
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
        >
          Contact a Counsellor
        </a>

      </div>
    </div>
  );
}
