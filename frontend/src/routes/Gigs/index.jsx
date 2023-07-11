import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar"
import Card from "../../components/Card"
import { motion } from "framer-motion";

export default function Gigs() {
  const [activeTab, setActiveTab] = useState(1)

  const getCards = () => {
    if(activeTab===1) {
      return (
        <>
        <Card type={"food"} payout={50}/>
        <Card type={"food"} payout={50}/>
        <Card type={"food"} payout={50}/>
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
    </>
  );
}

