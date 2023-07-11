import { motion } from "framer-motion";
import PropTypes from 'prop-types';

Navbar.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
}

export default function Navbar({setActiveTab, activeTab}) {

  const handleColor1 = activeTab===1 ? "text-white" : "text-gray-400"
  const handleColor2 = activeTab===2 ? "text-white" : "text-gray-400"
  const handleColor3 = activeTab===3 ? "text-white" : "text-gray-400"

  return (
    <>
    <div className="grid grid-col-6 grid-flow-col w-full fixed p-2 bg-gray-900 z-50">
      {/* gigs */}
      <div className="col-start-2 col-span-4 flex justify-evenly bg-gray-800 rounded-2xl">
        <motion.button
        initial={{ x: -200, opacity: 0 }}
        whileHover={{ scale: 1.1 }}
        animate={{ x: 0 , opacity: 1, transition:{ duration: 1 } }}
        className="text-gray-400 p-2 rounded-lg focus:text-white font-semibold"
        onClick={() => setActiveTab(1)}
        > 
        <div className={handleColor1}>
          All Gigs
        </div>
        </motion.button>
        <motion.button
        initial={{ y: -200, opacity: 0 }}
        whileHover={{ scale: 1.1 }}
        animate={{ y: 0 , opacity: 1, transition:{ duration: 1 } }}
        className="text-gray-400 p-2 rounded-lg focus:text-white font-semibold"
        onClick={() => setActiveTab(2)}
        >  
        <div className={handleColor2}>
          My Gigs
          </div>
        </motion.button>
        <motion.button
        initial={{ x: 200, opacity: 0 }}
        whileHover={{ scale: 1.1 }}
        animate={{ x: 0 , opacity: 1, transition:{ duration: 1 } }}
        className="text-gray-400 p-2 rounded-lg focus:text-white font-semibold"
        onClick={() => setActiveTab(3)}
        >  
        <div className={handleColor3}>
          Completed
          </div>
        </motion.button>
      </div>
        {/* util */}
      <div className="col-start-6 flex justify-center">
        <motion.button
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0 , opacity: 1, transition:{ duration: 1 } }}
        >
          <svg className="w-7 h-7 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 11 14H9a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 10 19Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>
        </motion.button>
      </div>
    </div>
    </>
  )
} 