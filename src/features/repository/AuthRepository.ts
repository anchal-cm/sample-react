import { getAuth, GoogleAuthProvider, signInWithPopup, User as FirebaseUser } from "firebase/auth";
import { User } from "../entity/User";
import  { firebaseApp } from "../utils/firebase";

const auth = getAuth(firebaseApp)

export class AuthRepository {
  static async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const {user} = await signInWithPopup(auth,provider);
    if(!user) {
      throw new Error("user not found")
    }
    return firebaseUserToAppUser(user)

  }

  static currentUser() {
    const user = auth.currentUser;
    if(!user) {
      return null
    }
   return firebaseUserToAppUser(user)
  }
  
   
}

function firebaseUserToAppUser(user: FirebaseUser) {
  return {name:user.displayName, email: user.email} as User
}
