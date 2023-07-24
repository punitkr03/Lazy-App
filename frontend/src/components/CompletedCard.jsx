import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

Card.propTypes = {
  category: PropTypes.string,
  payout: PropTypes.number.isRequired,
  postedBy: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default function Card({category, description, postedBy, payout}) {

    if(category === 'food') {
    return (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full z-10 max-w-sm h-[400px] flex flex-col justify-end rounded-lg shadow bg-gray-800 border-gray-700"
      >
        <div href="#">
        <div className="flex p-1 h-auto justify-center">
          <img
            className="z-20 rounded-t-lg opacity-90"
            src="/food.webp"
            alt="food image"
            />
          </div>
        </div>
        <div className="px-5 pb-5">
          <div href="#">
            <h5 className="text-xl font-semibold text-purple-400">
              Food
            </h5>
            <p className="text-white tracking-tighter line-clamp-2">{description}</p>
            <p className="text-green-400 tracking-tighter line-clamp-2 font-semibold">
              Posted by: {postedBy}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl mt-2 font-bold text-amber-400">{`₹${payout}`}</span>
            <p
              className="text-gray-500 text-base mt-2 font-medium rounded-lg px-5 py-2.5 text-center"
            >
              Completed
            </p>
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
        <div href="#">
        <div className="flex p-2 m-4 max-h-56 justify-center">
          <img
            className="z-20 rounded-t-lg opacity-70"
            src="/misc.webp"
            alt="misc image"
            />
          </div>
        </div>
        <div className="px-5 pb-5">
          <div href="#">
            <h5 className="text-xl font-semibold text-purple-400">
              Misc
            </h5>
            <p className="text-white tracking-tighter line-clamp-2">{description}</p>
            <p className="text-green-400 tracking-tighter line-clamp-2 font-semibold">
              Posted by: {postedBy}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl mt-2 font-bold text-amber-400">{`₹${payout}`}</span>
            <p
              className="text-gray-500 text-base mt-2 font-medium rounded-lg px-5 py-2.5 text-center"
            >
              Completed
            </p>
          </div>
        </div>
      </motion.div>
    );
  }
}
