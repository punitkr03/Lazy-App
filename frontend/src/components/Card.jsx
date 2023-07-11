import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

Card.propTypes = {
  type: PropTypes.string.isRequired,
  payout: PropTypes.number.isRequired,
};

export default function Card({type, payout}) {
  if(type === 'food') {
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
            <h5 className="text-xl font-semibold tracking-tight text-white">
              Food
            </h5>
            <p className="text-white tracking-tighter line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsam quasi aliquid, ut quaerat officiis iusto magni sunt incidunt voluptas?</p>
          </a>
          <div className="flex items-center justify-between">
            <span className="text-3xl mt-2 font-bold text-white">{`₹${payout}`}</span>
            <a
              href="#"
              className="text-white mt-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
              Accept
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
        <div className="flex p-1 h-auto justify-center">
          <img
            className="z-20 rounded-t-lg opacity-90"
            src="/misc.webp"
            alt="food image"
            />
          </div>
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-white">
              Misc
            </h5>
            <p className="text-white tracking-tighter line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsam quasi aliquid, ut quaerat officiis iusto magni sunt incidunt voluptas?</p>
          </a>
          <div className="flex items-center justify-between">
            <span className="text-3xl mt-2 font-bold text-white">{`₹${payout}`}</span>
            <a
              href="#"
              className="text-white mt-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
              Accept
            </a>
          </div>
        </div>
      </motion.div>
    );
  }
}
