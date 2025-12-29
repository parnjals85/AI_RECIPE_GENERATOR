import { useEffect, useState } from "react";

export default function Ideas() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://dummyjson.com/recipes?limit=12";

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setIdeas(data.recipes);
      } catch (error) {
        console.log("Error loading data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIdeas();
  }, []);

  return (
    <div className="px-6 md:px-20 py-10">
      <h2 className="text-4xl font-bold text-center mb-10">
        Explore Amazing Recipe Ideas
      </h2>

      {/* Loading */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 animate-pulse rounded-xl h-56"
            ></div>
          ))}
        </div>
      )}

      {/* Cards */}
      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ideas.map((item) => (
            <div
              key={item.id}
              className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 bg-white"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">
                  {item.cuisine} • {item.calories} calories
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
