import AnswerQuestionnaire from './pages/AnswerQuestionnaire'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />
		},
		{
			path: "/questionnaire/:id",
			element: <AnswerQuestionnaire />
		}
	])
	return (
		<RouterProvider router={router} />
	)
}

export default App
