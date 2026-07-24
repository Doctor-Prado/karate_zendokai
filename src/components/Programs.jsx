import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle.jsx';
import { fadeUp } from './motion.js';

export function Programs({ t }) {
  return (
    <section id="programs" className="section programs-section">
      <div className="container">
        <SectionTitle eyebrow={t.programsEyebrow} title={t.programsTitle} text={t.programsText} />
        <div className="program-grid">
          {t.programs.map(([title, body], index) => (
            <motion.article className="program-card" key={title} {...fadeUp}>
              <span className="program-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
