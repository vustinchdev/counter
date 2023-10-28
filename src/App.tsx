import React, { useState } from 'react';
import './App.css';
import { Container } from './components/Container';
import { ButtonsWrapper } from './components/ButtonsWrapper';
import { Scoreboard } from './components/scoreboard/Scoreboard';
import { Button } from './components/button/Button';
import { Counter } from './components/Counter';

function App() {

  let minNum: number = 0
  let maxNum: number = 5

  const [num, setNum] = useState(0)

  const increase = () => {
    if (num < maxNum) {
      setNum(num + 1)
    }
  }

  const reset = () => {
    setNum(0)
  }

  return (
    <div className="App">
      <Container>
        <Counter>
          <Scoreboard num={num} maxNum={maxNum} />
          <ButtonsWrapper>
            <Button name="inc" onClick={increase} disabled={num === maxNum} />
            <Button name="reset" onClick={reset} disabled={num === minNum} />
          </ButtonsWrapper>
        </Counter>
      </Container>
    </div>
  );
}

export default App;
