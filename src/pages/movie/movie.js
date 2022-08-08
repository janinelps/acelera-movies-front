import { useEffect, useState } from 'react'
import { Header } from '../../components/header/header'
import { Menu } from '../../components/menu/menu'
import { client } from '../../service/client'
import { Lista } from './styled'

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
      <Menu />
      <Header title="All Movies" />
      <Lista>
        {movie.map((movie) => (
          < li key={movie.id} >
            <div>
              <img src={movie.image} alt={`Poster do filme ${movie.title}`} />
            </div>
            {movie.title} - {movie.resume}
          </li>
        ))}
      </Lista>
    </>
  )
}
