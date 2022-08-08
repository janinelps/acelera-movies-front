import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Login } from './pages/login/login'
import { Movie } from './pages/home/home.js'
import { ToDo } from './pages/todo/todo-page'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<ToDo />} exact />
        <Route path="/" element={<Login />} exact />
        <Route path="/home" element={<Movie />} exact />
      </Routes>
    </BrowserRouter>
  )
}
