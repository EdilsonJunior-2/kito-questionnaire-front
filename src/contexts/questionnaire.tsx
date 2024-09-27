import { ReactNode, createContext, useState } from "react";

import { Questionnaire, QuestionnaireList } from "@class";

const QuestionnaireContext = createContext<QuestionData>({} as QuestionData);

export const QuestionnaireProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [questionnaires, setQuestionnaires] = useState<QuestionnaireList[]>([]);
	const [selectedQuestionnaire, setSelectedQuestionnaire] =
		useState<Questionnaire>();

	return (
		<QuestionnaireContext.Provider
			value={{
				questionnaires,
				setQuestionnaires,
				selectedQuestionnaire,
				setSelectedQuestionnaire,
			}}
		>
			{children}
		</QuestionnaireContext.Provider>
	);
};

export default QuestionnaireContext;

interface QuestionData {
	questionnaires: QuestionnaireList[];
	setQuestionnaires: (hasAny: QuestionnaireList[]) => void;
	selectedQuestionnaire: Questionnaire | undefined;
	setSelectedQuestionnaire: (questionnaire: Questionnaire) => void;
}
