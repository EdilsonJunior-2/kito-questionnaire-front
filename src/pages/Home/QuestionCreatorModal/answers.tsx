import { useFieldArray } from "react-hook-form";

import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { InputBox } from "@components";

export default ({ questionIndex, control, register, errors }: any) => {
	const { fields, append, remove } = useFieldArray({
		control,
		name: `questions[${questionIndex}].options`,
		rules: {
			minLength: 3,
		},
	});

	return (
		<RadioGroup defaultValue={0}>
			{fields.map((option, index) => {
				return (
					<div className="answer-option">
						<FormControlLabel
							key={option.id}
							control={
								<Radio
									sx={{ color: "white" }}
									{...register(`questions.${questionIndex}.answer`, {
										required: "Required field",
									})}
									color="success"
								/>
							}
							value={index}
							label={
								<InputBox
									error={
										errors?.questions &&
										errors?.questions[questionIndex].options &&
										errors?.questions[questionIndex].options[index]?.value
											?.message
									}
								>
									<input
										{...register(
											`questions.${questionIndex}.options.${index}.value`,
											{
												required: "Required field",
											}
										)}
									/>
								</InputBox>
							}
						/>
						{index > 2 && <DeleteOutlineIcon onClick={() => remove(index)} />}
					</div>
				);
			})}

			<button
				type="button"
				onClick={(e) => {
					e.preventDefault();
					append(undefined);
				}}
			>
				Add option
			</button>
		</RadioGroup>
	);
};
