import { useContext } from 'react'
import { QuestionsContext } from './context/QuestionsContext'
import { Option } from './Option'
import { decodeString } from './utils'

export const Question = () => {
	const { currentQuestionIndex, setCurrentQuestionIndex, currentQuestion = defaultQuestion, questionLoading } = useContext(QuestionsContext)

	const options = [currentQuestion?.correct_answer, ...currentQuestion?.incorrect_answers].sort(() => Math.random() - 0.5)

	const handleNext = () => {
		setCurrentQuestionIndex(currentQuestionIndex + 1)
	}

	return (
		<article className='p-4 bg-black/20 rounded-2xl grid gap-4 w-full'>
			<h1>Question {currentQuestionIndex + 1}</h1>
			<h2>{decodeString(currentQuestion?.question)}</h2>
			{!questionLoading && (
				<>
					<ul className='grid grid-cols-2 grid-rows-2 gap-2'>
						{options.map((option, index) => (
							<Option
								key={index}
								option={option}
								isCorrect={currentQuestion.correct_answer === option}
							/>
						))}
					</ul>

					<button
						onClick={handleNext}
						className='p-2 border border-white/80 rounded-lg cursor-pointer'>
						Next Quesiton
					</button>
				</>
			)}
		</article>
	)
}
const defaultQuestion = {
	question: 'Loading question...',
	correct_answer: 'option',
	incorrect_answers: ['option', 'option', 'option'],
}
