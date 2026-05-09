const navLinks = [
    { href: '/', label: 'Home' },
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
    return (
        <nav>
            <ul>
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
                <img
                  height="80"
                  width="80"
                  src="/images/pinkSankofa1.png"
                  alt=""
                />
            </ul>
        </nav>
    );

}