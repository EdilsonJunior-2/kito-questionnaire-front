class Question {
  public text: string;
  public options: { value: string }[] | string[];
  public answer: number;
  public rating: number;

  constructor(props: Question) {
    this.text = props.text;
    this.options = props.options;
    this.answer = props.answer;
    this.rating = props.rating;
  }
}

export default Question;
