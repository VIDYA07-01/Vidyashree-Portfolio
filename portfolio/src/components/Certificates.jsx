import { ArrowUpRight } from 'lucide-react';
import { certificates } from '../data/portfolioData';
import ImageFallback from './ImageFallback';

function Certificates() {
  return (
    <section id="certificates" className="section reveal" data-reveal>
      <div className="container section-heading narrow">
        <p className="section-tag">CERTIFICATES</p>
        <h2>Certificates</h2>
      </div>

      <div className="container certificate-grid">
        {certificates.map((certificate) => (
          <article
            className="certificate-card"
            key={certificate.title}
          >
            <div className="certificate-image-wrap">
              <ImageFallback
                src={certificate.image}
                alt={certificate.title}
                className="certificate-image"
                label={certificate.title}
              />
            </div>

            <div className="certificate-body">
              <h3>{certificate.title}</h3>

              <span className="certificate-category">
                {certificate.category}
              </span>

              <p>{certificate.description}</p>

              <a
                href={certificate.image}
                className="card-btn"
                target="_blank"
                rel="noreferrer"
              >
                View Certificate
                <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certificates;