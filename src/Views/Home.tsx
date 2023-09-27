import { useContext } from 'react'
import { QuestionsContext } from '../context/QuestionsContext'
import { VIEWS } from '../data/consts'

export const Home = () => {
  const { view, handleView } = useContext(QuestionsContext)

  return (
    <article className='p-4 bg-black/20 rounded-2xl grid gap-4 w-full'>
      <h1>Home</h1>
      <h2>Welcome</h2>
      <button
        onClick={() => handleView && handleView(VIEWS.NAME)}
        className='p-2 border border-white/80 rounded-lg cursor-pointer'>
        Continue
      </button>
    </article>
  )
}
