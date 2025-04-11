import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Ceylon_Tea_-_looleconera_v_1x.png";

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [zooming, setZooming] = useState(false);

  useEffect(() => {
    const zoomTimer = setTimeout(() => setZooming(true), 4600); // Start zoom just before splash ends
    const finishTimer = setTimeout(() => onFinish(), 5000); // End splash

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50"
        initial={{ opacity: 0, scale: 1 }}
        animate={
          zooming ? { scale: 1.15, opacity: 0 } : { scale: 1, opacity: 1 }
        }
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Logo Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="relative"
        >
          <img
            src={Logo}
            alt="Logo"
            className="w-[320px] h-[140px] object-contain drop-shadow-lg"
          />

          {/* Shimmer Line */}
          <motion.div
            className="absolute inset-0 w-full h-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
          >
            <motion.div
              className="absolute top-0 left-0 h-full w-1 bg-green-500/90 blur-sm -z-10"
              animate={{ x: ["0%", "8000%", "0%"] }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
