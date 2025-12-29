import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img from '../home/Opening_Img.png'

export default function Create() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-orange-50 to-red-50 px-8 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between">

      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col gap-6 max-w-lg"
      >
        <h1 className="text-5xl font-bold leading-tight text-gray-900 font-montserrat">
          Create Delicious Recipes  
          <span className="text-red-600 block">Using AI Smartly</span>
        </h1>

        <p className="text-gray-700 text-lg font-montserrat">
          Select what you want to make — chicken dishes, quick snacks, or pure veg recipes.  
          Our AI will generate step-by-step instructions instantly.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 mt-4">
          <Link to="/chicken">
            <button className="px-6 py-3 bg-red-600 text-white rounded-xl text-lg font-semibold shadow hover:bg-red-700 transition">
              Non Veg Recipes
            </button>
          </Link>

          <Link to="/veg">
            <button className="px-6 py-3 bg-green-500 text-white rounded-xl text-lg font-semibold shadow hover:bg-orange-600 transition">
              Veg Dishes
            </button>
          </Link>

          <Link to="/quick">
            <button className="px-6 py-3 bg-orange-600 text-white rounded-xl text-lg font-semibold shadow hover:bg-green-700 transition">
              2 Min Recipes
            </button>
          </Link>
        </div>
      </motion.div>

      {/* RIGHT SIDE 3D CHEF IMAGE */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="mt-10 md:mt-0"
      >
        <img
          src={img}
          alt="Chef 3D"
          className="w-[330px] md:w-[420px] drop-shadow-xl"
        />
      </motion.div>

    </div>
  );
}
