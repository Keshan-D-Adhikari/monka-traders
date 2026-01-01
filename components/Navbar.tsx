export default function Navbar() {
  return (
    <div className="w-full bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        <h1 className="text-2xl font-bold text-blue-600">Monka Traders</h1>

        <input
          type="text"
          placeholder="Search products..."
          className="w-1/2 border rounded-full px-4 py-2"
        />

        <div className="flex gap-5 text-xl">
          <span>❤️</span>
          <span>🛒</span>
          <span>👤</span>
        </div>

      </div>
    </div>
  );
}
