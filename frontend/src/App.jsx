import {Route, Routes, Navigate } from "react-router-dom"
import HomePage from "./routes/HomePage"
import AllGigs from "./routes/AllGigs"
import Login from "./routes/Login"
import SignUp from "./routes/SignUp"
import Info from "./routes/Info"
import Completed from "./routes/Completed"
import MyGigs from "./routes/MyGigs"


export default function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/info" element={<Info />}/>
          <Route path="/allGigs" element={<AllGigs />}/>
          <Route path="/myGigs" element={<MyGigs />}/>
          <Route path="/completed" element={<Completed />}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </div>
  )
}