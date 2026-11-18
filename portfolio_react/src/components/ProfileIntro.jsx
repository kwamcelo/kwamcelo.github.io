import { contact, schools } from '../data/profile.js'
import ButtonLink from './ButtonLink.jsx'

export default function ProfileIntro() {
    return (
        <div className="text-container">
            <img height="300" width="220" src="/headshot.JPG" alt="Kwami Aku-Dominguez" />

            <div className="intro-details">
                <h1>Kwami Aku-Dominguez</h1>

                <div className="school-info">
                    {schools.map((school) => (
                        <div className="school-row" key={school.name}>
                            <img width="100" src={school.image} alt={`${school.name} logo`} />
                            <p>
                                {school.degree}, {school.name}: <strong>{school.status}</strong>
                            </p>
                        </div>
                    ))}
                </div>

                <div className="contact-links">
                    <ButtonLink href={`mailto:${contact.email}`}>Email me</ButtonLink>
                    {contact.resume && <ButtonLink href={contact.resume}>Resume (PDF)</ButtonLink>}
                    <ButtonLink href={contact.linkedin}>LinkedIn</ButtonLink>
                    <ButtonLink href={contact.github}>GitHub</ButtonLink>
                </div>
            </div>
        </div>
    )
}
