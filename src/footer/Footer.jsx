import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className="mt-20  bg-gradient-to-r from-yellow-50 to-orange-130 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-red-600 mb-3"
          >
            DishAi✨
          </motion.h2>

          <p className="text-sm text-black">
            Smart recipes generated using AI — discover, explore & cook smarter.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2 }}
                className="p-2 bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700 transition"
              >
                <Icon size={18} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-3">Quick Links</h3>
          <ul className="space-y-2 text-black text-sm">
            <Link to="/">
            <li className="hover:text-red-600 cursor-pointer mb-2">Home</li>
            </Link>
            <li className="hover:text-red-600 cursor-pointer "><Link to={'/explore'}>Explore</Link></li>
            <li className="hover:text-red-600 cursor-pointer"><Link to={'/ideas'}>Ideas</Link></li>
            <li className="hover:text-red-600 cursor-pointer"><Link to={'/create'}>Create Recipe</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-3">Help</h3>
          <ul className="space-y-2 text-black text-sm">
            <li className="hover:text-red-600 cursor-pointer"><Link to={'/contact'}>How it Works</Link></li>
            <li className="hover:text-red-600 cursor-pointer"><Link to={'/contact'}>Support</Link></li>
            <li className="hover:text-red-600 cursor-pointer"><Link to={'/contact'}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
          <p className="text-sm text-black mb-3">
            Get the newest AI-generated recipes every week.
          </p>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter email"
              className="px-3 py-2 w-full rounded-lg bg-white-800 border border-black-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
            />
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition cursor-pointer">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} AI Recipe Gen — All Rights Reserved.
      </div>
    </footer>
  );
}
