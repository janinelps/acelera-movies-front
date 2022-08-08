import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Button } from '../../components/button/button'
import { Input } from '../../components/input/input'
import { client } from '../../service/client'
import { HomeContainer } from './styled'

export const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value)
  }

  const handleChangePassword = ({ target }) => {
    setPassword(target.value)
  }

  const handlerClick = (event) => {
    event.preventDefault()
    const user = {
      email, password
    }
    try {
      client.post('/login', user)
      navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <HomeContainer>
      <Input label="Login" type='email' placeholder="login" onChange={handleChangeEmail} />
      <Input label="Passwod" type='password' placeholder="password" onChange={handleChangePassword} />
      <link>Esqueceu sua senha</link>
      <Button type='button' text='Salvar' onClick={handlerClick} />
    </HomeContainer>
  )
}
