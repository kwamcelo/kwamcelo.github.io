import { schools } from '../data/profile.js'

export default function ProfileIntro() {
    return (
        <div className="text-container">
            <img height="300" width="220" src="/headshot.JPG" alt="Kwami Aku-Dominguez" />

            <div className="intro-details">
                <h1>Kwami Aku-Dominguez</h1>

                <div className="school-info">
                    <img height="120" width="100" src={schools[0].image} />
                    <p>
                        Bachelor of Computer Science: <strong><i>in progress</i></strong>
                    </p>

                    <img height="150" width="100" src={schools[1].image} />
                    <p>
                        Bachelor of Science with Honours in Chemistry: <strong>Completed 2021</strong>
                    </p>

                </div>
            </div>
            
        </div>

        


    )
}