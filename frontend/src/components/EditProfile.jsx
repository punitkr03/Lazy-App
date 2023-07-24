import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { database } from "../appwrite/appwriteConfig";

EditProfile.propTypes = {
    setShowModal: PropTypes.func.isRequired
}

export default function EditProfile({setShowModal}) {
  const user = JSON.parse(localStorage.getItem("user"))
    const [about, setAbout] = useState(user.about)

    const handleSubmit = (e) => {
      e.preventDefault()
      database.updateDocument("64ba99103e72d6d3f111",
      "64ba9940623e11b2a76a",
      user.id,
      {about: about},
      ).then(() => {
        localStorage.setItem("user", JSON.stringify({...user, about: about}))
      }).then(() => {
        setShowModal(false)
      })
    }

    const handleChange = (e) => {
        setAbout(e.target.value)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    return (
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
              <div className="grid grid-cols-3 justify-center mb-4">
                <h1 className="text-2xl col-start-2 text-green-500 font-bold">Edit Profile</h1>
                <button className="col-start-3" onClick={handleClose}>
                  <div className="flex justify-end">
                    <svg
                      className="w-4 h-4 justify-center text-purple-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </div>
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4">
                  <textarea
                    name="about"
                    value={about}
                    placeholder="About"
                    onChange={handleChange}
                    className="border bg-amber-100 rounded-lg py-2 px-4 resize-none h-32 text-black"
                    required
                  />
                </div>
                <div className="flex flex-col -mb-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="bg-purple-600 text-white font-semibold rounded-lg py-2 px-4 hover:bg-purple-700 focus:bg-green-700 mb-2"
                    type="submit"
                  >
                    Submit
                  </motion.button>
                  <div />
                </div>
              </form>
            </motion.div>
          </motion.div>
        </>
    )
}