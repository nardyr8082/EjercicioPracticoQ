import { Injectable } from '@angular/core'
import { ResponsePostsI } from '../modelos/response.interface'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor (private http: HttpClient) {}
  AllPosts (): Observable<ResponsePostsI> {
    return this.http.get<ResponsePostsI>(
      'https://gorest.co.in/public/v2/posts?page=1&per_page=100'
    )
  }

  PostsByUser (id: string): Observable<any> {
    return this.http.get<ResponsePostsI>(
      `https://gorest.co.in/public/v2/users/${id}/posts`
    )
  }

  InsertPost (form: any): Observable<any> {
    let user_id = localStorage.getItem('user_id')
   

    return this.http.post<any>(
      `https://gorest.co.in/public/v2/users/${user_id}/posts`,
      form
    )
  }

  DeletePost (id: any): Observable<any> {
    return this.http.delete<any>(`https://gorest.co.in/public/v2/posts/${id}`)
  }
}
