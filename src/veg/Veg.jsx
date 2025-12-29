import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";   // usestate -- page UI dikhata
// useeffect - 

export default function Veg() {
  const [query, setQuery] = useState("veg");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchVeg = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();
      setItems(data.meals || []);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchVeg();
  }, []);

  return (
    <div className="w-full min-h-screen bg-green-50 px-6 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-green-700 mb-6 text-center"
      >
        Veg Ingredients Explorer 
      </motion.h1>

      {/* Search Box */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex flex-col items-center gap-4 mb-10"
      >
        <div className="flex gap-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Veg Dishes (e.g., veg)"
            className="px-4 py-2 w-72 rounded-xl border border-green-300 shadow-sm focus:ring-2 focus:ring-green-600"
          />
          <button
            onClick={fetchVeg}
            className="px-6 py-2 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 shadow cursor-pointer"
          >
            Search
          </button>
        </div>

        {/* Suggestions */}
        <div className="flex gap-3 flex-wrap justify-center mt-2">
          {["Veg", "Salad", "Soup", "Paneer", "Tofu", "Broccoli"].map(
            (s, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 text-sm cursor-pointer bg-green-100 text-green-700 rounded-full border border-green-300"
                onClick={() => setQuery(s.toLowerCase())}
              >
                {s}
              </motion.span>
            )
          )}
        </div>
      </motion.div>

      {/* Results */}
      {loading ? (
        <p className="text-center text-lg text-green-700 font-medium">
          Loading...
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
         {items.map((meal, index) => (
  <Link to={`/meal/${meal.idMeal}`} key={meal.idMeal}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="rounded-xl w-full h-48 object-cover mb-4"
      />

      <h2 className="text-xl font-bold text-green-700 mb-2">
        {meal.strMeal}
      </h2>

      <p className="text-gray-600 text-sm">Category:</p>
      <p className="font-semibold text-green-600 mb-2">
        {meal.strCategory}
      </p>

      <p className="text-gray-700 text-sm line-clamp-3">
        {meal.strInstructions}
      </p>
    </motion.div>
  </Link>
))}

        </div>
      )}
    </div>
  );
}
