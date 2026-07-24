import { motion } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa6';
import { assets, INSTAGRAM_URL } from '../data/siteData.js';
import { fadeUp } from './motion.js';

export function Military({ t }) {
  return (
    <section className="military-section section-dark">
      <div className="container military-grid">
        <motion.div className="military-copy" {...fadeUp}>
          <span className="eyebrow"><Shield size={16} />ЗСУ</span>
          <h2>{t.militaryTitle}</h2>
          <p>{t.militaryText}</p>
          <a className="btn primary" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><FaInstagram aria-hidden="true" />{t.trial}<ArrowRight size={18} /></a>
        </motion.div>
        <motion.div className="military-image" {...fadeUp}>
          <img src={assets.military} alt="Military support" />
        </motion.div>
      </div>
    </section>
  );
}
