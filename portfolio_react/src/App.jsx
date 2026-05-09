import Nav from './components/Nav.jsx'
import ProfileIntro from './components/ProfileIntro.jsx'
import './styles.css'

function App() {

  return (
    <>
        <header>
            <Nav />
            <div className="flex-container">
                <ProfileIntro />
            </div>
        </header>
    </>
  );
}

export default App
