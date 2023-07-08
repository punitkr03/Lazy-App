import { motion } from "framer-motion";

export default function Navbar() {
    return (
      <div className="w-full absolute top-0">
        <ul className="flex justify-evenly p-4 bg-gray-900">
          <motion.li 
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.8 }}
          > 
          <button className="mx-16 bg-green-500 p-2 rounded-lg hover:bg-purple-500 active:bg-purple-700 font-bold">All Gigs</button></motion.li>
          <motion.li
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0 , opacity: 1}}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.8 }}
          > <button className="mx-16 bg-green-500 p-2 rounded-lg hover:bg-purple-500 active:bg-purple-700 font-bold">My Gigs</button></motion.li>
        </ul>
      </div>
    )
  }