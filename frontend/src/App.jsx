import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreateNote from './pages/CreateNote'
import NoteDetails from './pages/NoteDetails'

const App = () => {
  return (
    <div data-themes="forest">
      <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%]'></div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/create' element={<CreateNote/>}/>
        <Route path='/note/:id' element={<NoteDetails/>}/>
      </Routes>
    </div>
  )
}

export default App