import { useState } from 'react';
import { text } from './data/siteData.js';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { Stats } from './components/Stats.jsx';
import { About } from './components/About.jsx';
import { Programs } from './components/Programs.jsx';
import { Schedule } from './components/Schedule.jsx';
import { Prices } from './components/Prices.jsx';
import { Military } from './components/Military.jsx';
import { Coaches } from './components/Coaches.jsx';
import { Gallery } from './components/Gallery.jsx';
import { Contacts } from './components/Contacts.jsx';
import { Footer } from './components/Footer.jsx';

export default function App() {
  const [lang, setLang] = useState('uk');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = text[lang];

  return (
    <div className="site-shell">
      <Header t={t} lang={lang} setLang={setLang} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main id="top">
        <Hero t={t} />
        <Stats t={t} />
        <About t={t} />
        <Programs t={t} />
        <Schedule t={t} />
        <Prices t={t} />
        <Military t={t} />
        <Coaches t={t} />
        <Gallery t={t} />
        <Contacts t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
