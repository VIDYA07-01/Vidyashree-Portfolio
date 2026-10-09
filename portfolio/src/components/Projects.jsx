import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ImageFallback from './ImageFallback';

const isDisabledLink = (url) => typeof url === 'string' && url.startsWith('ADD_');

function Projects() {
  return (
    <section id="projects" className="section reveal" data-reveal>
      <div className="container section-heading narrow">
        <p className="section-tag">FEATURED PROJECTS</p>
        <h2>Featured Projects</h2>
      </div>

      <div className="container project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-number">{project.id}</div>
            <div className="project-image-wrap">
              <ImageFallback
                src={project.image}
                alt={project.title}
                className="project-image"
                label={project.title}
              />
            </div>

            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                {isDisabledLink(project.projectLink) ? (
                  <button type="button" className="card-btn disabled" disabled>
                    View Project
                    <ArrowUpRight size={16} />
                  </button>
                ) : (
                  <a href={project.projectLink} className="card-btn" target="_blank" rel="noreferrer">
                    View Project
                    <ArrowUpRight size={16} />
                  </a>
                )}

                {project.githubLink && isDisabledLink(project.githubLink) ? (
                  <button type="button" className="secondary-card-btn disabled" disabled>
                    GitHub
                  </button>
                ) : project.githubLink ? (
                  <a
                    href={project.githubLink}
                    className="secondary-card-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
