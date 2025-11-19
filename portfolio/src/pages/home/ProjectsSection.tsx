// src/components/ProjectsSection/ProjectsSection.jsx
import { useState } from "react";
import { PROJECTS, type Project } from "../../data/projects";
import { Lightbox, type LightboxItem } from "../../components/Lightbox";
import "./ProjectsSection.css";

export function ProjectsSection() {
  const [lightboxItem, setLightboxItem] = useState<LightboxItem>(null);
  // { type: 'image' | 'video', src: string, title?: string } | null

  const openLightbox = (project: Project) => {
    setLightboxItem({
      type: project.type,
      src: project.mediaSrc,
      title: project.title,
    });
  };

  const closeLightbox = () => setLightboxItem(null);

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projeler</h2>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <div key={project.id} className="project-card">
              <button
                type="button"
                className="project-image"
                onClick={() => openLightbox(project)}
              >
                <img src={project.thumbnail} alt={project.title} />
                {project.type === "video" && (
                  <span className="play-badge">▶</span>
                )}
              </button>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={
                        "project-tag" + (tag.special ? " special" : "")
                      }
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={link.iconClass}></i> {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Lightbox item={lightboxItem} onClose={closeLightbox} />
      </div>
    </section>
  );
}
