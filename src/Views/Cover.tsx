import { useContext, useState } from 'react'
import { QuestionsContext } from '../context/QuestionsContext'
import { VIEWS } from '../data/consts'

export const Cover = () => {
  const { view, handleView } = useContext(QuestionsContext)

  return (
    <article className='p-4 bg-black/20 rounded-2xl grid gap-4 w-full'>
      <h1>Are you ready?</h1>

      <button
        onClick={() => handleView && handleView(VIEWS.QUIZ)}
        className='p-2 border border-white/80 rounded-lg cursor-pointer'>
        Iniciar
      </button>
    </article>
  )
}
