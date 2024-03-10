import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from './autenticacao/usuario.model'


interface AutenticacaoResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class AutenticaService {

  user = new BehaviorSubject<User>(new User('', '', '', new Date()));
  private isAuthenticated = false;

  constructor(private http: HttpClient) { }

  signupUser(email: string, password: string) {
    return this.http.post<AutenticacaoResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAc16F_48VTX1eydT5x3MMBGHhplvg1Z6E',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(
        tap(resData => {
          const expiracaoData = new Date(new Date().getTime() + +resData.expiresIn * 1000);
          const user = new User(
            resData.email,
            resData.localId,
            resData.idToken,
            expiracaoData
          );

          this.user.next(user);
          localStorage.setItem('userData', JSON.stringify(user));
        })
      );
  }

  loginUser(email: string, password: string) {
    return this.http.post<AutenticacaoResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAc16F_48VTX1eydT5x3MMBGHhplvg1Z6E',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(
        tap(resData => {
          const expiracaoData = new Date(new Date().getTime() + +resData.expiresIn * 1000);
          const user = new User(
            resData.email,
            resData.localId,
            resData.idToken,
            expiracaoData
          );
          this.user.next(user);
          localStorage.setItem('userData', JSON.stringify(user));
          this.setAuthenticated(true);
        }),
      );
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;

    } = JSON.parse(localStorage.getItem('userData') as string);
    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.setAuthenticated(true);
      this.user.next(loadedUser);
    }


  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  setAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
  }

  logout() {
    // Limpar o local storage
    localStorage.clear();

    // Limpar o usuário atual
    this.user.next(new User('', '', '', new Date()));
  }
}
