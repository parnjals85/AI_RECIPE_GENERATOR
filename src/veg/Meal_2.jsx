import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function MealTwo() {
  const { id } = useParams(); 
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMeal() {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await res.json();
        setMeal(data.meals[0]);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchMeal();
  }, [id]);

  if (loading) return <h2 className="text-center mt-20 text-xl">Loading...</h2>;

  return (
    <div className="max-w-3xl mx-auto p-5">
      
      <Link to="/veg" className="text-blue-600 underline mb-4 inline-block">
        ⬅ Back
      </Link>

      <img
        src={meal.strMealThumb}
        className="rounded-xl shadow-lg mb-5"
        alt="Meal"
      />

      <h1 className="text-3xl font-bold mb-3">{meal.strMeal}</h1>
      <p className="text-gray-600 text-lg mb-2">
        <strong>Category:</strong> {meal.strCategory}
      </p>
      <p className="text-gray-600 text-lg mb-4">
        <strong>Area:</strong> {meal.strArea}
      </p>

      <h2 className="text-2xl font-semibold my-3">Instructions</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        {meal.strInstructions}
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredients</h2>
      <ul className="list-disc ml-6">
        {Object.keys(meal)
          .filter((key) => key.startsWith("strIngredient") && meal[key])
          .map((key, index) => (
            <li key={index} className="text-gray-700">
              {meal[key]}
            </li>
          ))}
      </ul>
    </div>
  );
}
