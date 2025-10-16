import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Question() {
  const { questions, dispatch, answer, index } = useQuiz();
  const question = questions[index]; // ✅ get current question

  if (!question) return null; // ✅ guard clause to prevent crash
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
