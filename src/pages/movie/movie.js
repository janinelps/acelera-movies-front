import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Rating } from 'react-simple-star-rating'
import { Header } from '../../components/header/header'
import { Menu } from '../../components/menu/menu'
import { client } from '../../service/client'
import { Container, Title } from './styled'
import dateFormat from 'dateformat'

export const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({ title: '', director: '' })

  useEffect(() => {
    client.get(`/movie/${id}`).then(res => {
      setMovie(res.data.movie)
    })
      .catch(error => {
        console.log(error)
        setMovie()
      })
  }, [])

  const handleStar = (value) => {
    setMovie({ ...movie, note: value })
  }

  return (
    <>
      <Menu />
      <Header title={movie.title} />
      <Container>
        <Title>
          <img src={movie.image}></img>
          <div>
            <h2>{movie.title} </h2>
            {movie.releaseDate && <h5>Date: {dateFormat(movie.releaseDate, 'dd/mm/yyyy')}</h5>}
          </div>
          <div>
            <Rating onChange={handleStar} ratingValue={movie.note} />
          </div>
        </Title>
        <div>
        </div>
        <p>{movie.resume}</p>
        <div>
          {movie.gender?.split(',').map((gende, index) => (
            <div key={index}>{gende}</div>
          ))
          }
          <h4>Classification: {movie.classification}</h4>
          <h4>Director: {movie.director}</h4>
          <h4>Writer: {movie.writer}</h4>
          <h4>Studio: {movie.studio}</h4>
          <h4>Stars: {movie.actors}</h4>
        </div>
      </Container>
    </>
  )
}
