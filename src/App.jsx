import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UnregisteredSocial from "./UnregisteredSocial.jsx";
import RegisteredSocial from "./RegisteredSocial.jsx";
import UnlocatedUserDashboard from "./UnlocatedUserDashboard.jsx";
import LocatedUserDashboard from './LocatedUserDashboard.jsx';

function App() {
  const [formData, setFormData] = useState({
    username: "anonym",
    email: "",
    message: "",
  });

  const isVerifiedUser = false;
  const locationOfResidence = false;

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <button type="button" className='start-survey-button'>Start survey</button>
          <p>
            Give your data, choosing a username is optional!
          </p>
        <input
          type="text"
          value={formData.username}
          onChange={(e) => setFormData({
                            ...formData,
                            username: e.target.value,
                          })
                        }
                        placeholder="anonim"
        />
          <p>Name is {formData.username}</p>
        </div>        
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        { locationOfResidence ? <LocatedUserDashboard /> : <UnlocatedUserDashboard /> }
        { isVerifiedUser ? <RegisteredSocial /> : <UnregisteredSocial /> }
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
