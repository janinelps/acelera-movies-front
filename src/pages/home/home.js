import { useEffect, useState } from 'react'
import { Header } from '../../components/header/header'
import { Menu } from '../../components/menu/menu'
import { client } from '../../service/client'
import { CardTitle, Lista } from './styled'

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
            <img src={movie.image} alt={`Poster do filme ${movie.title}`} />
            <CardTitle>
              <h2>{movie.title}</h2>
              <h5>Date: {new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(movie.releaseDate))}</h5>
              <p>
                {movie.resume}
              </p>
            </CardTitle>
          </li>
        ))}
      </Lista>
    </>
  )
}
