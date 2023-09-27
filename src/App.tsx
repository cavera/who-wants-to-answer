import { useContext } from 'react'
import { QuestionsProvider, QuestionsContext } from './context/QuestionsContext'
import Quiz from './Views/Quiz'

import { VIEWS } from './data/consts'
import { Home } from './Views/Home'
import { Name } from './Views/Name'
import { Dificulty } from './Views/Dificulty'
import { Themes } from './Views/Themes'
import { Cover } from './Views/Cover'

function App() {
  return (
    <QuestionsProvider>
      <MainView />
    </QuestionsProvider>
  )
}
const MainView = () => {
  const { view } = useContext(QuestionsContext)

  const viewsCollection = {
    [VIEWS.HOME]: <Home />,
    [VIEWS.NAME]: <Name />,
    [VIEWS.DIFICULTY]: <Dificulty />,
    [VIEWS.THEMES]: <Themes />,
    [VIEWS.COVER]: <Cover />,
    [VIEWS.QUIZ]: <Quiz />,
    [VIEWS.RESULTS]: <div>Results</div>,
    [VIEWS.LOADING]: <div>Loading</div>,
    [VIEWS.ERROR]: <div>Error</div>,
  }
  const selectedView = viewsCollection[view as string] || <div>Not Found</div>
  return <>{selectedView}</>
}

export default App
