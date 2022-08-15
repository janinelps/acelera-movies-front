import styled from 'styled-components'

export const FormConteaner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
      display: flex;
      justify-content: space-between;
    }

  button{
    border-radius:5px;
    width:100%;
  }
`

export const TextArea = styled.div`
display: flex;
flex-direction: column;
margin:0 20px;

input{
  padding: 10px; line-height: 20px;
}
`
