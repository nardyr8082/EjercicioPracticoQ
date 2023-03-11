import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, Observable, take, tap } from 'rxjs'
import { ResponseUsersI } from '../modelos/response.interface'
import { ResponsePostsI } from '../../posts/modelos/response.interface'
import { Apollo, gql } from 'apollo-angular'



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  posts_usersId: number[] = []
  constructor (private http: HttpClient ) {
  }

 AllUsers (): Observable<ResponseUsersI> {
    return this.http.get<ResponseUsersI>('https://gorest.co.in/public/v2/users?page=1&per_page=100')
  }

  UserById(id:string):Observable<any>{
    return this.http.get<any>(`https://gorest.co.in/public/v2/users/${id}`)
  }

  
}
