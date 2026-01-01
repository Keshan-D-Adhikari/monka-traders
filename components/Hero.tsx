export default function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

      {/* Left Big Banner */}
      <div className="lg:col-span-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">Gaming Gear</h2>
        <h1 className="text-4xl font-extrabold mb-3">Game Controller</h1>
        <p className="opacity-90 mb-5">Wireless controller | High Performance</p>

        <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
          Shop Now
        </button>
      </div>

      {/* Right Promo */}
      <div className="flex flex-col gap-6">

        <div className="bg-purple-600 rounded-2xl p-6 text-white">
          <h2 className="text-xl font-bold">New Arrival 🎧</h2>
          <p>BambooBuds</p>
          <button className="mt-3 underline">Shop Now</button>
        </div>

        <div className="bg-pink-600 rounded-2xl p-6 text-white">
          <h2 className="text-xl font-bold">HomePod Pro 🔥</h2>
          <p>Premium Sound</p>
          <button className="mt-3 underline">Shop Now</button>
        </div>

      </div>

    </div>
  );
}
