import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { ADDRESS, FACEBOOK_URL, INSTAGRAM_URL, MAPS_URL, PHONE_DISPLAY, PHONE_LINK } from '../data/siteData.js';
import { SectionTitle } from './SectionTitle.jsx';
import { fadeUp } from './motion.js';

export function Contacts({ t }) {
  return (
    <section id="contacts" className="section contact-section">
      <div className="container contact-grid">
        <SectionTitle eyebrow={t.contactsEyebrow} title={t.contactsTitle} text={t.contactsText} />
        <motion.div className="contact-card" {...fadeUp}>
          <a href={MAPS_URL} target="_blank" rel="noreferrer"><MapPin size={20} /><span>{ADDRESS}</span></a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><FaInstagram aria-hidden="true" /><span>Instagram</span></a>
          <a href={FACEBOOK_URL} target="_blank" rel="noreferrer"><FaFacebookF aria-hidden="true" /><span>{t.fb}</span></a>
          <a href={PHONE_LINK}><Phone size={20} /><span>{PHONE_DISPLAY}</span></a>
          <div className="contact-actions">
            <a className="btn primary" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><FaInstagram aria-hidden="true" />{t.trial}</a>
            <a className="btn secondary" href={PHONE_LINK}>{t.call}</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
