import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { database } from "../../appwrite/appwriteConfig"
import { ID } from "appwrite"

export default function Login() {
  const user = JSON.parse(localStorage.getItem("user"))
  const [formData, setFormData] = useState({
    category: "",
    description: "",
    postedBy: user.name,
    payout: "",
    isTakenUserId: null,
    isCompleted: false,
    creatorId: user.id,
    creatorPhone: user.mobile,
  });
  const [isCategoryValid, setIsCategoryValid] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/gigs");
  };
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.category === "") {
      setIsCategoryValid(false);
      return;
    } else {
        setIsCategoryValid(true)
    }
    database.createDocument("64ba99103e72d6d3f111",
    "64bbfa41435313f560e3",
    ID.unique(),
    formData,
    )
    .then(() => {
      navigate("/gigs")
    })
  };

  return (
    <div className="relative flex justify-center items-center w-screen h-screen bg-gray-900">
      {true && (
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
                <h1 className="text-2xl col-start-2 text-green-500 font-bold">Create Gig</h1>
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
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className={`border bg-amber-100 rounded-lg py-2 px-4 ${
                      !isCategoryValid ? "border-red-500" : ""
                    }`}
                  >
                    <option value="">Select category</option>
                    <option value="food">Food</option>
                    <option value="misc">Miscellaneous</option>
                  </select>
                  {!isCategoryValid && (
                    <p className="text-red-500 text-sm mt-1">Category is required</p>
                  )}
                </div>
                <div className="flex flex-col mb-4">
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Description"
                    className="border bg-amber-100 rounded-lg py-2 px-4 resize-none h-32"
                    required
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <input
                    type="number"
                    name="payout"
                    value={formData.payout}
                    onChange={handleInputChange}
                    placeholder="Payout"
                    className="border bg-amber-100 rounded-lg py-2 px-4"
                    required
                  />
                </div>
                <div className="flex flex-col -mb-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="bg-purple-600 text-white font-semibold rounded-lg py-2 px-4 hover:bg-purple-700 focus:bg-green-700 mb-2"
                    type="submit"
                  >
                    Create
                  </motion.button>
                  <div />
                </div>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
}
