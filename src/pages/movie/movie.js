import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Rating } from 'react-simple-star-rating'
import { Header } from '../../components/header/header'
import { Menu } from '../../components/menu/menu'
import { client } from '../../service/client'
import { Container, Gender, Title, Icon } from './styled'
import dateFormat from 'dateformat'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Modal } from '../../components/modal/modal'

export const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({ title: '', director: '' })
  const [modal, setModal] = useState(false)

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

  const handleEdit = async () => {
    setModal(modal => !modal)
  }

  const handleDelete = (id) => {
    try {
      const answer = confirm('Deseja excluir o item?')
      if (answer === false) return
      client.delete(`/movie/${id}`)
      const newMovie = movie.filter(movie => movie.id !== id)
      setMovie(newMovie)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Menu />
      <Container>
        {modal && <Modal setModal={setModal} />}
        <div>
          <Icon onClick={() => handleDelete(movie.id)}>
            <Header title={movie.title} />
            <FontAwesomeIcon icon={faTrashAlt} className='icon' />
          </Icon>
          <Icon onClick={() => handleEdit(movie.id)}>
            <FontAwesomeIcon icon={faPencilAlt} className='icon' />
          </Icon>
        </div>
        <Title>
          <div>
            <img src={movie.image}></img>
          </div>
          <div>
            <div>
              <h2>{movie.title}
              </h2>
              {movie.releaseDate && <h5>Date: {dateFormat(movie.releaseDate, 'dd/mm/yyyy')}</h5>}
            </div>
            <Rating onChange={handleStar} ratingValue={movie.note} />
            <p>{movie.resume}</p>
          </div>
        </Title>

        <div>
          <Gender>
            {movie.gender?.split(',').map((gende, index) => (
              <div key={index}>
                <span>{gende}</span>
              </div>
            ))
            }
          </Gender>
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
