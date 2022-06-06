export = Magnitude;
export as namespace Magnitude;

declare namespace Magnitude {
  type GameStatus = "before" | "during" | "after";
  type Question = {
    id: string;
    question: string;
    shortQuestion: string;
    answer: number;
    image?: string;
    unit?: string;
  };
  type QuestionList = {
    id: string;
    questions: Question[];
  };
  type Responses = Record<string, number>;
}
