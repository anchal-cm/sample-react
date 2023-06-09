import { atom } from "recoil";
import { User } from "../entity/User";

 type NotLoginState = {
    type: "not-login";
}

type LoginState =  {
    type: "Logined";
    user:User
}

type LoadingState = {
    type: "Loading"
}


export const authState = atom<NotLoginState | LoginState | LoadingState>({
    key:"authState",
    default: {
        type:"Loading"
    }
})