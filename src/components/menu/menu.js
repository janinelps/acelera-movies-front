import { Link } from 'react-router-dom'
import { itemsMenus } from '../../helpe'
import { Aside } from './styled'

export const Menu = (props) => {
  const options = props.items ? props.items : itemsMenus
  return (
    <Aside >
      <ul >
        {options.map((item, index) => (
          <li key={index}>
            <Link to={item.Rota}>
              {item.Descricao}
            </Link>
          </li>
        ))}
      </ul>
    </Aside>
  )
}
