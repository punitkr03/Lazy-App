import { useState } from "react";
import {motion} from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

export default function Login() {
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();
  
    const handleClose = () => {
      setIsVisible(false);
      navigate("/")
    }

    const handleSignUp = () => {
      setIsVisible(false);
      navigate("/signup")
    }
  
    return (
      <div className="relative flex justify-center items-center w-screen h-screen bg-gray-900">
        {isVisible && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 backdrop-blur-lg z-10"
            />
  
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-20"
            >
              <motion.div 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="bg-gray-700 p-8 rounded-lg shadow-lg flex flex-col"
              > 
              <div className="justify-between flex mb-4">
                <h1 className="text-2xl text-green-500 font-bold ml-[4.5rem] -mt-4">Login</h1>
                <button className="-mt-4" onClick={handleClose}>
                  <svg className="w-4 h-5 text-purple-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                  </svg>
                </button>
              </div>
                <div className="flex flex-row mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="border bg-amber-100 rounded-lg py-2 px-4"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    className="border bg-amber-100 rounded-lg py-2 px-4"
                  />
                </div>
                <div className="flex flex-col -mb-3">
                  <button
                    className="bg-purple-600 text-white rounded-lg py-2 px-4 hover:bg-purple-700 focus:bg-green-700 hover:ring-2 hover:ring-black
                    mb-2"
                  >
                    Login
                  </button>
                  <span className="text-sm text-center">Not a member yet? <a className="text-blue-300 hover:underline" href='#' onClick={handleSignUp}>SignUp</a> </span>
                <div/>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
        <Footer />
      </div>
    );
}