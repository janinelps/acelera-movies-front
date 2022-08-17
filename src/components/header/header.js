import { Icon } from '../icon/icon'
import { Headers } from './styled'

export const Header = ({ title, icon }) => {
  return (
    <Headers>
      {icon ? <> <Icon icon={icon} /> <h2>{title}</h2></> : <h2>{title}</h2>}
    </Headers>
  )
}
