import axios from 'axios'
import env from 'react-dotenv'

const getURLBackend = () => {
  const { URL_BACKEND } = env
  console.log(URL_BACKEND)
  return 'http://localhost:9000'
}

export const client = axios.create({
  baseURL: getURLBackend()
})
