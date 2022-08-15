import { Link } from 'react-router-dom'

export const itemsMenus = [
  {
    Descricao: 'Add Movie',
    Rota: '',
    Action: (event) => {
      event()
    }
  },
  {
    Descricao: 'Sair',
    Rota: <Link to='/' />
  }
]
