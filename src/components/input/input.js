import { InputBox } from './styled'

export const Input = ({ label, type, onChange, placeholder = '' }) => {
  return (
    <InputBox>
      <label>{label}</label>
      <input type={type} onChange={onChange} placeholder={placeholder}></input>
    </InputBox>
  )
}
