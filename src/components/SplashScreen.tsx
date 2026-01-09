// @ts-nocheck
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3200); // Slightly longer to appreciate the text reveal

    return () => clearTimeout(timer);
  }, [navigate]);

  // Animation variants for the letters
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      scale: 15,
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8 } 
    },
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black overflow-hidden relative">
      
      {/* Cinematic Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black"
      />

      {/* CineHub Animated Text Logo */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 flex text-5xl md:text-8xl font-black tracking-tighter"
      >
        {"CINE".split("").map((char, index) => (
          <motion.span 
            key={index} 
            variants={letterVariants} 
            className="text-red-600 drop-shadow-[0_0_25px_rgba(220,38,38,0.5)]"
          >
            {char}
          </motion.span>
        ))}
        {"HUB".split("").map((char, index) => (
          <motion.span 
            key={index + 4} 
            variants={letterVariants} 
            className="text-white"
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      {/* Netflix-style Light Bar (Sound Bar Effect) */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: [0, 1, 0] }}
        transition={{ delay: 1.5, duration: 1, ease: "circOut" }}
        className="absolute bottom-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent"
      />

      {/* Final Exit Flash */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ delay: 2.7, duration: 0.5 }}
        className="absolute inset-0 bg-white z-20 pointer-events-none"
      />
    </div>
  );
};

export default SplashScreen;