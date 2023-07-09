import Navbar from "../../components/Navbar"
import { motion } from "framer-motion";

export default function AllGigs() {
  return (
    <div className="bg-gray-900 overflow-hidden">
      <motion.div>
          <Navbar />
          <div className="flex flex-col justify-center items-center w-full h-screen font-semibold text-6xl bg-gray-900">
            <div className="text-center">
              {/* Your content here */}
            </div>
        </div>
      </motion.div>
    </div>
  );
}
