import { motion } from 'framer-motion';

const ScrollReveal = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  y = 30,
  className = ""
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: y
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;