import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { contactDetails, links } from '../data/portfolioData';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Vidyashree Nandani</h3>
          <p>BCA Student | Web Developer | UI/UX Enthusiast</p>
        </div>

        <div className="footer-links">
          <a href={`mailto:${contactDetails.email}`}>
            <Mail size={16} />
            Email
          </a>
          <a href={contactDetails.linkedin} target="_blank" rel="noreferrer">
            <ArrowUpRight size={16} />
            LinkedIn
          </a>
          {links.github.startsWith('ADD_') ? (
            <span className="footer-text">
              <ArrowUpRight size={16} />
              GitHub
            </span>
          ) : (
            <a href={links.github} target="_blank" rel="noreferrer">
              <ArrowUpRight size={16} />
              GitHub
            </a>
          )}
          <span className="footer-text">
            <MapPin size={16} />
            {contactDetails.location}
          </span>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Vidyashree Nandani. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
