import axios from "axios";
import Questionnaire from "../classes/questionnaire";
import Question from "../classes/question";
import QuestionnaireList from "../classes/questionnaireList";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

const createQuestion = (q: Questionnaire): Promise<boolean> =>
  api
    .post("/questionnaire", {
      name: q.name,
      questions: q.questions.map((question: Question) => ({
        text: question.text,
        rating: Number(question.rating),
        answer: Number(question.answer),
        options: question.options.map(
          (option) => (option as { value: string }).value
        ),
      })),
    })
    .then(() => true)
    .catch(() => false);

const getQuestionnaires = (search: string = ""): Promise<QuestionnaireList[]> =>
  api
    .get(`/questionnaires${search ? `?name=${search}` : ""}`)
    .then((r) => r.data);

const getQuestionnaire = (id: string): Promise<Questionnaire> =>
  api
    .get(`/questionnaire/${id}`)
    .then((r) => r.data)
    .catch((err) => {
      throw err;
    });

const getAnswers = (id: string): Promise<number[]> =>
  api.get(`/questionnaire/answers/${id}`).then((r) => r.data);

export { createQuestion, getQuestionnaires, getQuestionnaire, getAnswers };
