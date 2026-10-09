import { ArrowUpRight, Download } from 'lucide-react';
import { heroData, links } from '../data/portfolioData';
import ImageFallback from './ImageFallback';

const isDisabledLink = (url) => typeof url === 'string' && url.startsWith('ADD_');

function Hero() {
  return (
    <section id="home" className="hero-section section container reveal" data-reveal>
      <div className="hero-content">
        <span className="eyebrow">{heroData.badge}</span>

        <h1>
          {heroData.greeting.split(' ').slice(0, 2).join(' ')}{' '}
          <span className="gradient-text">{heroData.highlight}</span>
        </h1>

        <h2>{heroData.subtitle}</h2>

        <p>{heroData.description}</p>

        <div className="hero-actions">
          <a href="#projects" className="primary-btn">
            View My Projects
            <ArrowUpRight size={18} />
          </a>

          {isDisabledLink(links.resume) ? (
            <button type="button" className="secondary-btn disabled" disabled>
              Download Resume
              <Download size={18} />
            </button>
          ) : (
            <a href={links.resume} className="secondary-btn" download>
              Download Resume
              <Download size={18} />
            </a>
          )}

          <a href="#contact" className="secondary-btn">
            Contact Me
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="profile-wrapper">
          <div className="profile-ring" />
          <div className="profile-inner">
            <ImageFallback
              src={heroData.profileImage}
              alt="Portrait of Vidyashree Nandani"
              className="profile-image"
              label="Your Photo"
            />
          </div>
        </div>

        <div className="glass-card floating-card">
          <span className="card-label">focus</span>
          <div className="code-lines">
            <span>const focus = ['UI/UX', 'Frontend'];</span>
            <span>return &lt;Portfolio /&gt;;</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
