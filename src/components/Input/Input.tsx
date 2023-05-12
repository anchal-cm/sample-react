import { FC } from 'react'

type InputProps = {
  label: string
  value: string
  onChange: (value: string) => void
  type?: 'text' | 'password' | 'email'
}
export const Input: FC<InputProps> = ({ label, value, onChange, type = 'text' }: InputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}
