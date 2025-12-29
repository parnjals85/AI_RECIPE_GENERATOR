import { useEffect, useState } from "react";

export default function Explore() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://dummyjson.com/recipes?limit=50";

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        // Sort by rating (highest → lowest)
        const sorted = data.recipes.sort((a, b) => b.rating - a.rating);

        // Top 6 best-liked recipes
        setFoods(sorted.slice(0, 6));
      } catch (err) {
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  return (
    <div className="px-6 md:px-20 py-10">
      <h2 className="text-4xl font-bold text-center mb-10">
        ⭐ Best Liked Foods
      </h2>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-56 bg-gray-200 animate-pulse rounded-xl" />
          ))}
        </div>
      )}

      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {foods.map((item) => (
            <div
              key={item.id}
              className="shadow-lg rounded-xl overflow-hidden hover:scale-105 transition"
            >
              <img
                src={item.image}
                className="w-full h-48 object-cover"
                alt={item.name}
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm">
                  ⭐ {item.rating} • {item.cuisine}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
