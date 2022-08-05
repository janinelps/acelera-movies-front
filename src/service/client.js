import axios from 'axios'
import env from 'react-dotenv'

const getURLBackend = () => {
  const { URL_BACKEND } = env
  localStorage.setItem('service', URL_BACKEND)
  return 'https://localhost:9000'
}

export const client = axios.create({
  baseURL: getURLBackend()
})
