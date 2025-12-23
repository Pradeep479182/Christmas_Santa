import { motion } from "framer-motion";
import { useState } from "react";
import SnowSystem from "./SnowSystem";
import MusicPlayButton from "./MusicPlayButton";
import Santa from "../assets/santa.png";
import Cloud from "../assets/cloud.png";

export default function ChristmasAnimation() {
  const [started, setStarted] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #7f1d1d, #450a0a)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "400px",
          height: "600px",
          background: "#991b1b",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        {/* Snow AFTER play */}
        {started && <SnowSystem />}

        {/* Cloud */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "320px",
            height: "220px",
            backgroundImage: `url(${Cloud})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        >
          <motion.img
            src={Santa}
            style={{
              position: "absolute",
              bottom: "20px",
              width: "80px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            initial={{ x: "-80%" }}
            animate={started ? { x: ["-80%", "20%"] } : {}}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Snow ground */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "80px",
            background: "white",
            borderTopLeftRadius: "100%",
            borderTopRightRadius: "100%",
          }}
        />

        {/* Play Button */}
        {!started && (
          <div
            style={{
              position: "absolute",
              bottom: 20,
              width: "100%",
              textAlign: "center",
            }}
          >
            <MusicPlayButton setStarted={setStarted} />
          </div>
        )}
      </div>
    </div>
  );
}
