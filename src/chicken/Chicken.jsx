import { useState } from "react";
import img from '../chicken/chicken.png'
import { Link } from "react-router-dom";

export default function Chicken() {
  const [query, setQuery] = useState("chicken");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMeals = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();
      setItems(data.meals || []);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* ---------- TOP CHEF IMAGE ---------- */}
      <div className="flex justify-center mb-6">
        <img
          src={img}
          alt="Chef"
          className="w-40 md:w-56 drop-shadow-xl"
        />
      </div>

      {/* ---------- INPUT + SEARCH BUTTON ---------- */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-orange-600 text-center mb-4">
          Chicken Recipes 🍗
        </h1>

        <input
          type="text"
          placeholder="Search ingredient e.g. chicken"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <button
          onClick={fetchMeals}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg shadow-lg transition"
        >
          Search
        </button>
      </div>

      {/* ---------- RECIPE GRID (4 CARDS PER ROW) ---------- */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading && (
          <p className="col-span-full text-center text-gray-600">
            Loading recipes...
          </p>
        )}

        {!loading && items.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No recipes found.
          </p>
        )}

        {items.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition"
          >
            <Link to="/meal/:id">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="rounded-lg mb-3"
            />

            <h2 className="text-lg font-semibold text-orange-600">
              {meal.strMeal}
            </h2>

            <p className="text-sm text-gray-600 mt-2">
              {meal.strInstructions.slice(0, 80)}...
            </p>
            </Link>
          </div>
        ))}
             
        </div>
    </div>
  );
}
