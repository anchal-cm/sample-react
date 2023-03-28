import { FC } from 'react'
import { useLoginPage } from './LoginPAge.hooks'

export const LoginPage: FC = () => {
  const { onClickLogin } = useLoginPage()
  return (
    <div>
      <h2>LoginPage</h2>
      <button onClick={onClickLogin}>Google Login</button>
    </div>
  )
}
