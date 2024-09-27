import Question from "./question";

class Questionnaire {
  public name: string;
  public questions: Question[];
  constructor(props: Questionnaire) {
    this.name = props.name;
    this.questions = props.questions;
  }
}

export default Questionnaire;
