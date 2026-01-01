import Hero from "@/components/Hero";
import CategoryCarousel from "@/components/CategoryCarousel";

export default function Home() {

  const categories = [
    "Phone Accessories",
    "Home & Living",
    "Kids & Babies",
    "Health & Beauty",
    "Kitchen Accessories",
    "Tools & Vehicle",
    "Fashion & Apparel",
  ];

  return (
    <div>

      <Hero />

      <CategoryCarousel />

      <h2 className="text-xl font-bold mb-3 mt-6">Shop by Category</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div
            key={cat}
            className="bg-white shadow p-4 rounded-xl text-center font-semibold hover:scale-105 duration-200 cursor-pointer"
          >
            {cat}
          </div>
        ))}
      </div>

    </div>
  );
}
