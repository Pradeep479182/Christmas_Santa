import { motion } from "framer-motion";
import SnowSystem from "./SnowSystem";



// Images
import Santa from "../assets/santa.png";
import Tree from "../assets/tree.png";
import Cloud from "../assets/cloud.png";

export default function ChristmasAnimation() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-red-700 to-red-900">

      <h1 className="absolute top-10 w-full text-center text-white text-4xl font-bold z-20">
        Merry Christmas 🎅
      </h1>

      {/* Cloud */}
      <motion.img
        src={Cloud}
        className="absolute top-32 w-48 opacity-70"
        animate={{ x: ["-30%", "120%"] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />

      {/* Santa */}
      <motion.img
        src={Santa}
        className="absolute top-56 w-40"
        animate={{ x: ["-30%", "120%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Tree */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2">
        <div className="absolute inset-0 bg-yellow-300/40 blur-3xl animate-pulse" />
        <img src={Tree} className="relative w-64 z-10" />
      </div>

      <SnowSystem />

      <div className="absolute bottom-0 w-full h-32 bg-white rounded-t-[100%]" />
    </div>
  );

  
}

