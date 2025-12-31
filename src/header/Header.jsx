import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Create", link: "/create" },
    { name: "Tips For Creation", link: "/creation" },
    { name: "Ideas", link: "/ideas" },
    { name: "Explore", link: "/explore" },
    { name: "Contact", link: "/contact" },
  ];

  const { isAuthenticated, loginWithRedirect, logout: auth0Logout, isLoading } = useAuth0();

  const login = () => loginWithRedirect();
  const signup = () =>
    loginWithRedirect({ authorizationParams: { screen_hint: "signup" } });

  const logout = () =>
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full px-6 py-4 bg-white/80 backdrop-blur-lg shadow-md flex justify-between items-center sticky top-0 z-50 border-b border-gray-200"
    >
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <span className="text-xl font-bold text-red-700">DishAI✨</span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 items-center font-semibold">
        {navItems.map((item, idx) => (
          <motion.li
            key={idx}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer transition hover:text-red-600"
          >
            <Link to={item.link}>{item.name}</Link>
          </motion.li>
        ))}

        {/* Desktop Login/Logout */}
        {isLoading ? null : isAuthenticated ? (
          <button
            onClick={logout}
            className="ml-4 px-3 py-1 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition"
          >
            Logout
          </button>
        ) : (
          <>
            <button
              onClick={login}
              className="ml-4 px-3 py-1 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition"
            >
              Login
            </button>
            <button
              onClick={signup}
              className="ml-2 px-3 py-1 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            >
              Signup
            </button>
          </>
        )}
      </ul>

      {/* Mobile Toggle */}
      <div className="md:hidden cursor-pointer z-50" onClick={() => setOpen(!open)}>
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
            className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-xl shadow-lg md:hidden p-6 flex flex-col gap-4"
          >
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                onClick={() => setOpen(false)}
                className="text-lg font-medium hover:text-red-600 transition"
              >
                {item.name}
              </Link>
            ))}

            {isLoading ? null : isAuthenticated ? (
              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="px-3 py-1 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition"
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    login();
                    setOpen(false);
                  }}
                  className="px-3 py-1 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    signup();
                    setOpen(false);
                  }}
                  className="px-3 py-1 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 transition"
                >
                  Signup
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
