
import { AuthRepository } from "../repository/AuthRepository";



export class AuthUsecase {
  static login() {
    return AuthRepository.loginWithGoogle();
  }
  static currentUser() {
    return AuthRepository.currentUser()
  }

  static logout() {
    return AuthRepository.logout()
  }
}