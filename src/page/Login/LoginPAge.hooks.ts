import { useCallback } from "react"
import { AuthUsecase } from "../../features/usecase/AuthUsecase"

export const useLoginPage = () => {
  const onClickLogin = useCallback(() => {
    AuthUsecase.login();
 
    console.log("login click")
  },[])

  return { onClickLogin}
}