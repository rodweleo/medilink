import { useEffect, useState } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AnimatedCounter ({ start = 0, end = 10, duration = 2 }) {
  const [count, setCount] = useState(start);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 1, 
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const countUp = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (end - start) + start));

        if (progress < 1) {
          requestAnimationFrame(countUp);
        }
      };
      requestAnimationFrame(countUp);
    }
  }, [inView, start, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, transition: { duration: 0.5 } },
      }}
    >
      <h1>{count}</h1>
    </motion.div>
  );
}

