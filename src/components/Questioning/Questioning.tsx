import React, { useState } from "react";
import { formatLargeNumber } from "../../utils/formatLargeNumber";
import { QuestionList, Responses, GameStatus } from "../../types";

type QuestioningProps = {
  questionList: QuestionList;
  responses: Responses;
  setResponses(r: Responses): void;
  setGameStatus(g: GameStatus): void;
};

export default function Questioning({
  questionList,
  responses,
  setResponses,
  setGameStatus,
}: QuestioningProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentResponse, setCurrentResponse] = useState<number>(0);

  let { question, id, unit } = questionList.questions[currentQuestionIndex];

  const handleSubmit = () => {
    setResponses({ ...responses, [id]: currentResponse ?? 0 });
    setCurrentResponse(0);
    if (currentQuestionIndex + 1 < questionList.questions.length)
      return setCurrentQuestionIndex(currentQuestionIndex + 1);
    setGameStatus("after");
  };

  return (
    <div className="Questioning">
      <p>{question}</p>
      <div className="Questioning__input-section">
        <input
          value={currentResponse}
          type="number"
          onChange={(e) => setCurrentResponse(Number(e.target.value))}
        />
        <p>
          {formatLargeNumber(currentResponse)}
          {unit ? " " + unit : ""}
        </p>
      </div>
      <button
        className="submit-button"
        disabled={!currentResponse}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}
