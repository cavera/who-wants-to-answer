type Question = {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

type QuestionsContext = {
  view?: string
  handleView?: (view: string) => void
  questions?: Question[]
  currentQuestion?: Question
  currentQIndex?: number
  handleNext?: () => void
  questionLoading?: boolean
}

type Category = {
  id: number
  name: string
}
