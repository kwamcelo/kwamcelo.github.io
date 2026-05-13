import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import ProfileIntro from './components/ProfileIntro.jsx'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'
import Research from './components/Research.jsx'
import './styles.css'

function App() {
  const [path, setPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setPath(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
        <div className="top-scroll-mask" aria-hidden="true" />
        <Nav />
        <main className="page-content">
            {path === '#/research' ? (
                <section className="page-section">
                    <Research />
                </section>
            ) : (
                <>
                    <section className="page-section">
                        <ProfileIntro />
                    </section>
                    <section className="page-section">
                        <AboutMe />
                    </section>
                    <section className="page-section">
                        <Projects />
                    </section>
                </>
            )}
        </main>
    </>
  );
}

export default App
