export default function ButtonLink({ href, children }) {
    const isExternal = /^https?:\/\//.test(href) || href.endsWith('.pdf');

    return (
        <a
            href={href}
            className="cta-button"
            {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        >
            {children}
        </a>
    );
}
