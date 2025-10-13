import { useRef } from "react";
import { useState } from "react";

const App = () => {
  const [displayScore, setDisplayScore] = useState(0);
  const scoreRef = useRef(0);

  const handleCorrectAnswer = () => {
    scoreRef.current++;
  };

  const finishQuiz = () => {
    setDisplayScore(scoreRef.current);
  };

  return (
    <div>
      <h2>Score : {displayScore}</h2>
      <button onClick={handleCorrectAnswer}>Correct Answer</button>
      <button onClick={finishQuiz}>Finish Quiz</button>
    </div>
  );
};

export default App;
