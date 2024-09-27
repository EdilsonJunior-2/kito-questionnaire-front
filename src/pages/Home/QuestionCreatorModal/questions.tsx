import { useFieldArray } from "react-hook-form";
import { InputBox } from "@components";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useEffect } from "react";

import Answers from "./answers";
import { StyledQuestionSection } from "./styles";

export default ({
	control,
	register,
	errors,
	getValues,
	setValue,
	newQuestionTrigger,
}: any) => {
	const { fields, remove } = useFieldArray({
		control,
		name: "questions",
		rules: {
			minLength: 3,
		},
	});

	useEffect(() => {
		newQuestionTrigger !== undefined &&
			setValue("questions", [
				...getValues().questions,
				{
					text: "",
					options: [{ value: "" }, { value: "" }],
					answer: undefined,
					rating: undefined,
				},
			])
	}, [newQuestionTrigger]);

	return (
		<>
			{fields.map((question, questionIndex) => {
				return (
					<StyledQuestionSection key={question.id}>
						<div className="title">
							{questionIndex > 2 && (
								<DeleteOutlineIcon onClick={() => remove(questionIndex)} />
							)}
							<h4>Question</h4>
						</div>
						<InputBox
							error={
								errors?.questions &&
								errors?.questions[questionIndex].text.message
							}
						>
							<input
								{...register(`questions.${questionIndex}.text`, {
									required: "Required field",
								})}
							/>
						</InputBox>
						<InputBox label="Question rating">
							<select
								{...register(`questions.${questionIndex}.rating`, {
									required: "Required field",
								})}
							>
								<option value={1} selected>
									Easy (1)
								</option>
								<option value={2}>Medium (2)</option>
								<option value={3}>Hard (3)</option>
							</select>
						</InputBox>
						<h4>Options</h4>
						{errors?.questions &&
							errors?.questions[questionIndex].options &&
							errors.questions[questionIndex].options?.root?.type ===
							"minLength" && (
								<span className="error">
									You need to create at least 2 answer options
								</span>
							)}
						{errors?.questions && errors?.questions[questionIndex].answer && (
							<span className="error">
								Select one of the options to be the right one
							</span>
						)}
						<Answers
							questionIndex={questionIndex}
							{...{ control, register, errors }}
						/>
					</StyledQuestionSection>
				);
			})}
		</>
	);
};
