import { useState, useEffect } from "react";
import {motion} from "framer-motion";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Footer from "../../components/Footer";
//Appwrite imports
import { account, database } from "../../appwrite/appwriteConfig";

export default function SignUp() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/")
  }

  const handleLogin = () => {
    navigate("/login")
  }
  const [password, setPassword] = useState("");
  const [userdata, setUserData] = useState({
    uuid: "",
    fName: "",
    lName: "",
    email: "",
    mobile: "",
    about: "",
  });

  useEffect(() => {
    setUserData({
      ...userdata,
      uuid: uuidv4(),
    })}, [])

  const updateData = (e) => {
    setUserData({
      ...userdata,
      [e.target.name]: e.target.value,
    });
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    if(userdata.fName === "") {
      alert("Enter a valid name")
      return
    }
    else if(userdata.email === "") {
      alert("Enter a valid email")
      return
    }
    else if(password.length < 8) {
      alert("Password must be atleast 8 characters long")
      return
    }
    else if(userdata.mobile.length !== 10) {
      alert("Enter a valid mobile number")
      return
    }
    const promise = database.createDocument(import.meta.env.VITE_DB_ID,
        import.meta.env.VITE_USER_COLLECTION_ID,
        userdata.uuid,
        userdata
      )
    promise.then(
      function () {
        account.create(
          userdata.uuid,
          userdata.email,
          password,
          userdata.fName+" "+userdata.lName,
        )
      },
      function (error) {
        console.log(error);
        alert("Account creation failed")
      })
      .then(() => {
        account.createEmailSession(userdata.email, password)
      })
      .then(() => {
        localStorage.setItem("user", JSON.stringify({
          id: userdata.uuid,
          name: userdata.fName+" "+userdata.lName,
          email: userdata.email,
          mobile: userdata.mobile,
        }));
      })
      .then(() => {
        navigate("/info");
        window.location.reload()
      })
      .catch((error) => {
        console.log(error);
        alert("Account creation failed")
      })
  }

  return (
    <div className="relative flex justify-center items-center w-screen h-screen bg-gray-900">
      {true && (
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
                  name="fName"
                  type="text"
                  placeholder="First name"
                  className="bg-amber-100 rounded-lg py-2 px-2 w-full"
                  onChange={updateData}
                  />
              </div>
              <div className="w-1/2">
                <input
                  name="lName"
                  type="text"
                  placeholder="Last name"
                  className=" bg-amber-100 rounded-lg py-2 px-2 w-full"
                  onChange={updateData}
                  />
              </div>
            </div>
            <div className="flex flex-col mb-4">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="border bg-amber-100 rounded-lg py-2 px-4"
                  onChange={updateData}
                  />
              </div>
              <div className="flex flex-col mb-4">
                <input
                  name="password"
                  type="password"
                  placeholder="Create password"
                  className="border bg-amber-100 rounded-lg py-2 px-4"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col mb-4">
                <input
                  name="mobile"
                  type="tel"
                  placeholder="10 digit mobile number"
                  pattern="[0-9]{10}"
                  className="border bg-amber-100 rounded-lg py-2 px-4"
                  onChange={updateData}
                />
              </div>
              <div className="flex flex-col -mb-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-purple-600 text-white font-semibold rounded-lg py-2 px-4 hover:bg-purple-700 focus:bg-green-700
                  mb-2" onClick={handleSignUp}
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