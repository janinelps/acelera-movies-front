import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../button/button'
import { Modal } from '../modal/modal'
import { Aside } from './styled'

export const Menu = () => {
  const navigate = useNavigate()
  const [modal, setModal] = useState(false)

  const handleClick = (event) => {
    return event === 'Add Movie' ? setModal(modal => !modal) : navigate('/')
  }

  return (
    <Aside >
      {modal && <Modal setModal={setModal} />}
      <h3>Helo user</h3>
      <Button text='Add Movie' onClick={() => handleClick('Add Movie')}>
      </Button>
      <Button text='Sair' onClick={handleClick}></Button>
    </Aside >
  )
}
