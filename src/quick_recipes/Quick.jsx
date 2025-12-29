import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Quick() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchQuick = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=noodles"
      );
      const data = await res.json();
      setItems(data.meals || []);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuick();
  }, []);

  return (
    <div className="w-full min-h-screen bg-yellow-50 px-6 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-yellow-700 mb-6 text-center"
      >
        2 minutes Recipes
      </motion.h1>

      {/* Loader */}
      {loading ? (
        <p className="text-center text-lg text-yellow-700 font-medium">
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

                <h2 className="text-xl font-bold text-yellow-700">
                  {meal.strMeal}
                </h2>
              </motion.div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
