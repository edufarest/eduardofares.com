import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('');

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">
      <header className="App-header">

        <button
          type="button"
          className={`header__btn ${activeSection === 'home' ? 'header__btn__active' : ''}`}
          onClick={() => setActiveSection('home')}
        >
          Home
        </button>

        <button
          type="button"
          className={`header__btn ${activeSection === 'skillset' ? 'header__btn__active' : ''}`}
          onClick={() => setActiveSection('skillset')}
        >
          Skillset
        </button>

        <button
          type="button"
          className={`header__btn ${activeSection === 'projects' ? 'header__btn__active' : ''}`}
          onClick={() => setActiveSection('projects')}
        >
          Projects
        </button>

        <button
          type="button"
          className={`header__btn ${activeSection === 'education' ? 'header__btn__active' : ''}`}
          onClick={() => setActiveSection('education')}
        >
          Education + Resume
        </button>

      </header>
    </div>
  );
}

export default App;
