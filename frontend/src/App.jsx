import {Route, Routes, Navigate } from "react-router-dom"
import HomePage from "./routes/HomePage"
import Gigs from "./routes/Gigs"


export default function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/gigs" element={<Gigs />}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </div>
  )
}