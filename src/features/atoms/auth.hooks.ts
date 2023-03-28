import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { firebaseApp } from "../utils/firebase"
import { authState } from "./auth-atom"

export const useAuth = () => {
    const  [auth, setAuth] = useRecoilState(authState)

   useEffect(() => {
    const auth = getAuth(firebaseApp)
    return onAuthStateChanged(auth,(user) => {
        if(!user) {
            setAuth({type:"not-login"})
            return
        }
        if(user) {
            setAuth({
                type:"Logined",
                user:{email:user.email??"",name:user.displayName??""}
            })
            return;
        }
    })

   },[])
    return {
        auth, setAuth
    }
}