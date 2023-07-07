import {Route, Routes} from "react-router-dom"

// import Navbar from "./components/Navbar"
import HomePage from "./routes/HomePage"
import Footer from "./components/Footer"


export default function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      <Footer />
    </div>
  )
}