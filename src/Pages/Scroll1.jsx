import { motion } from "framer-motion";

const Scroll1 = () => {
  return (
    <motion.div
      className="w-full h-40 bg-blue-500 text-white flex items-center justify-center text-2xl"
      initial={{ opacity: 0, y: 50 }} // Start invisible & move up
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      transition={{ duration: 0.8 }} // Smooth transition
    >
      Scroll Animation Activated!
    </motion.div>
  );
};

export default Scroll1;
