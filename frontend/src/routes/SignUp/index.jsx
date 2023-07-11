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

  const handleLogin = () => {
    setIsVisible(false);
    navigate("/login")
  }

  const handleSignUp = () => {
    setIsVisible(false);
    navigate("/info")
  }


  return (
    <div className="relative flex justify-center items-center w-screen h-screen bg-gray-900">
      {isVisible && (
        <>
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
              className="bg-gray-700 p-8 rounded-lg shadow-lg flex flex-col max-w-sm"
            > 
            <div className="grid grid-cols-4 justify-center mb-4">
              <h1 className="text-2xl col-start-2 col-span-2 text-center text-green-500 font-bold">SignUp</h1>
              <button className="col-start-4" onClick={handleClose}>
                <div className="flex justify-end">
                <svg className="w-4 h-4 justify-center text-purple-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                </div>
              </button>
            </div>
            <div className="flex gap-2 mb-4">
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="First name"
                  className="bg-amber-100 rounded-lg py-2 px-2 w-full"
                  />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Last name"
                  className=" bg-amber-100 rounded-lg py-2 px-2 w-full"
                  />
              </div>
            </div>
            <div className="flex flex-col mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="border bg-amber-100 rounded-lg py-2 px-4"
                  />
              </div>
              <div className="flex flex-col mb-4">
                <input
                  type="password"
                  placeholder="Create password"
                  className="border bg-amber-100 rounded-lg py-2 px-4"
                />
              </div>
              <div className="flex flex-col mb-4">
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="border bg-amber-100 rounded-lg py-2 px-4"
                />
              </div>
              <div className="flex flex-col -mb-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-purple-600 text-white font-semibold rounded-lg py-2 px-4 hover:bg-purple-700 focus:bg-green-700
                  mb-2"
                >
                  SignUp
                </motion.button>
                <span className="text-sm text-center">Already have an account? <a className="text-blue-300 hover:underline" href='#' onClick={handleLogin}>Login</a> </span>
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