import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currenUserData: BehaviorSubject<User> = new BehaviorSubject<User>({ id: 0, email: '' })
  constructor(private http: HttpClient) { }
  login(credentials: LoginRequest): Observable<any> {
    return this.http.get<User>('http://localhost:3000/users').pipe(
      tap((userData: User) => {
        this.currenUserData.next(userData);
        this.currentUserLoginOn.next(true);
      }),
      catchError(this.handleError)
    )

  }
  private handleError(error: HttpErrorResponse) {
    if (error.status == 0) {
      console.error('se ha producido un error', error.error);
    }
    else {
      console.error('Backend retorno el code', error.status, error.error);
    }
    return throwError(() => new Error('Algo fallo'))
  }

  get userData():Observable<User>{
    return this.currenUserData.asObservable();
  }
  get userLoginOn():Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }
}

