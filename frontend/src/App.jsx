import {Route, Routes, Navigate } from "react-router-dom"
import HomePage from "./routes/HomePage"
import Gigs from "./routes/Gigs"
import Login from "./routes/Login"
import SignUp from "./routes/SignUp"


export default function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/gigs" element={<Gigs />}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </div>
  )
}