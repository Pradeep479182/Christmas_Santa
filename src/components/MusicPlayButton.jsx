import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Music from "../assets/bg-music.mp4";

export default function MusicPlayButton({ setStarted }) {
  const audioRef = useRef(null);
  const [hover, setHover] = useState(false);

  const handlePlay = () => {
    audioRef.current.play();
    setStarted(true);
  };

  return (
    <>
      <audio ref={audioRef} loop src={Music} />

      <motion.button
        onClick={handlePlay}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        animate={{
          width: hover ? 180 : 64,
          borderRadius: hover ? 999 : "50%",
          boxShadow: hover
            ? "0 0 30px rgba(255,0,0,0.8)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{
          height: 64,
          background:
            "radial-gradient(circle at top, #ff4d4d, #7f1d1d)",
          border: "none",
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          overflow: "hidden",
        }}
      >
        ▶ {hover && "Play"}
      </motion.button>
    </>
  );
}
