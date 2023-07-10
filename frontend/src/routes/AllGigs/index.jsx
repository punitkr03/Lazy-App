import Navbar from "../../components/Navbar"
import Card from "../../components/Card"
import { motion } from "framer-motion";

export default function AllGigs() {
  return (
    <div className="bg-gray-900 flex flex-col min-h-screen overflow-hidden">
      <div className=" h-14">
        <Navbar />
      </div>
      <div className="grid lg:grid-cols-4 justify-evenly gap-2 m-4 sm:grid-cols-1 md:grid-cols-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

