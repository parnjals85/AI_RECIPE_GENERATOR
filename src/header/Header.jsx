import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useNavigate , useLocation } from "react-router-dom";
import Logo from "../header/Logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const token = localStorage.getItem("authtoken");
    setIsLoggedIn(!!token); // true if token exists
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("authtoken");
    setIsLoggedIn(false); // update state
    navigate("/login");
  };

  const navItems = [
    { name: "Create", link: "/create" },
    { name: "Tips For Creation", link: "/creation" },
    { name: "Ideas", link: "/ideas" },
    { name: "Explore", link: "/explore" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full px-10 py-5 bg-white/80 backdrop-blur-lg shadow-md flex justify-between items-center sticky top-0 z-50 border-b border-gray-200"
    >
      {/* Logo */}
      <div className="flex items-center cursor-pointer">
        <Link to="/" className="flex items-center">
          {/* <img src={Logo} className="h-10 w-10 md:h-12 md:w-12 rounded-full" /> */}
          <span className="ml-2 text-xl font-bold text-red-700">DishAI✨</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-[17px] font-semibold">
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer transition hover:text-red-600"
          >
            <Link to={item.link}>{item.name}</Link>
          </motion.li>
        ))}
      </ul>

      {/* Desktop Login/Logout */}
      <ul className="hidden md:flex gap-3 items-center font-semibold">
        {!isLoggedIn ? (
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer text-red-500 font-extrabold text-xl hover:text-red-600 transition"
          >
            <Link to="/login">Login</Link>
          </motion.li>
        ) : (
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer text-red-500 hover:text-red-800 transition font-extrabold font-sans text-xl"
            onClick={handleLogout}
          >
            Logout
          </motion.li>
        )}
      </ul>

      {/* Mobile Toggle */}
      <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[72px] left-0 w-full bg-white/90 backdrop-blur-xl shadow-lg md:hidden p-5"
          >
            <ul className="flex flex-col gap-6 text-lg font-medium">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer transition hover:text-blue-600"
                  onClick={() => setOpen(false)}
                >
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}

              {/* Mobile Login/Logout */}
              {!isLoggedIn ? (
                <li
                  className="cursor-pointer text-red-400 hover:text-red-600 transition font-extrabold"
                  onClick={() => setOpen(false)}
                >
                  <Link to="/login">Login</Link>
                </li>
              ) : (
                <li
                  className="cursor-pointer text-red-500 hover:text-blue-800 transition font-extrabold"
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                >
                  Logout
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
