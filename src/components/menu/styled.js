import styled from 'styled-components'

export const Aside = styled.aside`
  background-color: var(--blue);
  max-width: 10rem;
  text-decoration: none;
  padding-left: 1.3rem;
  padding-right: 1.3rem;

  ul{
  width: 100%;
  }

  li{
    list-style: none;
  }

  a{
    color: white;
  width: 100%;
  text-decoration: none;
  border: solid 1 white;
  height: 2rem;
  transition: 0.5s;
  text-align: left;
  align-items: center;
  justify-items: center;
  height: 50px;
  font-size: large;
  display: flex;

    &:hover{
      background-color: var(--blue-dark);
      border-radius: 3px;
    }
  }

`
