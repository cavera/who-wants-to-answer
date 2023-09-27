import { useContext, useEffect, useState } from 'react'
import { QuestionsContext } from '../context/QuestionsContext'
import { VIEWS } from '../data/consts'

import { getData } from '../utils/getData'
import { API_CATEGORIES } from '../data/consts'

export const Themes = () => {
  const { view, handleView } = useContext(QuestionsContext)

  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    getData(API_CATEGORIES).then(data => {
      setCategories(data.trivia_categories)
    })
  }, [])

  return (
    <article className='p-4 bg-black/20 rounded-2xl grid gap-4 w-full'>
      <h1>Select the theme</h1>
      <section>
        <div>
          <select
            name='HeadlineAct'
            id='HeadlineAct'
            className='p-2 rounded-lg border border-white/90 text-white bg-transparent sm:text-sm'>
            {categories.map(category => (
              <option value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
      </section>
      <button
        onClick={() => handleView && handleView(VIEWS.COVER)}
        className='p-2 border border-white/80 rounded-lg cursor-pointer'>
        Continue
      </button>
    </article>
  )
}
