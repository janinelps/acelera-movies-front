import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import { Header } from '../../components/header/header'
import { Menu } from '../../components/menu/menu'
import { client } from '../../service/client'
import dateFormat from 'dateformat'
import { CardTitle, Container, Lista, StyledHeader } from './styled'
import { Footer } from '../../components/footer/footer'

export const Home = () => {
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

  const handleStar = (value) => {
    setMovie({ ...movie, note: value })
  }

  return (
    <>
      <Menu />
      <span id="VoltaAoTopo"></span>
      <Lista >
        <StyledHeader>
          <Header title="All Movies" />
        </StyledHeader>
        {movie.map((movie) => (
          < li key={movie.id} >
            <img src={movie.image} alt={`Poster do filme ${movie.title}`} />
            <CardTitle>
              <Container>
                <div>
                  <h2>{movie.title}</h2>
                  <h5>Date: {dateFormat(movie.releaseDate, 'dd/mm/yyyy')}</h5>
                </div>
                <div>
                  <Rating readonly={true} onChange={handleStar} ratingValue={movie.note} />
                </div>
              </Container>
              <Link to={`/movie/${movie.id}`}>
                <p>
                  {movie.resume}
                </p>
              </Link>
            </CardTitle>
          </li>
        ))}
        <Footer />
      </Lista>
    </>
  )
}
