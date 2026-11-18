import { projects } from '../data/profile.js'
import ButtonLink from './ButtonLink.jsx'

export default function Projects() {
    return (
        <div className="projects-container">
            <h1>Projects</h1>

            {projects.map((project) => (
                <div className="project-card" key={project.title}>
                    <div className="project-text">
                        <div className="project-heading">
                            <h4>{project.title}</h4>
                            {project.tech?.length > 0 && (
                                <p className="project-tech">{project.tech.join(' · ')}</p>
                            )}
                            <div className="project-links">
                                {project.links?.code && <ButtonLink href={project.links.code}>Code</ButtonLink>}
                                {project.links?.live && <ButtonLink href={project.links.live}>Live</ButtonLink>}
                            </div>
                        </div>
                        <ul>
                            {project.summary.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    {project.images.length > 0 && (
                        <div className="project-images">
                            {project.images.map((image, i) => (
                                <img
                                    key={image}
                                    src={image}
                                    alt={`${project.title} screenshot ${i + 1}`}
                                    loading="lazy"
                                />
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
