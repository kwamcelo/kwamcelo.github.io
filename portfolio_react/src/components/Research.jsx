import { research } from '../data/profile.js'
import ButtonLink from './ButtonLink.jsx'

export default function Research() {
    return (
        <div className="research-container">
            <img
                className="research-logo"
                height="100"
                width="300"
                src="/images/University_of_Alberta_Logo.png"
                alt="University of Alberta"
            />
            <div className="research-grid">
                {research.map((item) => (
                    <article className="research-card" key={item.title}>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                        <div className="research-paper">
                            <span>Publication:</span>
                            <ButtonLink href={item.paper}>
                                {item.paperTitle}
                            </ButtonLink>
                        </div>
                        <p>{item.description}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}
