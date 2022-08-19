import styled from 'styled-components'

export const Aside = styled.nav`
  background-color: var(--blue);
  text-decoration: none;
  padding-left: 1.3rem;
  padding-right: 1.3rem;
  min-width: 15%;
  max-width: 25%;
  padding-top: 50px;
  text-align: center;
  min-height: 100vh; 
  display: flex;
  flex-direction: column;

  button{
    background-color: var(--blue);
    margin:20px 10px;
  }

  section{
    background-color: var(--gray-line);
    padding:10%;
    text-align: center;
    border-radius: 15px;
    font-weight: 900;
  }

  a{
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  border: none;
  border-radius: 0.4rem;
  color:var(--white);
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;
  margin: 10px;
  
  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px var(--blue-twitter), 0 0 0 4px var(--white);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: wait;
    box - shadow: none;
  }
  }
`
