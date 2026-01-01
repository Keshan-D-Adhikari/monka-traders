export default function ProductCard() {
  return (
    <div className="bg-white shadow rounded-xl p-4 hover:scale-105 duration-200 cursor-pointer">
      <div className="bg-gray-200 h-40 w-full rounded-lg mb-3" />

      <h3 className="font-semibold text-lg">Sample Product</h3>

      <p className="text-blue-600 font-bold text-xl mt-1">
        Rs. 12,500
      </p>

      <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
}
