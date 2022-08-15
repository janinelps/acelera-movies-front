import { Input } from '../input/input'
// import { Button } from '../button/button'
import { useState } from 'react'
import { FormConteaner, TextArea } from './styled'
import { client } from '../../service/client'

export const FormMovie = ({ method = 'POST', id = '', callback = () => { } }) => {
  const [formMovie, setFormMovie] = useState({
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
    note: ''

  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormMovie({
      ...formMovie, [name]: value
    })
  }

  const sendMovie = () => {
    const data = formMovie
    client(`/movie/${id}`,
      {
        method,
        data
      }).then(res => { callback(res.data) })
  }

  return (
    <FormConteaner>
      <form>
        <div>
          <Input type='text' label='Title' placeholder='Title movie' onChange={handleChange} />
          <Input type='text' label='Subtitle' placeholder='Subtitle movie' onChange={handleChange} />
        </div>
        <TextArea>
          <label>Resume</label>
          <textarea name="Text" cols="40" rows="10" onChange={handleChange} />
        </TextArea>
        <div>
          <Input type='date' label='Release Date' placeholder='dd/mm/yyyy' onChange={handleChange} />
          <Input type='text' label='Image' placeholder='http://....' onChange={handleChange} />
        </div>
        <div>
          <Input type='text' label='Director' placeholder='Director' onChange={handleChange} />
          <Input type='text' label='Write' placeholder='Write' onChange={handleChange} />
        </div>
        <div>
          <Input type='text' label='Classification' placeholder='classification' onChange={handleChange} />
          <Input type='text' label='STudio' placeholder='Studio' onChange={handleChange} />
        </div>
        <Input type='text' label='Stars' placeholder='Actor' onChange={handleChange} />
        <button type='button' onClick={sendMovie}>Salvar</button>
      </form>
    </FormConteaner>
  )
}
