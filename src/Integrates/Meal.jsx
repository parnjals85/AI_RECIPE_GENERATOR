import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  const fetchMeal = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    setMeal(data.meals[0]);
  };

  useEffect(() => {
    fetchMeal();
  }, []);

  if (!meal) return <p>Loading...</p>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">{meal.strMeal}</h1>

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full max-w-xl rounded-2xl mb-6"
      />

      <p className="text-lg mb-3">
        <span className="font-bold">Category:</span> {meal.strCategory}
      </p>

      <p className="text-lg mb-3">
        <span className="font-bold">Area:</span> {meal.strArea}
      </p>

      <h2 className="text-2xl font-bold mt-5 mb-3">Instructions</h2>
      <p className="text-gray-700 leading-relaxed">
        {meal.strInstructions}
      </p>

      <h2 className="text-2xl font-bold mt-5 mb-3">Ingredients</h2>

      <ul className="list-disc pl-6">
        {Array.from({ length: 20 }).map((_, i) => {
          const ing = meal[`strIngredient${i + 1}`];
          const measure = meal[`strMeasure${i + 1}`];

          return ing ? (
            <li key={i}>
              {ing} - {measure}
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
}
