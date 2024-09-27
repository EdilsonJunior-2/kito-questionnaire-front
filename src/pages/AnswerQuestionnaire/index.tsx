import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

import { getAnswers, getQuestionnaire } from "@api";
import { Questionnaire } from "@class";
import { contexts } from "@context";

import StyledAnswerQuestionnaire from "./styles";

export default () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { selectedQuestionnaire, setSelectedQuestionnaire } =
		useContext(contexts.QuestionnaireContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<{ res: string }[]>();

	const [result, setResult] = useState<number>();
	const [loading, setLoading] = useState<boolean>(false);
	const [answers, setAnswers] = useState<number[]>();

	function fail() {
		navigate("/");
	}

	function onSubmit(answerList: any) {
		setLoading(true);
		getAnswers(id as string).then((res) => {
			setAnswers(res);
			var note: number = 0;
			var flag: number = 0;
			const examWeight: number = (
				selectedQuestionnaire as Questionnaire
			).questions.reduce((acc, question) => {
				if (answerList[flag].res == res[flag]) note += Number(question.rating);
				flag += 1;
				return acc + Number(question.rating);
			}, 0);
			const finalNote = 10 * (note / examWeight);
			setResult(Math.ceil(finalNote * 100) / 100);
			setLoading(false);
		});
	}

	useEffect(() => {
		id
			? getQuestionnaire(id as string)
				.then((res) => setSelectedQuestionnaire(res))
				.catch(() => fail())
			: fail();
	}, []);

	return (
		<StyledAnswerQuestionnaire>
			{selectedQuestionnaire && (
				<>
					<h3>{selectedQuestionnaire.name}</h3>
					<form onSubmit={handleSubmit(onSubmit)}>
						{selectedQuestionnaire.questions.map((question, questionIndex) => (
							<div
								className="question"
								aria-errormessage={
									errors && errors[questionIndex]?.res && "true"
								}
								key={questionIndex}
							>
								<h4>
									{question.text} ({question.rating})
									<span className="error">
										{errors &&
											errors[questionIndex]?.res &&
											errors[questionIndex]?.res.message}
									</span>
								</h4>

								<RadioGroup className="options">
									{question.options.map((option, index) => (
										<FormControlLabel
											aria-description={
												answers
													? answers[questionIndex] == index
														? "correct"
														: "wrong"
													: undefined
											}
											key={index}
											control={
												<Radio
													disabled={!!answers}
													{...register(`${questionIndex}.res`, {
														required: "Select an option",
													})}
												/>
											}
											value={index}
											label={<p>{option as string}</p>}
										/>
									))}
								</RadioGroup>
							</div>
						))}
						{!result ? (
							<div className="actions">
								<button type="button" onClick={fail} disabled={loading}>
									Give up
								</button>
								<button type="submit" disabled={loading}>
									finish
								</button>
							</div>
						) : (
							<div className="result">
								Your final pontuation is {result}/10. Thanks for participate
								<button type="button" onClick={fail}>
									return
								</button>
							</div>
						)}
					</form>
				</>
			)}
		</StyledAnswerQuestionnaire>
	);
};
