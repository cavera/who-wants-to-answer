import { useState, useEffect } from 'react'
import mockData from '../data/mockData.json'

const API_ENDPOINT = 'https://opentdb.com/api.php?amount=10&type=multiple'

export const useQuestions = () => {
	const [questions, setQuestions] = useState([])
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
	const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex])
	const [questionLoading, setQuestionLoading] = useState(true)

	useEffect(() => {
		fetchQuestions()
	}, [])

	const fetchQuestions = async () => {
		try {
			const response = await fetch(API_ENDPOINT)
			const data = await response.json()
			setQuestions(data.results)
			setQuestionLoading(false)
		} catch (error) {
			setQuestions(mockData)
		}
	}

	useEffect(() => {
		setCurrentQuestion(questions[currentQuestionIndex])
	}, [currentQuestionIndex, questions])

	return {
		questions,
		currentQuestion,
		currentQuestionIndex,
		setCurrentQuestionIndex,
		questionLoading,
	}
}
