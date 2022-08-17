import { useNavigate } from 'react-router-dom'
import { Button } from '../button/button'
import { FormMovie } from '../forms/form'
import { Modal } from '../modal/modal'
import { Aside } from './styled'

export const Menu = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  const handleSubmit = () => {
    location.reload()
    navigate('/home')
  }

  return (
    <Aside >
      <section>Helo user!</section>
      <Modal text='Add Movie' title='Adicionar Movie'><FormMovie callback={handleSubmit} /></Modal>
      <Button text='Sair' onClick={handleClick}></Button>
    </Aside >
  )
}
