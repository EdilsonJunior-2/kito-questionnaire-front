class QuestionnaireList {
  public id: string;
  public name: string;
  public difficulty: number;

  constructor(props: QuestionnaireList) {
    this.id = props.id;
    this.name = props.name;
    this.difficulty = props.difficulty;
  }
}

export default QuestionnaireList;
