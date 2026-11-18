import { skills } from '../data/profile.js'

export default function Skills() {
    return (
        <div className="skills-container">
            <h1>Skills</h1>
            <dl className="skills-list">
                {skills.map((group) => (
                    <div className="skills-group" key={group.label}>
                        <dt>{group.label}</dt>
                        <dd>{group.items.join(', ')}</dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}
