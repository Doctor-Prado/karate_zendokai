import { motion } from 'framer-motion';
import { assets } from '../data/siteData.js';
import { SectionTitle } from './SectionTitle.jsx';
import { fadeUp } from './motion.js';

export function Gallery({ t }) {
  return (
    <section className="section gallery-section">
      <div className="container">
        <SectionTitle eyebrow={t.galleryEyebrow} title={t.galleryTitle} />
        <div className="gallery-grid">
          {assets.gallery.map((src, index) => (
            <motion.a href={src} target="_blank" rel="noreferrer" className={`gallery-item item-${index + 1}`} key={src} {...fadeUp}>
              <img src={src} alt={`Karate club training ${index + 1}`} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
