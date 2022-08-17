import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Button } from '../../components/button/button'
import { Input } from '../../components/input/input'
import { client } from '../../service/client'
import { HomeContainer } from './styled'

export const Login = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setLogin({
      ...login, [name]: value
    })
  }

  const handlerClick = (event) => {
    event.preventDefault()
    try {
      client.post('/login', login)
      navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <HomeContainer>
      <form>
        <Input name='email' label="Login" type='email' placeholder="login" onChange={handleChange} />
        <Input name='password' label="Password" type='password' placeholder="password" onChange={handleChange} />
        <a href='#'>Esqueceu sua senha</a>
        <Button type='button' text='Salvar' onClick={handlerClick} />
      </form>
    </HomeContainer>
  )
}
