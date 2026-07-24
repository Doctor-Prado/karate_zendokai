import { useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, MapPin, Menu, X } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { assets, FACEBOOK_URL, INSTAGRAM_URL, MAPS_URL, PHONE_LINK } from '../data/siteData.js';

export function Header({ t, lang, setLang, menuOpen, setMenuOpen }) {
  const nav = useMemo(() => [
    ['#club', t.nav[0]],
    ['#programs', t.nav[1]],
    ['#schedule', t.nav[2]],
    ['#prices', t.nav[3]],
    ['#coaches', t.nav[4]],
    ['#contacts', t.nav[5]],
  ], [t]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="topline">
        <a href={MAPS_URL} target="_blank" rel="noreferrer" className="topline-link">
          <MapPin size={15} />
          <span>{t.topAddress}</span>
        </a>
        <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="topline-link hide-xs">
          <FaFacebookF aria-hidden="true" />
          <span>{t.fb}</span>
        </a>
      </div>

      <header className="header">
        <a className="brand" href="#top" aria-label="Zendokai Karate Club Jaguar">
          <img src={assets.logo} alt="Jaguar logo" />
          <span>Zendokai<br />Jaguar</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>

        <div className="header-actions">
          <button className="lang-switch" type="button" onClick={() => setLang(lang === 'uk' ? 'en' : 'uk')}>
            {lang === 'uk' ? 'EN' : 'UA'}
          </button>
          <a className="header-cta" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <FaInstagram aria-hidden="true" />
            <span>Instagram</span>
          </a>
          <button className="menu-btn" type="button" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="mobile-panel">
              <button className="menu-close" type="button" onClick={closeMenu} aria-label="Close menu"><X /></button>
              {nav.map(([href, label]) => <a key={href} href={href} onClick={closeMenu}>{label}<ChevronRight size={18} /></a>)}
              <div className="mobile-actions">
                <a className="btn primary" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><FaInstagram aria-hidden="true" />{t.trial}</a>
                <a className="btn secondary" href={PHONE_LINK}>{t.call}</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
