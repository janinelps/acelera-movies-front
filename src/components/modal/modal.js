import { useState } from 'react'
import { Button } from '../button/button'
import { Container, ModalStyle, StyleInput } from './styled'

export const Modal = ({ children, label, title, icon, callback, text }) => {
  const [show, setShow] = useState(false)

  const onClose = () => {
    setShow(false)
    if (callback) {
      callback()
    }
  }

  if (!show) {
    return <Button icon={icon} text={text} onClick={() => setShow(true)}>{label}</Button>
  }

  return (
    <>
      <Container>
        <ModalStyle>
          <div>
            <header>
              <h2>{title}</h2>
              <StyleInput type='button' onClick={onClose} value='X' />
            </header>
          </div>
          {children}
        </ModalStyle>
      </Container>
    </>
  )
}
