import { useContext, useState } from 'react'
import { QuestionsContext } from '../context/QuestionsContext'
import { VIEWS } from '../data/consts'

export const Name = () => {
  const { view, handleView } = useContext(QuestionsContext)

  const [name, setName] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  return (
    <article className='p-4 bg-black/20 rounded-2xl grid gap-4 w-full'>
      <h1>Tell us your name</h1>
      <input
        type='text'
        value={name}
        onChange={e => handleChange(e)}
        className='border border-white/90 bg-transparent rounded-lg p-2 text-xl text-white'
      />
      <button
        onClick={() => handleView && handleView(VIEWS.DIFICULTY)}
        className='p-2 border border-white/80 rounded-lg cursor-pointer'>
        Continue
      </button>
    </article>
  )
}
