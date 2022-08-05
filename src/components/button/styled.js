import styled from 'styled-components'

export const ButtonComponent = styled.button`
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: var(--blue-dark);
  color:var(--white);
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;
  margin-left: 10px;

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
`
