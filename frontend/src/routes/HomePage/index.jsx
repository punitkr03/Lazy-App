import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function HomePage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleSignUpClick = () => {
    navigate("/signup");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate("/gigs");
    }
  }, [0]);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen font-semibold text-6xl bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-5"
        >
          <motion.h1
            className="text-green-500"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to
          </motion.h1>
          <motion.h2
            className="text-purple-500"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Lazy App
          </motion.h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            onClick={handleLoginClick}
            className="text-xl bg-green-600 w-25 h-10 my-10 mx-2 px-3 rounded-xl hover:bg-green-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
          <motion.button
            onClick={handleSignUpClick}
            className="text-xl bg-green-600 w-25 h-10 my-10 mx-2 px-3 rounded-xl hover:bg-green-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SignUp
          </motion.button>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
