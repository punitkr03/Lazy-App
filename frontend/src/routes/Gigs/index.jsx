import { useState } from "react";
import Navbar from "../../components/Navbar"
import Card from "../../components/Card"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Gigs() {
  const [activeTab, setActiveTab] = useState(1)
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate()
  
  function createGig () {
    navigate('/create')
  } 

  const getCards = () => {
    if(activeTab===1) {
      return (
        <>
        <Card type={"food"} payout={50}/>
        <Card type={"food"} payout={50}/>
        <Card type={"food"} payout={50}/>
        <Card payout={50}/>
        <Card payout={50}/>
        <Card payout={50}/> 
        <Card type={"food"} payout={50}/>
        <Card type={"food"} payout={50}/>
        </>
      )
    } else if(activeTab===2) {
      return (
        <>
        <Card payout={50}/>
        <Card type={"food"} payout={50}/>
        <Card payout={50}/>
        <Card payout={50}/>
        <Card payout={50}/>
        <Card payout={50}/>
        </>
      )
    } else if(activeTab===3) {
      return (
        <>
        <Card payout={50}/>
        <Card payout={50}/>
        <Card payout={50}/>
        <Card payout={50}/>
        <Card type={"food"} payout={50}/>
        <Card payout={50}/>
        </>
      )
    } 
  }

  return (
    <>
    <div className="h-14">
        <Navbar setActiveTab={setActiveTab} activeTab={activeTab}/>
      </div>
    <motion.div
    className="bg-gray-900 flex flex-col min-h-screen"
    >
      <motion.div 
      initial={{y:100, opacity: 0 }}
      animate={{y:0, opacity: 1, transition:{ duration: 1 } }}
      className="grid lg:grid-cols-4 justify-evenly gap-2 m-4 sm:grid-cols-1 md:grid-cols-2">
        {getCards()}
      </motion.div>
    </motion.div>
    <motion.button
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed bottom-5 right-5 w-12 h-12 bg-purple-500 hover:bg-purple-600 rounded-full text-white text-4xl flex justify-center items-center z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={createGig}
    >
        <span className="-mt-[7px]">+</span>
        {isHovered && (
          <div className="bg-gray-800 w-20 text-green-500 font-medium text-sm mb-20 p-1 absolute rounded-md">
            Create gig
          </div>
        )}
      </motion.button>
    </>
  );
}

