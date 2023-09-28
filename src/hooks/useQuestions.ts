import { useState, useEffect } from 'react'
import mockData from '../data/mockData.json'
import { API_BASEURL } from '../data/consts'
import { getData } from '../utils/getData'

export const useQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQIndex, setCurrentQIndex] = useState<number>(0)
  const [loading, setLoading] = useState(true)
  const QUESTIONS_ENDPOINT = new URL(`${API_BASEURL}`)

  QUESTIONS_ENDPOINT.searchParams.append('amount', '10')
  QUESTIONS_ENDPOINT.searchParams.append('type', 'multiple')

  useEffect(() => {
    getQuestions()
  }, [])

  const getQuestions = async () => {
    try {
      console.log(QUESTIONS_ENDPOINT.toString())
      const data = await getData(QUESTIONS_ENDPOINT.toString())

      setQuestions(data.results)
      setLoading(false)
    } catch (error) {
      setQuestions(mockData)
    }
  }

  const currentQuestion = questions[currentQIndex]

  const handleNext = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(currentQIndex + 1)
    }
  }

  return {
    questions,
    currentQuestion: questions[currentQIndex],
    currentQIndex,
    handleNext,
    questionLoading: loading,
  }
}
