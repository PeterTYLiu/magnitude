import React, { useState } from "react";
import { day1 } from "./questions/day1";
import { Responses, GameStatus } from "./types";
import Questioning from "./components/Questioning";
import Results from "./components/Results";
import "./App.css";

function App() {
  const [responses, setResponses] = useState<Responses>({});
  const [gameStatus, setGameStatus] = useState<GameStatus>("before");

  return (
    <div className="App">
      {gameStatus === "before" && (
        <button onClick={() => setGameStatus("during")}>Start</button>
      )}
      {gameStatus === "during" && (
        <Questioning
          setResponses={setResponses}
          responses={responses}
          questionList={day1}
          setGameStatus={setGameStatus}
        />
      )}
      {gameStatus === "after" && (
        <Results
          questionList={day1}
          setGameStatus={setGameStatus}
          responses={responses}
        />
      )}
    </div>
  );
}

export default App;
