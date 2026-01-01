"use client";

import { useRef } from "react";

export default function CategoryCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => scrollRef.current && (scrollRef.current.scrollLeft -= 300);
  const scrollRight = () =>
    scrollRef.current && (scrollRef.current.scrollLeft += 300);

  const categories = [
    { name: "Phone Accessories", img: "https://picsum.photos/200?1" },
    { name: "Home & Living", img: "https://picsum.photos/200?2" },
    { name: "Kids & Babies", img: "https://picsum.photos/200?3" },
    { name: "Health & Beauty", img: "https://picsum.photos/200?4" },
    { name: "Kitchen Accessories", img: "https://picsum.photos/200?5" },
    { name: "Tools & Vehicle", img: "https://picsum.photos/200?6" },
    { name: "Fashion & Apparel", img: "https://picsum.photos/200?7" },
  ];

  return (
    <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-cyan-300 to-purple-300 relative">

      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-10 h-10 flex items-center justify-center"
      >
        ◀
      </button>

      {/* Scroll Area */}
      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto scrollbar-hide px-12 scroll-smooth"
      >
        {categories.map((cat) => (
          <div key={cat.name} className="flex flex-col items-center">
            <div className="bg-white shadow-xl w-28 h-28 rounded-full flex items-center justify-center">
              {/* 🔥 Updated Image */}
              <img
                src={cat.img}
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <p className="mt-2 font-semibold">{cat.name}</p>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-10 h-10 flex items-center justify-center"
      >
        ▶
      </button>
    </div>
  );
}
