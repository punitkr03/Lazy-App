import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import EditProfile from "../../components/EditProfile";

export default function Info() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleHome = () => {
    navigate("/gigs");
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleEdit = () => {
    setShowModal(true);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full p-5 bg-gray-900 h-screen overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gray-800 flex flex-col rounded-xl h-full items-center gap-1 justify-evenly"
        >
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-green-500 text-center font-bold text-4xl mt-2 mb-2"
          >
            Profile
          </motion.h1>
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            src="https://thumbs.dreamstime.com/b/man-smiling-icon-flat-design-brown-haired-illustration-73384594.jpg"
            className="w-64 rounded-full p-2 bg-purple-500 justify-center m-5"
          />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-amber-500 font-semibold text-3xl"
          >
            {user.name}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-100 text-xl"
          >
            {`+91 ${user.mobile}`}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-amber-500 font-semibold text-xl"
          >
            About me
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-gray-100 text-center max-w-xs leading-5"
          >
            {user.about}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-row gap-5 justify-evenly mt-2 mb-2"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleHome}
            >
              Home
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleEdit}
            >
              Edit
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleLogout}
            >
              Logout
            </motion.button>
          </motion.div>
        </motion.div>
        {showModal && <EditProfile setShowModal={setShowModal} />}
      </motion.div>
    </>
  );
}
