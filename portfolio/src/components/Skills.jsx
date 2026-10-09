import {
  Code2,
  Database,
  FileSpreadsheet,
  FolderGit2,
  Layers3,
  MonitorSmartphone,
  Palette,
  Sparkles,
  TerminalSquare,
} from 'lucide-react';
import { skills } from '../data/portfolioData';

const iconMap = {
  Palette,
  Code2,
  Sparkles,
  TerminalSquare,
  Layers3,
  Database,
  FileSpreadsheet,
  MonitorSmartphone,
  FolderGit2,
  Github: FolderGit2,
};

function Skills() {
  return (
    <section id="skills" className="section reveal" data-reveal>
      <div className="container section-heading narrow">
        <p className="section-tag">MY SKILLS</p>
        <h2>My Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I&apos;m learning and working with
        </p>
      </div>

      <div className="container skill-grid">
        {skills.map((skill) => {
          const Icon = iconMap[skill.icon] || Code2;
          return (
            <article className="skill-card" key={skill.name}>
              <div className="skill-icon-wrap">
                <Icon size={24} />
              </div>
              <h3>{skill.name}</h3>
              <span>{skill.category}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
