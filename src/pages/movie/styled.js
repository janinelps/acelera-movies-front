import styled from 'styled-components'

export const StyledHeader = styled.div`
display: flex;
flex-direction:center ;
`

export const Container = styled.div`
  padding: 50px ;
  display: flex;
  flex-direction: column;
  
  img{
    width:80%;
  }

  h4{
    font-weight: lighter;
  }
  
`

export const Title = styled.div`
  display:flex ;
  justify-content: end;
  margin-top: 5px;
  margin-bottom: 15px;
  background: var(--gray-line);
  flex-direction: row-reverse;

  button{
    z-index: 1;
    background: var(--gray-line);
    font-size: 30px;
    color: black;
    
    &:hover{
      box-shadow: none;
      color: var(--red);
    }
  }
`

export const Conteudo = styled.div`
  display:flex ;
  justify-content: end;
  margin-top: 5px;
  margin-bottom: 15px;
`
export const Gender = styled.div`
  display: flex;

  div{
    margin: 20px;
  }
  span { 
    padding: 10px;
    border-radius: 10px;
    background-color: var(--gray-line); 
  }
`
export const StyleTitle = styled.div`
  display:flex ;
  justify-content: space-between;
  margin-bottom: 10px;
`
