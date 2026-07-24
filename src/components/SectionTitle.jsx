import { motion } from 'framer-motion';
import { fadeUp } from './motion.js';

export function SectionTitle({ eyebrow, title, text }) {
  return (
    <motion.div className="section-title" {...fadeUp}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}
