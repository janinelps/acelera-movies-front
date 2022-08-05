import { ButtonComponent } from './styled'

export const Button = ({ type, onClick, text }) => {
  return (
    <>
      <ButtonComponent type={type} onClick={onClick}>{text}</ButtonComponent>
    </>
  )
}
