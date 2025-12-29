import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TrendingCarousel() {
  const [trendingItems, setTrendingItems] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch API
  const fetchTrending = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=veg"
      );
      const data = await res.json();
      if (data.meals) {
        setTrendingItems(data.meals);
      } else {
        setTrendingItems([]);
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? trendingItems.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev === trendingItems.length - 1 ? 0 : prev + 1
    );
  };

  const visibleItems = trendingItems.length
    ? [
        trendingItems[startIndex],
        trendingItems[(startIndex + 1) % trendingItems.length],
        trendingItems[(startIndex + 2) % trendingItems.length],
      ]
    : [];

  return (
    <div className="w-full flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-6">Trending Veg Recipes</h2>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : trendingItems.length === 0 ? (
        <p className="text-gray-600">No recipes found.</p>
      ) : (
        <div className="flex items-center gap-4">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="px-3 py-2 bg-purple-600 text-white rounded-lg"
          >
            Prev
          </button>

          {/* Cards Container */}
          <div className="flex overflow-hidden w-[750px]">
            <AnimatePresence initial={false}>
              {visibleItems.map((item) => (
                <motion.div
                  key={item.idMeal}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 w-60 bg-white rounded-xl shadow p-4 mx-2"
                >
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    className="w-full h-36 object-cover rounded-lg mb-2"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.strMeal}
                  </h3>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="px-3 py-2 bg-purple-600 text-white rounded-lg"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
