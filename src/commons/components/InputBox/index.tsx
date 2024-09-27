import { ReactNode } from "react";

import StyledInput from "./styles";

export default ({ children, label, error }: InputBoxProps) => {
	return (
		<StyledInput>
			{label && <label>{label}</label>}
			{children}
			{error && <label className="error">{error}</label>}
		</StyledInput>
	);
};

export interface InputBoxProps {
	label?: string;
	error?: string;
	children: ReactNode;
};
