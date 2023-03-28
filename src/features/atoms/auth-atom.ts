import { atom } from "recoil";
import { User } from "../entity/User";

 type NotLoginState = {
    type: "not-login";
}

type LoginState =  {
    type: "Logined";
    user:User
}


export const authState = atom<NotLoginState | LoginState>({
    key:"authState",
    default: {
        type:"not-login"
    }
})