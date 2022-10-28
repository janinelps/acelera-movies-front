import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Button } from '../../components/button/button'
import { Input } from '../../components/input/input'
import { client } from '../../service/client'
import { HomeContainer } from './styled'

export const Login = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState({ email: '', password: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setLogin({
      ...login, [name]: value
    })
  }

  const handlerClick = (event) => {
    event.preventDefault()
    client.post('/login', login).then(res => {
      const { acessToken, name } = res.data
      localStorage.setItem('token', acessToken)
      localStorage.setItem('name', name)
      navigate('/home')
    })
      .catch(error => {
        console.log(error)
        return alert('Usuario ou senha incorreta.')
      })
  }

  return (
    <HomeContainer>
      <h1>Acelera Movies</h1>
      <form>
        <Input name='email' label="Login" type='email' placeholder="login" onChange={handleChange} />
        <Input name='password' label="Password" type='password' placeholder="password" onChange={handleChange} />
        <a href='#'>Esqueceu sua senha</a>
        <Button type='button' text='Login' onClick={handlerClick} />
      </form>
    </HomeContainer>
  )
}
