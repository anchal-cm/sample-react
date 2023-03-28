import { useRecoilState } from "recoil"
import { authState } from "./auth-atom"

export const useAuth = () => {
    const  [auth, setAuth] = useRecoilState(authState)
    return {
        auth, setAuth
    }
}