import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../button/button'
import { FooterStyled } from './styled'

export const Footer = () => {
  const handleClick = () => {
    const section = document.querySelector('#VoltaAoTopo')
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <FooterStyled>
      <p></p>
      <p> Feito por<em> &nbsp; &nbsp;<a href='https://github.com/janinelps' target='_blank' rel="noreferrer" ><strong> Janine Santos </strong></a> &nbsp; &nbsp; </em>  Aceleradora Ágil - 2022</p>
      <Button onClick={handleClick} icon={faCaretUp} />
    </FooterStyled>
  )
}
