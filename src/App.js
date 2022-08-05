import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Login } from './pages/login/login'
import { ToDo } from './pages/todo/todo-page'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<ToDo />} exact />
        <Route path="/" element={<Login />} exact />
      </Routes>
    </BrowserRouter>
  )
}
