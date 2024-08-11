import { Routes, Route } from 'react-router-dom'
import './App.css'
import MovieCard from './MovieCard'
import MovieDes from './MovieDes'

function App() {


  return (
    <>
    <Routes>
    <Route index path='/' element={<MovieCard/>}/>
    <Route path='/moviedes' element={<MovieDes/>}/>
    </Routes>
    </>
  )
}

export default App
