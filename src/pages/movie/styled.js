import styled from 'styled-components'

export const Icon = styled.div`
  display: flex;
  flex-direction: row-reverse;
  font-size: 30px;
`

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
`

export const Context = styled.div`
  padding-left: 20px;
  width:70% ;
  text-align: initial;

  p {
    overflow: hidden;
    position: relative;
    line-height: 1.2em;
    max-height: 8.2em;
    text-align: justify;

    &:before {
    content: '...';
    position: absolute;
    right: 0px;
    bottom: 0;
    background-color: var(--background);
    padding: 0 0px 0 0.25em;
  }
`

export const Title = styled.div`
  display:flex ;
  justify-content: space-between;
  margin-top: 50px;
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
