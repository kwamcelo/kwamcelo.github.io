import Nav from './components/Nav.jsx'
import ProfileIntro from './components/ProfileIntro.jsx'
import Projects from './components/Projects.jsx'
import './styles.css'

function App() {

  return (
    <>
        <header>
            <Nav />
            <div className="flex-container">
                <ProfileIntro />
                <Projects />
            </div>
        </header>
    </>
  );
}

export default App
