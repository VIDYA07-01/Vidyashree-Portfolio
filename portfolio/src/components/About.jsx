import { educationDetails } from '../data/portfolioData';

function About() {
  return (
    <section id="about" className="section reveal" data-reveal>
      <div className="container section-heading">
        <p className="section-tag">ABOUT ME</p>
        <h2>Passionate about creating useful digital experiences.</h2>
      </div>

      <div className="container info-grid">
        {educationDetails.map((item) => (
          <article className="info-card" key={item.label}>
            <span className="card-label">{item.label}</span>
            <h3>{item.value}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;
