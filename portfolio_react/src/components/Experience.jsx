import { experience } from '../data/profile.js'

export default function Experience() {
    return (
        <div className="experience-container">
            <h1>Experience</h1>

            {experience.map((job) => (
                <article className="experience-item" key={`${job.role}-${job.org}`}>
                    <div className="experience-header">
                        <h4>
                            {job.role}, <span className="experience-org">{job.org}</span>
                        </h4>
                        <span className="experience-dates">{job.dates}</span>
                    </div>
                    <ul>
                        {job.summary.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </article>
            ))}
        </div>
    )
}
