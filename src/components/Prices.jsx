import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { assets } from '../data/siteData.js';
import { SectionTitle } from './SectionTitle.jsx';
import { fadeUp } from './motion.js';

export function Prices({ t }) {
  return (
    <section id="prices" className="section prices-section">
      <div className="container">
        <SectionTitle eyebrow={t.pricesEyebrow} title={t.pricesTitle} />
        <div className="price-grid">
          {t.prices.map(([title, subtitle, price]) => (
            <motion.article className="price-card" key={title} {...fadeUp}>
              <span>{subtitle}</span>
              <h3>{title}</h3>
              <strong>{price}</strong>
            </motion.article>
          ))}
        </div>
        <div className="rules-layout">
          <motion.div className="rules-card" {...fadeUp}>
            <h3>{t.rulesTitle}</h3>
            {t.rules.map((rule) => <p key={rule}><Check size={16} />{rule}</p>)}
          </motion.div>
          <motion.a className="source-image rules-image" href={assets.rules} target="_blank" rel="noreferrer" {...fadeUp}>
            <img src={assets.rules} alt="Original club rules and prices" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
