import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { database } from "../appwrite/appwriteConfig"

Card.propTypes = {
  category: PropTypes.string,
  payout: PropTypes.number.isRequired,
  postedBy: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default function Card({category, description, postedBy, payout, id}) {

  const handleDelete = (e) => {
    e.preventDefault()
    database.deleteDocument("64ba99103e72d6d3f111", "64bbfa41435313f560e3", id)
    .then(() => {
      window.location.reload()
    })
  }
  if(category === 'food') {
    return (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full z-10 max-w-sm h-[400px] flex flex-col justify-end rounded-lg shadow bg-gray-800 border-gray-700"
      >
        <a href="#">
        <div className="flex p-1 h-auto justify-center">
          <img
            className="z-20 rounded-t-lg opacity-90"
            src="/food.webp"
            alt="food image"
            />
          </div>
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold text-purple-400">
              Food
            </h5>
            <p className="text-white tracking-tighter line-clamp-2">{description}</p>
            <p className="text-green-400 tracking-tighter line-clamp-2 font-semibold">
              Posted by: {postedBy}
            </p>
          </a>
          <div className="flex items-center justify-between">
            <span className="text-3xl mt-2 font-bold text-amber-400">{`₹${payout}`}</span>
            <a
              href="#"
              onClick={handleDelete}
              className="text-white mt-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-500 hover:bg-red-600 focus:bg-red-800"
            >
              Delete
            </a>
          </div>
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm h-[400px] flex flex-col justify-end rounded-lg shadow bg-gray-800 border-gray-700"
      >
        <a href="#">
        <div className="flex p-2 m-4 max-h-56 justify-center">
          <img
            className="z-20 rounded-t-lg opacity-70"
            src="/misc.webp"
            alt="misc image"
            />
          </div>
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold text-purple-400">
              Misc
            </h5>
            <p className="text-white tracking-tighter line-clamp-2">{description}</p>
            <p className="text-green-400 tracking-tighter line-clamp-2 font-semibold">
              Posted by: {postedBy}
            </p>
          </a>
          <div className="flex items-center justify-between">
            <span className="text-3xl mt-2 font-bold text-amber-400">{`₹${payout}`}</span>
            <a
              href="#"
              className="text-white mt-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-500 hover:bg-red-600 focus:bg-red-800"
            >
              Delete
            </a>
          </div>
        </div>
      </motion.div>
    );
  }
}
