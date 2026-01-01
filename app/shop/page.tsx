import ProductCard from "@/components/ProductCard";

export default function Shop() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
