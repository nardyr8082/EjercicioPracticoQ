import { Component, OnInit } from '@angular/core'
import { UsersService } from '../servicios/users.service'
import { PostsService } from '../../posts/servicios/posts.service'

import { ResponseUsersI } from '../modelos/response.interface'
import { Router } from '@angular/router'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  allusers: any = []
  loading: boolean = false
  constructor (
    private apiUser: UsersService,
    private apiPosts: PostsService,
    private router: Router
  ) {}

  ngOnInit (): void {
    this.loading=true
    //Carga todos los usuarios con sus posts
    this.apiUser.AllUsers().subscribe(data => {
      this.allusers = data
      this.allusers.forEach((element: any) => {
        this.apiPosts.PostsByUser(element.id).subscribe(
          data => {
            
            element.cantPost = data.length
            element.Post = data
            this.loading=false
          },
          error => {
         //   this.router.navigate(['**'])
          }
        )
      })
     
    })
  }
  exit () {
    localStorage.setItem('user_id', '')
    this.router.navigate(['/login'])
  }
}
