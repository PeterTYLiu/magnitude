import { QuestionList, Responses, GameStatus, Question } from "../../types";
import { formatNumber } from "../../utils/formatNumber";
import React from "react";

type ResultsProps = {
  responses: Responses;
  setGameStatus(g: GameStatus): void;
  questionList: QuestionList;
};

export default function Results({
  responses,
  setGameStatus,
  questionList,
}: ResultsProps) {
  return (
    <div>
      {Object.entries(responses).map((response) => {
        const [responseId, responseValue] = response;
        let { shortQuestion, unit, answer } = questionList.questions.find(
          (q) => q.id === responseId
        ) as Question;
        return (
          <div key={response + responseId}>
            <p>{shortQuestion}</p>
            <p>
              Answer: {answer.toLocaleString()}
              {unit && ` ${unit}`}
              <br />
              Your guess: {responseValue.toLocaleString()}
              {unit && ` ${unit}`}
              <br />
              {responseValue > answer &&
                `+${formatNumber(responseValue / answer)}×`}
              {responseValue < answer &&
                `-${formatNumber(answer / responseValue)}×`}
              {responseValue === answer && "You guessed exactly correctly!"}
            </p>
          </div>
        );
      })}
      <button onClick={() => setGameStatus("before")}>Play again</button>
    </div>
  );
}
