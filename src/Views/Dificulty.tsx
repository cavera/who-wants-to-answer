import { useContext, useState } from 'react'
import { QuestionsContext } from '../context/QuestionsContext'
import { VIEWS } from '../data/consts'

export const Dificulty = () => {
  const { view, handleView } = useContext(QuestionsContext)

  return (
    <article className='p-4 bg-black/20 rounded-2xl grid gap-4 w-full'>
      <h1>Select the dificulty</h1>
      <section>
        <div>
          <select
            name='HeadlineAct'
            id='HeadlineAct'
            className='p-2 rounded-lg border border-white/90 text-white bg-transparent sm:text-sm'>
            <option value='any'>Any Difficulty</option>
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='hard'>Hard</option>
          </select>
        </div>
      </section>
      <button
        onClick={() => handleView && handleView(VIEWS.THEMES)}
        className='p-2 border border-white/80 rounded-lg cursor-pointer'>
        Continue
      </button>
    </article>
  )
}
