export default function ContactCounsellor() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent. A counsellor will reach out soon.");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Contact a Counsellor
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">

        <div>
          <label className="block text-gray-700 mb-1">Name</label>
          <input 
            type="text"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input 
            type="email"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea 
            rows="5"
            className="w-full border rounded px-3 py-2"
            required
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          Send
        </button>

      </form>
    </div>
  );
}
