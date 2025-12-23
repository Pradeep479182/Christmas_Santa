import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SnowLayer({ count = 30, wind = 0, speed = 6 }) {
  const [flakes, setFlakes] = useState([]);

  useEffect(() => {
    const data = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 4 + 3,
      duration: Math.random() * 5 + speed,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.6 + 0.3,
      drift: (Math.random() - 0.5) * wind,
    }));

    setFlakes(data);
  }, [count, speed, wind]);

  return (
    <>
      {flakes.map((f) => (
        <motion.div
          key={f.id}
          style={{
            position: "absolute",
            top: "-10px",
            left: `${f.left}%`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            backgroundColor: "white",
            borderRadius: "50%",
            opacity: f.opacity,
          }}
          animate={{ y: "110vh", x: f.drift }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </>
  );
}