import { Link } from "react-router-dom";
import { HeartCrack } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const sentence = "This page could not be found.";
  const message =
    "It seems the page you are looking for does not exist or has been moved.";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl w-full bg-gray-800/90 border border-gray-700 shadow-2xl backdrop-blur-xl rounded-3xl p-10 text-center transition-all duration-300 hover:scale-[1.02]"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-5"
        >
          <HeartCrack className="w-14 h-14 text-red-500 animate-pulse" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold text-red-400 mb-6">
          {sentence.split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="inline-block mx-1"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
          {message.split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="inline-block mx-[2px]"
            >
              {word}
            </motion.span>
          ))}
        </p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-block mt-2 px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl shadow-lg transition-all duration-300"
          >
            Go to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;