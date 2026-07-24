import { motion } from 'framer-motion';
import { Shield, Target, Trophy } from 'lucide-react';
import { assets } from '../data/siteData.js';
import { SectionTitle } from './SectionTitle.jsx';
import { fadeUp } from './motion.js';

export function About({ t }) {
  const icons = [Trophy, Target, Shield];

  return (
    <section id="club" className="section about-section">
      <div className="container about-grid">
        <div>
          <SectionTitle eyebrow={t.aboutEyebrow} title={t.aboutTitle} text={t.aboutText} />
          <div className="values-grid">
            {t.values.map(([title, body], index) => {
              const Icon = icons[index];
              return (
                <motion.article className="value-card" key={title} {...fadeUp}>
                  <Icon size={22} />
                  <h3>{title}</h3>
                  <p>{body}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
        <motion.div className="image-feature" {...fadeUp}>
          <img src={assets.heroBottom} alt="Zendokai Karate training atmosphere" />
        </motion.div>
      </div>
    </section>
  );
}
