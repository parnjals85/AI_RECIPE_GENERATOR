import img from '../home/Opening_Img.png'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 bg-gradient-to-r from-yellow-50 to-orange-50">
      
      {/* Left: Hero Text */}
      <div className="flex-1 text-center md:text-left gap-3">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-red-600">
          Welcome to AI Recipe Generator!
        </h1>
        <p className="text-lg md:text-xl text-grey-600 mb-6">
          Generate unique recipes instantly with AI and explore endless culinary ideas.
        </p>
         <div className="flex flex-col md:flex-row gap-4 cursor-pointer">
       <Link to='/chicken' className='px-6 py-3 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition cursor-pointer'>
         Non-Veg Ingredients
        </Link>
        <Link to='/veg' className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition  cursor-pointer">
          Veg Integradient
        </Link>
        <Link to='/quick' className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition cursor-pointer">
          2 Minute Recipe
        </Link>
        </div>
      </div>

      {/* Right: Chef Character */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center md:justify-end">
        <img
          src={img}
          alt="Friendly Chef Character"
          className="w-[28rem] md:w-[28rem]"
        />
      </div>
    </section>
  );
}
