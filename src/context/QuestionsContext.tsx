import { createContext, ReactNode, FC, useState } from 'react'
import { useQuestions } from '../hooks/useQuestions'
import { VIEWS } from '../data/consts'

type Provider = {
  children: ReactNode
}

export const QuestionsProvider: FC<Provider> = ({ children }) => {
  const { questions, currentQuestion, currentQIndex, handleNext, questionLoading } = useQuestions()

  const [view, setView] = useState(VIEWS.HOME)

  const handleView = (view: string): void => {
    return setView(view)
  }

  return (
    <QuestionsContext.Provider
      value={{
        view,
        handleView,
        questions,
        currentQuestion,
        currentQIndex,
        handleNext,
        questionLoading,
      }}>
      {children}
    </QuestionsContext.Provider>
  )
}

export const QuestionsContext = createContext<QuestionsContext>({})
