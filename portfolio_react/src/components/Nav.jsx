import { useEffect, useState } from 'react'

const navLinks = [
    { href: '#/', label: 'Home' },
    { href: '#/research', label: 'Research' },
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
    const currentPath = window.location.hash || '#/';
    const [isOverSection, setIsOverSection] = useState(false);

    useEffect(() => {
        const updateNavOverlap = () => {
            const nav = document.querySelector('nav');
            const sections = document.querySelectorAll('.page-section');

            if (!nav) {
                return;
            }

            const navRect = nav.getBoundingClientRect();
            const hasOverlap = Array.from(sections).some((section) => {
                const sectionRect = section.getBoundingClientRect();
                return sectionRect.top <= navRect.bottom && sectionRect.bottom >= navRect.bottom;
            });

            setIsOverSection(hasOverlap);
        };

        updateNavOverlap();
        window.addEventListener('scroll', updateNavOverlap);
        window.addEventListener('resize', updateNavOverlap);

        return () => {
            window.removeEventListener('scroll', updateNavOverlap);
            window.removeEventListener('resize', updateNavOverlap);
        };
    }, [currentPath]);

    return (
        <nav className={isOverSection ? 'nav-over-section' : undefined}>
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
