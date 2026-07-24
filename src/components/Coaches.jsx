import { motion } from 'framer-motion';
import { assets } from '../data/siteData.js';
import { SectionTitle } from './SectionTitle.jsx';
import { fadeUp } from './motion.js';

export function Coaches({ t }) {
  return (
    <section id="coaches" className="section coaches-section">
      <div className="container">
        <SectionTitle eyebrow={t.coachesEyebrow} title={t.coachesTitle} text={t.coachesText} />
        <div className="coach-grid">
          {t.coaches.map(([name, body]) => (
            <motion.article className="coach-card" key={name} {...fadeUp}>
              <img src={assets.sensei} alt={name} />
              <div>
                <span>Zendokai Jaguar</span>
                <h3>{name}</h3>
                <p>{body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
