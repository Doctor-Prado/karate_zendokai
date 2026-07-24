import { assets, MAPS_URL } from '../data/siteData.js';

export function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <img src={assets.logo} alt="Jaguar logo" />
        <p>{t.footer}</p>
        <a href={MAPS_URL} target="_blank" rel="noreferrer">{t.map}</a>
      </div>
    </footer>
  );
}
