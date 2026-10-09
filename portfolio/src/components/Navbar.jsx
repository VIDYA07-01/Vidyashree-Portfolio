import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navigation } from '../data/portfolioData';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label="Go to home">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>Vidyashree</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-panel ${isOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={handleNavClick}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="nav-cta" onClick={handleNavClick}>
            Contact Me
            <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
