import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Music from "../assets/bg-music.mp3";

export default function MusicPlayButton({ setStarted }) {
  const audioRef = useRef(null);
  const [hover, setHover] = useState(false);
  const [started, setStartedLocal] = useState(false);

  const handlePlay = () => {
    if (started) return; // 🔒 prevent multiple clicks

    audioRef.current.volume = 0.6;
    audioRef.current.currentTime = 0;
    audioRef.current.play(); // 🎵 START MUSIC

    setStarted(true);        // ❄ START ANIMATION
    setStartedLocal(true);  // 🔁 lock button
  };

  return (
    <>
      <audio ref={audioRef} src={Music} loop preload="auto" />

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
          fontSize: 18,
          fontWeight: "bold",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        ▶ {hover && "Play"}
      </motion.button>
    </>
  );
}
