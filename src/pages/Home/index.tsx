import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import { contexts } from "@context";
import { getQuestionnaires } from "@api";
import { InputBox, Card } from "@components";

import StyledHome from "./styles";
import QuestionCreatorModal from "./QuestionCreatorModal";

export default () => {
	const [createQuestion, setCreateQuestion] = useState<boolean>(false);
	const { questionnaires, setQuestionnaires } =
		useContext(contexts.QuestionnaireContext);
	const navigate = useNavigate();
	const [search, setSearch] = useState<string>();
	const create = () => setCreateQuestion(true);

	useEffect(() => {
		getQuestionnaires(search).then((r) => setQuestionnaires(r));
	}, [search]);

	function study(
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		id: string
	) {
		e.preventDefault();
		navigate(`/questionnaire/${id}`);
	}

	return (
		<StyledHome>
			<main>
				<button onClick={create}>
					<AddCircleOutlineOutlinedIcon fontSize="large" />
					Create new questionnaire
				</button>
				{questionnaires.length > 0 ? (
					<h3>
						Take your time to answer one of our already created questionnaires
						below!
					</h3>
				) : (
					<h3>
						There are no previous questionaries. Be the first one to create!
					</h3>
				)}
				<InputBox>
					<span className="search">
						<SearchIcon />
						<input value={search} onChange={(e) => setSearch(e.target.value)} />
					</span>
				</InputBox>
				<article>
					{questionnaires.map((questionnaire) => (
						<Card>
							<p className="title">
								{questionnaire.name}
								<span className="subtitle">
									Difficulty: {questionnaire.difficulty}
								</span>
							</p>
							<div className="actions">
								<button
									type="button"
									onClick={(e) => study(e, questionnaire.id)}
								>
									Study
								</button>
							</div>
						</Card>
					))}
				</article>
			</main>

			<QuestionCreatorModal
				open={createQuestion}
				close={() => setCreateQuestion(false)}
			/>
		</StyledHome>
	);
};
