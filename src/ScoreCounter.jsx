import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";

export default function ScoreCounter({ score }) {
  const [displayScore, setDisplayScore] = useState(score);

  useEffect(() => {
    const controls = animate(displayScore, score, {
      duration: 0.6,
      ease: "easeOut",
      onUpdate(value) {
        setDisplayScore(Math.floor(value));
      },
    });

    return () => controls.stop();
  }, [score]);

  return (
    <>
      <motion.div
        key={score}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 0.4 }}
        className="text-5xl font-bold text-indigo-600"
      >
        {displayScore}
      </motion.div>
    </>
  );
}
