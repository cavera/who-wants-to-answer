import { useState, useEffect } from 'react'
import mockData from '../data/mockData.json'
import { API_BASEURL } from '../data/consts'
import { getData } from '../utils/getData'

const QUESTIONS_ENDPOINT = 'https://opentdb.com/api.php?amount=10&type=multiple'

export const useQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQIndex, setCurrentQIndex] = useState<number>(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getQuestions()
  }, [])

  const getQuestions = async () => {
    try {
      const data = await getData(QUESTIONS_ENDPOINT)

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
