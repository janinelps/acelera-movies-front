import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Rating } from 'react-simple-star-rating'
import { Header } from '../../components/header/header'
import { Menu } from '../../components/menu/menu'
import { client } from '../../service/client'
import dateFormat from 'dateformat'
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Modal } from '../../components/modal/modal'
import {
  Container,
  Gender,
  Title,
  StyleTitle,
  Conteudo
} from './styled'
import { FormMovie } from '../../components/forms/form'
import { Button } from '../../components/button/button'

export const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    client.get(`/movie/${id}`).then(res => {
      setMovie(res.data.movie)
    })
      .catch(error => {
        console.log(error)
        setMovie()
      })
  }, [])

  const handleStar = async (value) => {
    const movieTemp = { ...movie, note: value }
    setMovie(movieTemp)
    await client.put(`/movie/${movie.id}`, movieTemp)
      .catch(error => {
        console.log(error)
        setMovie([])
      })
  }

  const handleDelete = async (id) => {
    try {
      const answer = confirm('Deseja excluir o item?')
      if (answer === false) return
      await client.delete(`/movie/${id}`)
      navigate('/home')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Menu />
      <Container>
        <Title>
          <Modal icon={faPencilAlt} title='Editar Movie' ><FormMovie id={movie.id} method="PUT" /> </Modal>
          <Button icon={faTrashAlt} onClick={() => handleDelete(movie.id)} />
          <Header title={movie.title} />
        </Title>
        <Conteudo>
          <div>
            <img src={movie.image}></img>
          </div>
          <div>
            <StyleTitle>
              <div>
                <h2>{movie.title}
                </h2>
                {movie.releaseDate && <h5>Date: {dateFormat(movie.releaseDate, 'dd/mm/yyyy')}</h5>}
              </div>
              <Rating onClick={handleStar} ratingValue={movie.note} />
            </StyleTitle>
            <p>{movie.resume}</p>
          </div>
        </Conteudo>

        <div>
          <Gender>
            {movie.gender?.split(',').map((gende, index) => (
              <div key={index}>
                <span>{gende}</span>
              </div>
            ))
            }
          </Gender>
          <h4><strong>Classification:</strong> {movie.classification}</h4>
          <h4><strong>Director:</strong> {movie.director}</h4>
          <h4><strong>Writer:</strong> {movie.writer}</h4>
          <h4><strong>Studio:</strong> {movie.studio}</h4>
          <h4><strong>Stars:</strong> {movie.actors}</h4>
          {movie.awards && <h4><strong>Awards:</strong> {movie.awards}</h4>}
        </div>
      </Container>
    </>
  )
}
