import styled from 'styled-components'

export const FooterStyled = styled.footer`
  
  background: var(--gray-line);
  display: flex;
  justify-content: space-evenly;
  
  button{
    font-size: 20px;
  }


  p{
   display: flex;
   align-items: center; 
   color: black; 
 
    a{
      text-decoration:none;
      padding: 20px;
      color: var(--blue-dark)
    }
  }
`
