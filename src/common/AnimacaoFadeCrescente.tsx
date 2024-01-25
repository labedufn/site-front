import { AnimationControls, motion } from "framer-motion";
import React, { ReactNode, useEffect } from "react";

interface AnimacaoFadeCrescenteProps {
  controls: AnimationControls;
  children: ReactNode;
}

const AnimacaoFadeCrescente: React.FC<AnimacaoFadeCrescenteProps> = ({ controls, children }) => {
  useEffect(() => {
    controls.start({ opacity: 0 });

    controls.start({ opacity: 1, transition: { duration: 0.5, delay: 0.1 } });
  }, [controls]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={controls}>
      {children}
    </motion.div>
  );
};

export default AnimacaoFadeCrescente;
