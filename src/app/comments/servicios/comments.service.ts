import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {}


  commentByPostByUser(id_post:string):Observable<any>{
   return this.http.get<any>(`https://gorest.co.in/public/v2/posts/${id_post}/comments`)
  }
  deleteComment(id: any): Observable<any> {
    return this.http.delete<any>(`https://gorest.co.in/public/v2/comments/${id}`)
  }
}
