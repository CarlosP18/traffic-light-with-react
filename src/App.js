import { useState } from 'react';
import './App.css';

function App() {

  const { state, changeState } = useState({
    glowingLight: null,
    colors: [{ color: 'red' }, { color: 'yellow' }, { color: 'green' }]
  });

  function toggleActive(index) {
    changeState({ ...state, glowingLight: state.colors[index] })
  }

  function toggleGlowStyles(index) {
    if (state.colors[index] === state.glowingLight) {
      return "glow";
    } else {
      return "notglow"
    }
  }

  return (
    <>
      <div className="post"></div>
      <div className="trafficLight">
        {state.colors.map((elements, index) => (
          <div key={index} className={`${elements.color}  ${toggleGlowStyles(index)}`} onClick={() => { toggleActive(index); }} ></div>
        ))}
      </div>
    </>
  );
}

export default App;
