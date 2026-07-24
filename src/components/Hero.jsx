import { motion } from 'framer-motion';
import { ArrowRight, Check, Phone, Shield, Star } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa6';
import { assets, INSTAGRAM_URL, PHONE_LINK } from '../data/siteData.js';

export function Hero({ t }) {
  return (
    <section className="hero section-dark">
      <div className="hero-bg" aria-hidden="true"><img src={assets.hero} alt="" /></div>
      <div className="container hero-grid">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="hero-kicker"><Shield size={16} />{t.heroKicker}</span>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroLead}</p>
          <div className="hero-buttons">
            <a className="btn primary" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><FaInstagram aria-hidden="true" />{t.trial}<ArrowRight size={18} /></a>
            <a className="btn secondary" href={PHONE_LINK}><Phone size={18} />{t.call}</a>
          </div>
          <div className="trial-note"><Star size={16} />{t.trialNote}</div>
        </motion.div>

        <motion.div className="hero-card" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.6 }}>
          <img src={assets.logo} alt="Jaguar club logo" className="hero-logo" />
          <div className="hero-mini-list">
            {t.heroCards.map(([title, body]) => (
              <div className="mini-row" key={title}>
                <Check size={16} />
                <div><strong>{title}</strong><span>{body}</span></div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
