import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

export default function SnowLayer({ count = 30, wind = 0, speed = 5 }) {
  const [flakes, setFlakes] = useState([]);

  useEffect(() => {
    const data = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percent across the screen
      size: Math.random() * 5 + 3, // px
      duration: Math.random() * 5 + speed,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.6 + 0.3,
      windOffset: (Math.random() - 0.5) * wind,
    }));

    // We intentionally set state here once after mount / when props change.
    // One render after mount is expected for particle initialization.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFlakes(data);
  }, [count, speed, wind]);

  return (
    <>
      {flakes.map((f) => (
        <motion.div
          key={f.id}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            left: `${f.left}%`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            opacity: f.opacity,
          }}
          initial={{ y: -20, x: 0 }}
          animate={{ y: "110vh", x: f.windOffset }}
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