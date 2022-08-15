import { Container, ModalStyle } from './styled'
import { FormMovie } from '../forms/form'

export const Modal = ({ children, setModal }) => {
  const handleClick = () => {
    setModal(modal => !modal)
  }

  return (
    <>
      <Container>
        <ModalStyle>
          <div>
            <header>
              <h2>Titulo da Modal</h2>
              <button onClick={handleClick}>X</button>
            </header>
          </div>
          <div>
            <FormMovie />
          </div>
          <div>{children}</div>
        </ModalStyle>
      </Container>
    </>
  )
}
