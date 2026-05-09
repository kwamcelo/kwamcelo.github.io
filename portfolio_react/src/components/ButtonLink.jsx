export default function ButtonLink({href, children}) {
    return (
        <a href={href} className="cta-button">
            {children}
        </a>
    );
}