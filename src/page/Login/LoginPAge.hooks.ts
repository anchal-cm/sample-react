import { useCallback } from "react"
import { AuthUsecase } from "../../features/usecase/AuthUsecase"

export const useLoginPage = () => {
  const onClickLogin = useCallback(() => {
    AuthUsecase.loginWithGoogle();
 
    console.log("login click")
  },[])

  return { onClickLogin}
}