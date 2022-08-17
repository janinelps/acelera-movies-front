import styled from 'styled-components'

export const StyledHeader = styled.div`
  display:flex ;
  justify-content: end;
  margin-top: 5px;
  margin-bottom: 15px;
  background: var(--gray-line);
`

export const Lista = styled.ul`
  padding: 50px ;
  list-style: none;

  li{
    display:flex;
    text-align: center;
  }

  img{
    width:9em;
    padding-bottom: 30px ;
    overflow: hidden;
  }

  a{
    display: contents;
  }

`

export const CardTitle = styled.div`
  padding-left: 20px;
  width:70% ;
  text-align: initial;

  h5{
    color: blue;
    padding-bottom: 40px ;
  }

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
  }
`

export const Container = styled.div`
  display:flex ;
  justify-content: space-between;
`
