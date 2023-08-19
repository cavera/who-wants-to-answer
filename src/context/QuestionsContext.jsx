import { createContext, useEffect, useState } from 'react'
import { useQuestions } from '../hooks/useQuestions'

export const QuestionsContext = createContext()

export const QuestionsProvider = ({ children }) => {
	const { questions, currentQuestion, currentQuestionIndex, setCurrentQuestionIndex, questionLoading } = useQuestions()

	return (
		<QuestionsContext.Provider
			value={{
				questions,
				currentQuestion,
				currentQuestionIndex,
				setCurrentQuestionIndex,
				questionLoading,
			}}>
			{children}
		</QuestionsContext.Provider>
	)
}
