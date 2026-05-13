const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/research', label: 'Research' },
    { href: 'https://www.instagram.com/bornonsat/', label: '@bornonsat' },
    {
        href: 'https://www.linkedin.com/in/kwami-aku-dominguez-7018a028b/?originalSubdomain=ca',
        label: 'LinkedIn',
    },
    {
        href: 'https://github.com/kwamcelo',
        label: 'GitHub'
    }
];

export default function Nav() {
    const currentPath = window.location.pathname;

    return (
        <nav>
            <ul>
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            className={currentPath === link.href ? 'active-nav-link' : undefined}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
                <img
                  height="100"
                  width="100"
                  src="/images/pinkSankofa1.png"
                  alt=""
                />
            </ul>
        </nav>
    );

}
