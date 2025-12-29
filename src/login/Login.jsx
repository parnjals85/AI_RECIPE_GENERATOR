import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loginform, setLoginForm] = useState({
    Email: "",
    Password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginform, [name]: value });
  };
  const handleLogin = (e) => {
    e.preventDefault();

    const { Email, Password } = loginform;

    if (!Email || !Password) {
      setError("Please enter email and password");
      return;
    }

    if (!Email.includes("@")) {
      setError("Email must include @");
      return;
    }

    if (Password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setError("");
    localStorage.setItem("authtoken", JSON.stringify(loginform));
    alert("Login successful ✅");
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("authtoken");
    if (token) {
      navigate("/");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-pink-50 flex items-center justify-center px-4">
      <motion.form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-8 space-y-5 border border-orange-100"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="text-center space-y-1">
          <motion.h2
            className="text-2xl font-bold text-gray-800"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            🍳 AI Recipe Login
          </motion.h2>
          <motion.p
            className="text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Sign in to generate smart recipes
          </motion.p>
        </div>

        {/* Email */}
        <motion.input
          name="Email"
          type="text"
          placeholder="Enter your email"
          className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          onChange={handleChange}
          value={loginform.Email}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        />

        {/* Password */}
        <motion.div
          className="relative"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <input
            name="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={handleChange}
            value={loginform.Password}
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-2.5 cursor-pointer text-xs font-medium text-green-600 hover:underline"
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </motion.div>

        {/* Error */}
        {error && (
          <motion.p
            className="text-red-500 text-xs text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {error}
          </motion.p>
        )}

        {/* Button */}
        <motion.button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-green-500 text-white font-semibold py-2.5 rounded-xl cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Login
        </motion.button>

        {/* Footer */}
        <motion.p
          className="text-xs text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Powered by AI • Healthy & Smart Cooking 🥗
        </motion.p>
      </motion.form>
    </div>
  );
}
