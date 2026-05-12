import { projects } from '../data/profile.js'

export default function Projects() {
    return (
        <div className="projects-container">
            <h1>Projects</h1>

            {projects.map((project) => (
                <div className="project-card" key={project.title}>
                    <div className="project-text">
                        <h4>{project.title}</h4>
                        <ul>
                            {project.summary.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="project-images">
                        {project.images.map((image) => (
                            <img key={image} src={image} alt={project.title} />
                        ))}
                    </div>
                </div>
            ))}
        </div>

    )

}
