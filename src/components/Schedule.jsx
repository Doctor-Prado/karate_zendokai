import { motion } from 'framer-motion';
import { Clock, ExternalLink } from 'lucide-react';
import { assets, schedule } from '../data/siteData.js';
import { SectionTitle } from './SectionTitle.jsx';
import { fadeUp } from './motion.js';

export function Schedule({ t }) {
  return (
    <section id="schedule" className="section schedule-section">
      <div className="container split-head">
        <SectionTitle eyebrow={t.scheduleEyebrow} title={t.scheduleTitle} text={t.scheduleText} />
        <a className="text-link" href={assets.schedule} target="_blank" rel="noreferrer">Оригінал розкладу<ExternalLink size={16} /></a>
      </div>
      <div className="container schedule-layout">
        <div className="schedule-cards">
          {schedule.map((item) => (
            <motion.article className="schedule-card" key={item.day} {...fadeUp}>
              <div className="schedule-card-head"><strong>{item.day}</strong><span>{item.coach}</span></div>
              <div className="schedule-list">
                {item.groups.map(([time, group]) => (
                  <div className="schedule-time" key={time + group}>
                    <Clock size={15} />
                    <b>{time}</b>
                    <span>{group}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
        <motion.a className="source-image" href={assets.schedule} target="_blank" rel="noreferrer" {...fadeUp}>
          <img src={assets.schedule} alt="Original training schedule" />
        </motion.a>
      </div>
    </section>
  );
}
