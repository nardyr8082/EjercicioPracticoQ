//OJO Solo servicios del login
import { Injectable } from '@angular/core'
import { LoginI } from '../login/modelos/login.interface'
import { ResponseI } from '../login/modelos/response.interface'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = ''
  token:string='daec5eb62b62b3db50ad864bdd9fdc6ef23d9d9e5f537fc37eada5363ce012d5'
  constructor (private http: HttpClient) {}

  loginByIdUser (user_id: LoginI): Observable<ResponseI> {
  return this.http.get<any>(`https://gorest.co.in/public/v2/users/${user_id}`)
  }

  insertUser (form: LoginI) {
    return this.http.post<ResponseI>(`https://gorest.co.in/public/v2/users`,form)
  }
}
