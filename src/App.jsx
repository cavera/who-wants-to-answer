import { QuestionsProvider } from './context/QuestionsContext'
import Quiz from './Quiz'

function App() {
	return (
		<QuestionsProvider>
			<Quiz />
		</QuestionsProvider>
	)
}

export default App
