import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

Card.propTypes = {
  type: PropTypes.string.isRequired,
  payout: PropTypes.number.isRequired,
};

export default function Card({type, payout}) {
  console.log(payout);
  if(type === 'food') {
    return (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full z-10 max-w-sm h-[400px] flex flex-col justify-end rounded-lg shadow bg-gray-800 border-gray-700"
      >
        <a href="#">
          <div className="flex p-1 m-4 justify-center">
          <svg fill="#C9C9C9" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 377.24 377.24" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M369.74,299.205h-26.08l6.877-82.14c0.176-2.091-0.533-4.159-1.953-5.703c-1.42-1.544-3.422-2.423-5.52-2.423h-4.738 v-47.141c0-4.143-3.357-7.5-7.5-7.5h-69.572l0.658-11.809h3.965c4.143,0,7.5-3.357,7.5-7.5v-21.385c0-4.143-3.357-7.5-7.5-7.5 h-18.16l12.848-32.44l55.053-20.504c3.881-1.445,5.855-5.765,4.41-9.646c-1.443-3.882-5.762-5.857-9.645-4.411l-58.18,21.668 c-1.992,0.741-3.574,2.292-4.355,4.267l-16.266,41.066h-96.66c-4.143,0-7.5,3.357-7.5,7.5v21.385c0,4.143,3.357,7.5,7.5,7.5h4.006 l1.59,25.797c-6.113-1.346-12.492-2.075-19.061-2.075c-41.461,0-75.682,28.446-79.861,64.805h-7.422c-4.143,0-7.5,3.357-7.5,7.5 v22.352c0,3.438,2.314,6.328,5.469,7.214c-0.566,1.921-0.875,3.958-0.875,6.069c0,7.699,4.07,14.418,10.088,17.998 c0.17,2.37,0.482,4.723,0.904,7.056H7.5c-4.143,0-7.5,3.358-7.5,7.5v24.404c0,4.143,3.357,7.5,7.5,7.5h362.24 c4.143,0,7.5-3.357,7.5-7.5v-24.404C377.24,302.563,373.883,299.205,369.74,299.205z M216.885,217.067l6.889,82.139h-23.211 c0.471-2.345,0.799-4.676,0.98-7.047c6.024-3.578,10.102-10.302,10.102-18.007c0-2.112-0.32-4.145-0.893-6.065 c3.162-0.88,5.486-3.773,5.486-7.218v-22.352c0-4.143-3.357-7.5-7.5-7.5h-7.445c-2.939-25.567-20.721-47.223-45.445-57.821 l-1.893-30.705h92.934l-0.658,11.809h-9.633c-4.143,0-7.5,3.357-7.5,7.5v47.141h-4.738c-2.098,0-4.102,0.879-5.521,2.423 C217.418,212.907,216.709,214.976,216.885,217.067z M333.033,223.94c-6.105,7.498-23.773,15.178-49.322,15.178 s-43.219-7.68-49.324-15.178H333.033z M244.098,208.94v-39.641h8.553v39.641H244.098z M283.711,254.117 c20.121,0,37.607-4.307,49.625-11.375l-4.729,56.463h-89.783l-4.732-56.455C246.107,249.815,263.596,254.117,283.711,254.117z M314.773,169.299h8.553v39.641h-8.553V169.299z M291.221,169.299h8.553v39.641h-8.553V169.299z M267.65,169.299h8.553v39.641 h-8.553V169.299z M142.422,121.106h115.955v6.385H142.422V121.106z M121.457,181.212c33.105,0,60.535,21.738,64.734,49.805H56.721 C60.92,202.95,88.35,181.212,121.457,181.212z M41.674,253.368v-7.352h159.564v7.352H41.674z M51.264,279.9 c-2.756,0-4.996-2.578-4.996-5.748c0-3.171,2.24-5.75,4.996-5.75H191.65c2.754,0,4.994,2.579,4.994,5.75 c0,3.17-2.24,5.748-4.994,5.748H51.264z M186.137,294.9c-0.242,1.421-0.563,2.847-0.959,4.306H57.559 c-0.34-1.424-0.625-2.859-0.84-4.306H186.137z M362.24,323.609H15v-9.404h347.24V323.609z"></path> <g> <path d="M121.453,203.511c-1.971,0-3.9-0.8-5.301-2.2c-1.4-1.39-2.199-3.33-2.199-5.3c0-1.971,0.799-3.91,2.199-5.3 c1.4-1.4,3.33-2.2,5.301-2.2c1.979,0,3.908,0.8,5.309,2.2c1.391,1.39,2.191,3.329,2.191,5.3c0,1.97-0.801,3.91-2.191,5.3 C125.361,202.711,123.432,203.511,121.453,203.511z"></path> </g> <g> <g> <path d="M91.543,215.101c-1.971,0-3.9-0.8-5.301-2.2c-1.4-1.39-2.199-3.32-2.199-5.3c0-1.97,0.799-3.9,2.199-5.3 c1.4-1.4,3.33-2.2,5.301-2.2c1.979,0,3.91,0.8,5.309,2.2c1.391,1.39,2.191,3.33,2.191,5.3c0,1.979-0.801,3.91-2.191,5.3 C95.453,214.301,93.521,215.101,91.543,215.101z"></path> </g> <g> <path d="M151.373,215.101c-1.98,0-3.91-0.8-5.311-2.2c-1.391-1.39-2.189-3.32-2.189-5.3c0-1.97,0.799-3.9,2.189-5.3 c1.4-1.4,3.33-2.2,5.311-2.2c1.969,0,3.898,0.8,5.299,2.2c1.391,1.4,2.201,3.33,2.201,5.3c0,1.979-0.811,3.91-2.201,5.3 C155.271,214.301,153.342,215.101,151.373,215.101z"></path> </g> </g> </g> </g> </g></svg>
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
          <div className="flex p-1 h-56 justify-center">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M11 19.5H21" stroke="#C9C9C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="0.4" d="M11 12.5H21" stroke="#C9C9C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="0.4" d="M11 5.5H21" stroke="#C9C9C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M3 5.5L4 6.5L7 3.5" stroke="#C9C9C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M3 12.5L4 13.5L7 10.5" stroke="#C9C9C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M3 19.5L4 20.5L7 17.5" stroke="#C9C9C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
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
