import { Icon } from '../icon/icon'
import { ButtonComponent } from './styled'

export const Button = ({ type, onClick, text, icon }) => {
  return (
    <>
      <ButtonComponent type={type} onClick={onClick}>{text} <Icon icon={icon} /></ButtonComponent>
    </>
  )
}
