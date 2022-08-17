import styled from 'styled-components'

export const Headers = styled.header`
  color: var(--text);
  width: 100%;
  height: 3em;
  background: var(--gray-line) ;
  text-align: center;
  display:flex;
  justify-content: center;
  align-items: center;

  section{
    width: 20%;
    float: left;
    height: 100%;
    line-height: 3rem;
    background: var(--red) ;
  }

  h2{
    display:inline ;
    font-size: 30px;
  }
`
