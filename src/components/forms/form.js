import { Input } from '../input/input'
import { Button } from '../button/button'
import { useEffect, useState } from 'react'
import { FormConteaner, TextArea } from './styled'
import { client } from '../../service/client'

export const FormMovie = ({ method = 'POST', id = '', callback = () => { } }) => {
  const initial = {
    title: '',
    gender: '',
    classification: '',
    subtitle: '',
    image: '',
    releaseDate: '',
    director: '',
    writer: '',
    studio: '',
    actors: '',
    resume: '',
    awards: '',
    note: 0
  }
  const [formMovie, setFormMovie] = useState(initial)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormMovie({
      ...formMovie, [name]: value
    })
    console.log(name)
  }

  useEffect(() => {
    if (id) {
      client.get(`/movie/${id}`).then(res => {
        setFormMovie(res.data.movie)
      })
        .catch(error => {
          console.log(error)
          setFormMovie()
        })
    }
  }, [])

  const sendMovie = (event) => {
    event.preventDefault()
    const data = formMovie
    client(`/movie/${id}`,
      {
        method,
        data
      })
      .then(res => {
        alert('Salvo com sucesso!')
        document.location.reload(true)
        callback(res.data)
      })
  }

  return (
    <FormConteaner>
      <form>
        <div>
          <Input type='text' name='title' label='Title' placeholder='Title movie' onChange={handleChange} value={formMovie.title} />
          <Input type='text' name='subtitle' label='Subtitle' placeholder='Subtitle movie' onChange={handleChange} value={formMovie.subtitle} />
        </div>
        <TextArea>
          <label>Resume</label>
          <textarea name='resume' cols="40" rows="10" onChange={handleChange} value={formMovie.resume} />
        </TextArea>
        <div>
          <Input type='date' name='releaseDate' label='Release Date' placeholder='dd/mm/yyyy' onChange={handleChange} value={formMovie.releaseDate} />
          <Input type='text' name='image' label='Image' placeholder='http://....' onChange={handleChange} value={formMovie.image} />
        </div>
        <div>
          <Input type='text' name='director' label='Director' placeholder='Director' onChange={handleChange} value={formMovie.director} />
          <Input type='text' name='writer' label='Writer' placeholder='Writer' onChange={handleChange} value={formMovie.writer} />
        </div>
        <div>
          <Input type='text' name='classification' label='Classification' placeholder='classification' onChange={handleChange} value={formMovie.classification} />
          <Input type='text' name='Studio' label='Studio' placeholder='Studio' onChange={handleChange} value={formMovie.studio} />
        </div>
        <div>
          <Input type='text' name='actors' label='Stars' placeholder='Actor' onChange={handleChange} value={formMovie.actors} />
          <Input type='text' name='gender' label='Gender' placeholder='Gender' onChange={handleChange} value={formMovie.gender} />
        </div>
        <div>
          <Input type='text' name='awards' label='Awards' placeholder='Awards' onChange={handleChange} value={formMovie.awards} />
          <Input type='number' name='note' label='Note' placeholder='Note de 1 a 100' onChange={handleChange} value={formMovie.note} />
        </div>
        <Button type='button' onClick={sendMovie} text='Salvar' />
      </form>
    </FormConteaner>
  )
}
