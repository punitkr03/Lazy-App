import {Route, Routes, Navigate } from "react-router-dom"
import HomePage from "./routes/HomePage"
import Gigs from "./routes/Gigs"
import Login from "./routes/Login"
import SignUp from "./routes/SignUp"
import Info from "./routes/Info"
import Profile from "./routes/ProfilePage"
import CreateGig from "./routes/CreateGigs"


export default function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/info" element={<Info />}/>
          <Route path="/gigs" element={<Gigs />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/create" element={<CreateGig />}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </div>
  )
}