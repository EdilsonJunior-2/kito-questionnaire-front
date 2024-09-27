import { useState } from "react";
import { useForm } from "react-hook-form";

import { Alert, Modal, Snackbar } from "@mui/material";

import { InputBox } from "@components";
import { Questionnaire } from "@class";
import { createQuestion } from "@api";

import Questions from "./questions";
import { StyledModal } from "./styles";

export default (props: { open: boolean; close: () => void }) => {
	const {
		register,
		control,
		handleSubmit,
		getValues,
		setValue,
		reset,
		formState: { errors },
	} = useForm<Questionnaire>({
		defaultValues: {
			name: "",
			questions: [
				{
					text: "",
					options: [{ value: "" }, { value: "" }],
					answer: undefined,
					rating: undefined,
				},
				{
					text: "",
					options: [{ value: "" }, { value: "" }],
					answer: undefined,
					rating: undefined,
				},
				{
					text: "",
					options: [{ value: "" }, { value: "" }],
					answer: undefined,
					rating: undefined,
				},
			],
		},
	});

	const [newQuestionTrigger, triggerNewQuestion] = useState<boolean>();

	const cancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		props.close();
		reset();
	};
	const onSubmit = (d: Questionnaire) =>
		createQuestion(d).then((res) => {
			setSnack({
				success: res,
				message: res
					? "Question created successfully"
					: "An error occurs, please try again later",
				open: true,
			});
			props.close();
			reset();
		});

	const [snack, setSnack] = useState({
		success: false,
		open: false,
		message: "",
	});

	return (
		<>
			<Modal keepMounted open={props.open} onClose={props.close}>
				<StyledModal>
					<div className="title main">
						<h2>Create questionnaire</h2>
						<button onClick={() => triggerNewQuestion((prev) => !prev)}>
							Add question
						</button>
					</div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="form-fields">
							<h3>Questionnaire name</h3>
							<InputBox error={errors?.name && errors.name.message}>
								<input {...register("name", { required: "Required field" })} />
							</InputBox>
							{errors?.questions?.root?.type === "minLength" && (
								<span className="error">
									You need to create at least 3 questions
								</span>
							)}
							<Questions
								{...{
									control,
									register,
									errors,
									getValues,
									setValue,
									newQuestionTrigger,
								}}
							/>
						</div>

						<div className="submit-options">
							<button type="button" onClick={cancel}>
								Cancel
							</button>
							<button type="submit">Create</button>
						</div>
					</form>
				</StyledModal>
			</Modal>
			<Snackbar
				open={snack.open}
				autoHideDuration={3000}
				onClose={() => setSnack((prev) => ({ ...prev, open: false }))}
			>
				<Alert
					severity={snack.success ? "success" : "error"}
					variant="filled"
					sx={{ width: "100%" }}
				>
					{snack.message}
				</Alert>
			</Snackbar>
		</>
	);
};
