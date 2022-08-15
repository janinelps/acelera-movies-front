import styled from 'styled-components'

export const Container = styled.div`
z-index:1000;
 position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(-45deg, #89f7fe 0%, #66a6ff 60%, #23A6D5, #23D5AB);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column ;
`

export const ModalStyle = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding:10px;
  width: 50%;
  -webkit-box-shadow: -1px -3px 11px -4px rgba(0,0,0,0.85); 
  box-shadow: -1px -3px 11px -4px rgba(0,0,0,0.85);
  overflow: auto;

  header{
    display: flex;
    justify-content: space-between;
    background-color: var(--blue-dark);
    color: var(--white);
    margin-bottom: 10px;
    padding:10px;
  }

  button{
    border:none;
    background:none;
    color: var(--white) ;
    cursor: pointer;
    font-weight:900;
    font-size: 20px;

    &:hover{
      color: var(--text);
    }
  }
`
