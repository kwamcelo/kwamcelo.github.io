import Nav from './components/Nav.jsx'
import ProfileIntro from './components/ProfileIntro.jsx'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'
import Research from './components/Research.jsx'
import './styles.css'

function App() {
  const path = window.location.pathname;

  return (
    <>
        <header>
            <Nav />
            <div className="flex-container">
                {path === '/research' ? (
                    <Research />
                ) : (
                    <>
                        <ProfileIntro />
                        <AboutMe />
                        <Projects />
                    </>
                )}
            </div>
        </header>
    </>
  );
}

export default App
