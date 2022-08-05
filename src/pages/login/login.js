import { useEffect, useState } from 'react'
import { Button } from '../../components/button/button'
import { Input } from '../../components/input/input'
import { client } from '../../service/client'
import { HomeContainer } from './styled'

export const Login = () => {
  const [login, setLogin] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    client.post('/login')
      .then(res => {
        setLogin(res.data)
      })
      .catch(err => {
        console.log(err)
        setLogin([])
      })
  }, [])

  const handlerClick = () => {
    client.post('/login').then((res) => {
      setLogin(res.data.message)
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target.value
    setLogin({
      ...login,
      [name]: value
    })
  }

  return (
    <>
      <HomeContainer>
        <Input label="Login" type='email' placeholder="email" onChange={handleChange} />
        <Input label="Passwod" type='password' placeholder="password" onChange={handleChange} />
        <a>Algo</a>
        <Button type='button' text='Salvar' onClick={handlerClick} />
      </HomeContainer>
    </>
  )
}
