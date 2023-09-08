import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

export default function Info() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/gigs");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-900 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-green-500 font-bold"
        >
          🤷‍♂️ Usage Info! 🤷‍♂️
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-xl text-white text-center max-w-xl"
        >
          Hey guys, this is a micro-gig platform created by team VOID. This
          platform can be used to create micro-gigs and users can also accept
          gigs of other users. The payouts can be decided through mutual
          communication.
          <br />
          Enjoy your surf! 🏄‍♂️
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, duration: 0.6 },
          }}
          onClick={handleStart}
          className="mt-8 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
        >
          Get Started
        </motion.button>
      </div>
      <Footer />
    </>
  );
}
