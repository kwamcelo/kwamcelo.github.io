import { useEffect, useState } from 'react'
import { contact } from '../data/profile.js'

const navLinks = [
    { href: '#/', label: 'Home' },
    { href: '#/research', label: 'Research' },
    ...(contact.resume ? [{ href: contact.resume, label: 'Resume' }] : []),
    // TODO: decide whether to keep your personal Instagram in the nav of a recruiter-facing site.
    { href: 'https://www.instagram.com/bornonsat/', label: '@bornonsat' },
    { href: contact.linkedin, label: 'LinkedIn' },
    { href: contact.github, label: 'GitHub' },
];

const isExternal = (href) => !href.startsWith('#');

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
                            {...(isExternal(link.href) && { target: '_blank', rel: 'noopener noreferrer' })}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
                <li aria-hidden="true">
                    <img
                      height="100"
                      width="100"
                      src="/images/pinkSankofa1.png"
                      alt=""
                    />
                </li>
            </ul>
        </nav>
    );

}
