import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../button/button'
import { FormMovie } from '../forms/form'
import { Modal } from '../modal/modal'
import { Aside } from './styled'

// const getNameUser = () => {
//   const [nameLocal] = useState(localStorage.getItem('name'))
//   return localStorage.getItem()
// }

export const Menu = () => {
  const navigate = useNavigate()
  const nameLocal = localStorage.getItem('name')

  console.log(nameLocal)
  const handleClick = () => {
    navigate('/')
  }

  const handleSubmit = () => {
    location.reload()
    navigate('/home')
  }

  return (
    <Aside >
      <section>Helo {nameLocal} !</section>
      <Modal text='Add Movie' title='Adicionar Movie'><FormMovie callback={handleSubmit} /></Modal>
      <Link to={'/home'}>Home</Link>
      <Button text='Exit' onClick={handleClick}></Button>
    </Aside >
  )
}
