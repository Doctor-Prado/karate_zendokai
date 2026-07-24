import { motion } from 'framer-motion';
import { fadeUp } from './motion.js';

export function Stats({ t }) {
  return (
    <section className="stats-wrap">
      <div className="container stats-grid">
        {t.stats.map(([num, label]) => (
          <motion.div className="stat-card" key={label} {...fadeUp}>
            <strong>{num}</strong>
            <span>{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
