import { useEffect, useState } from 'react'
import { client } from '../../service/client'

export const Movie = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    client.get('/movie').then(res => {
      setMovie(res.data)
    })
      .catch(error => {
        console.log(error)
        setMovie([])
      })
  }, [])

  return (
    <>
      <p>PAGINA DE MOVIES</p>
      <ul>
        {movie.map((movie) => (
          < li key={movie.id} >
            <img src={movie.image} /> {movie.title} - Autors
          </li>
        ))}
      </ul>
    </>
  )
}
