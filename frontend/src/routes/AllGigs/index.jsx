import Navbar from "../../components/Navbar"
import Card from "../../components/Card"
import { motion } from "framer-motion";

export default function AllGigs() {
  return (
    <motion.div
    className="bg-gray-900 flex flex-col min-h-screen"
    >
      <div className="h-14">
        <Navbar />
      </div>
      <motion.div 
      initial={{y:100, opacity: 0 }}
      animate={{y:0, opacity: 1, transition:{ duration: 1 } }}
      className="grid lg:grid-cols-4 justify-evenly gap-2 m-4 sm:grid-cols-1 md:grid-cols-2">
        <Card type={"food"} payout={50}/>
        <Card payout={50}/>
        <Card type={"food"} payout={50}/>
        <Card payout={50}/>
        <Card payout={50}/>
        <Card payout={50}/>
      </motion.div>
    </motion.div>
  );
}

