import { motion } from "framer-motion";
import img from '../creation/creation.png';
import { Link } from "react-router-dom";

export default function Creation() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-gray-800 dark:text-gray-100"
        >
          <h1 className="text-3xl font-bold mb-4 text-red-600">How to Use AI Recipe Generator</h1>

          <ol className="list-decimal ml-6 space-y-4 text-lg">
            <li>Go to the homepage and enter your <strong>ingredients</strong> in the input box.</li>
            <li>Click on <strong>Generate Recipe</strong> to ask AI for a recipe.</li>
            <li>Use <strong>Veg Ingredients</strong> or <strong>Quick Recipe</strong> for shortcut options.</li>
            <li>Wait a few seconds while AI prepares your recipe.</li>
            <li>Your recipe will appear with full ingredients & step-by-step instructions.</li>
            <li>Save your recipe or generate a new one instantly.</li>
          </ol>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-6"
          >
            <Link to="/create">
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-lg transition cursor-pointer">
              Start Creating Recipes
            </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT 3D IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex items-center justify-center"
        >
          <img
            src={img} // Replace with your 3D image path
            alt="3D Food"
            className="w-80 md:w-96 drop-shadow-2xl animate-float"
          />
        </motion.div>
      </div>
    </div>
  );
}


