import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

export default function AnimatedList ({ children, className }: {
  children: ReactNode,
  className: string
}) {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.1,
  });

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.ul
      ref={ref}
      variants={listVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
     {children}
    </motion.ul>
  );
}

