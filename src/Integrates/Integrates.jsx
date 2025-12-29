import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Integrates() {
  const [query, setQuery] = useState("chicken");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );

      if (!res.ok) throw new Error("API is not responding");

      const data = await res.json();

      if (!data.meals) {
        setItems([]);
        setError("⚠️ No results found!");
      } else {
        setItems(data.meals);
      }
    } catch (err) {
      console.error(err);
      setError("❌ Something went wrong!");
    }

    setLoading(false);
  };

 useEffect(() => {
    if (query.trim() !== "") fetchData();
  }, [query]);

  return (
    <div className="w-full min-h-screen px-6 py-10 bg-gradient-to-r from-yellow-50 to-orange-110">
      
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-800 mb-6 text-center"
      >
        Non-Veg Ingredients Explorer
      </motion.h1>

      {/* Search Input */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 mb-10"
      >
        <div className="flex gap-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Non-Veg (e.g., chicken)"
            className="px-4 py-2 w-72 rounded-xl border border-gray-300 shadow-sm 
            focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {/* <button
            onClick={fetchData}
            className="px-6 py-2 bg-purple-600 text-white font-semibold 
            rounded-xl shadow hover:bg-purple-700 transition cursor-pointer"
          >
            Search
          </button> */}
        </div>

        {/* Suggestions */}
        <div className="flex gap-3 flex-wrap justify-center mt-2">
          {["Chicken", "Fish", "Prawns", "Egg", "Turkey", "Biryani"].map(
            (s, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 text-sm cursor-pointer bg-purple-100 
                text-purple-700 rounded-full border border-purple-300 
                hover:bg-purple-200"
                onClick={() => setQuery(s.toLowerCase())}  // Auto fetch will handle it
              >
                {s}
              </motion.span>
            )
          )}
        </div>
      </motion.div>

      {/* Error Message */}
      {error && (
        <div
          className="text-center mb-6 text-red-700 font-semibold 
          bg-red-50 border border-red-200 shadow-md shadow-red-100 
          py-3 px-4 rounded-2xl backdrop-blur-sm"
        >
          {error}
        </div>
      )}

      {/* Results */}
      {loading ? (
        <p className="text-center text-lg font-medium text-gray-700">
          Loading...
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((meal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-5 rounded-2xl shadow hover:shadow-lg 
              transition cursor-pointer"
              onClick={() => navigate(`/meal/${meal.idMeal}`)}
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="rounded-xl w-full h-48 object-cover mb-4"
              />

              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {meal.strMeal}
              </h2>

              <p className="text-gray-600 text-sm">Main Ingredient:</p>
              <p className="font-semibold text-purple-600 mb-2">
                {meal.strCategory}
              </p>

              <p className="text-gray-700 text-sm line-clamp-3">
                {meal.strInstructions}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
