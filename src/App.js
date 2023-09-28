import './App.css';
import Display from './component/Display/Display';
import Sett from './component/Sett/Sett';
import React from 'react';

function App() {
  const [maxValue, setMaxValue] = React.useState(0);
  const [startValue, setStartValue] = React.useState(5);

  return (
    <div className="wrapper">
      <Sett
        startValue={startValue}
        setStartValue={setStartValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
      />
      <Display startValue={startValue} />
    </div>
  );
}

export default App;
