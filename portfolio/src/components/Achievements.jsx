import { achievements } from '../data/portfolioData';
import ImageFallback from './ImageFallback';

function Achievements() {
  return (
    <section id="achievements" className="section reveal" data-reveal>
      <div className="container section-heading narrow">
        <p className="section-tag">ACHIEVEMENTS</p>
        <h2>Achievements</h2>
      </div>

      <div className="container achievement-grid">
        {achievements.map((achievement) => (
          <article className="achievement-card" key={achievement.title}>
            {achievement.image ? (
              <div className="achievement-image-wrap">
                <ImageFallback
                  src={achievement.image}
                  alt={achievement.title}
                  className="achievement-image"
                  label={achievement.title}
                />
              </div>
            ) : null}

            <div className="achievement-body">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
