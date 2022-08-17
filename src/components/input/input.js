import { InputBox } from './styled'

export const Input = ({ name, label, type, onChange, placeholder = '', value }) => {
  return (
    <InputBox>
      <label>{label}</label>
      <input type={type} name={name} onChange={onChange} placeholder={placeholder} value={value}></input>
    </InputBox>
  )
}
