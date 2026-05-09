import ButtonLink from './ButtonLink.jsx'
import { papers, schools } from '../data/profile.js'

export default function ProfileIntro() {
    return (
        <div className="text-container">
            <img height="300" width="220" src="/headshot.JPG" alt="Kwami Aku-Dominguez" />

            <h1>Kwami Aku-Dominguez</h1>

            <div className="logo-strip">
                {schools.map((school) => (
                    <img
                        key={school.name}
                        height="150"
                        width="100"
                        src={school.image}
                        alt={school.name}
                    />
                ))}
            </div>
            <p>
                Currently completing an after-degree in <strong>Computer Science</strong> at UBC.
            </p>
            <p>
                First degree was a <strong>Bachelors with Honours in Chemistry</strong> from the University of Alberta.
            </p>
            <p>
                Below are links to two papers that I contributed to as an undergraduate student researcher doing computational chemistry.
            </p>

            <div className="button-row">
                {papers.map((paper) => (
                    <ButtonLink key={paper.href} href={paper.href}>
                        {paper.title}
                    </ButtonLink>
                ))}
            </div>
        </div>

        


    )
}