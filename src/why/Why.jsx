import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Fast & Accurate",
    desc: "Get recipes generated instantly with precise ingredients and steps.",
    icon: "⚡",
  },
  {
    id: 2,
    title: "Chef-Level Recipes",
    desc: "AI generates dishes like a professional chef would, step-by-step.",
    icon: "👨‍🍳",
  },
  {
    id: 3,
    title: "Custom Suggestions",
    desc: "Based on ingredients you have, get perfect recipe suggestions.",
    icon: "🎯",
  },
];

export default function Why() {
  return (
    <div className="w-full bg-grey-50 py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-10 font-montserrat"
      >
        Why Choose Our AI?
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-orange-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 font-montserrat">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
