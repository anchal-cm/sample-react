import { FC } from 'react'
import { AuthUsecase } from '../../features/usecase/AuthUsecase'
import { StackVertical } from '../views/StackVertical/StackVertical'
import style from './Dialog.module.css'

interface DialogProps {
  isOpen: boolean
  toggleDialog: () => void
}

const Dialog: FC<DialogProps> = (props: DialogProps) => {
  const user = AuthUsecase.currentUser()
  console.log(user)

  return (
    <>
      {props.isOpen && (
        <dialog className={style.outerDiv}>
          <div className={style.innerDiv}>
            <StackVertical className={style.content}>
              <div>
                <h3>You are logged in!</h3>
                <p>Name : {user?.name}</p>
                <p>Email address: {user?.email}</p>
                <button onClick={() => AuthUsecase.logout()} style={{ color: 'red' }}>
                  Logout
                </button>
              </div>
              <div>
                <button onClick={props.toggleDialog}>close</button>
              </div>
            </StackVertical>
          </div>
        </dialog>
      )}
    </>
  )
}

export default Dialog
