import { Component, Input, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute, Route } from '@angular/router'
import { PostsService } from '../servicios/posts.service'
import { UsersService } from '../../users/servicios/users.service'
import { ResponseUsersI } from '../../users/modelos/response.interface'
import { AnimationController } from '@ionic/angular'
import { IonModal } from '@ionic/angular'
import { OverlayEventDetail } from '@ionic/core/components'
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  userId: any = ''
  userDetail: any
  allUsers: any = []
  loading: any = 1
  loadingInsertPost: any = 1
  
  flagUserByPost: boolean = false
  postUserDetails: any = []
  userPosts: any = []
  public userPostsSearch: any = []
  //Variables del modal
  @ViewChild(IonModal) modal: IonModal | any
  titulo: string = ''
  texto: string = ''
  resultAlert:any

  //Variables addFormPost
  addPostForm!: FormGroup
  isSubmit: boolean = false
  //Variable Modal
  isModalOpen: boolean = false
  constructor (
    private activeRoute: ActivatedRoute,
    private router: Router,
    private postsService: PostsService,
    private userService: UsersService,
    private alertController: AlertController,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit (): void {
    this.loading = ''
    this.addPostForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      body: ['', [Validators.required, Validators.minLength(1)]]
    })
   /*  this.userId = this.activeRoute.snapshot.paramMap.get('id') */
    this.allPosts()

    
  }

  allPosts(){
    this.flagUserByPost=false;
    this.userService.AllUsers().subscribe(data => {
      this.allUsers = data
      this.allUsers.forEach((element: any) => {
        this.postsService.PostsByUser(element.id).subscribe({
          next: data => {
            this.loading = data
            this.usersHasPosts(element, data)
            //element.posts = data
          },
          error: err => {
            /*             this.router.navigate(['**']) */
          }
        })
      })
    })
  }

  get errorControl () {
    return this.addPostForm.controls
  }

  usersHasPosts (user: any, user_posts: any) {
    const detailUser = {
      user: user,
      posts: user_posts
    }

    if (user_posts.length > 0) {
      this.userPosts.push(detailUser)
      this.userPostsSearch = [...this.userPosts]
    }
    
  }
  //Buscador por Usuarios en la lista d posts
  handleChange (event: any) {
    const query = event.target.value.toLowerCase()

    this.userPostsSearch = this.userPosts.filter(
      (d: any) => d.user.name.toLowerCase().indexOf(query) > -1
    )
    
  }

  //Modal Functions Add Post
  setOpen (flag: boolean) {
    this.isModalOpen = flag
    this.PostsByUser();
  }

  async Alertas (header: string, subHeader: string, message: string,id:any) {
    let btn=id!==0?[
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
   
        },
      },
      {
        text: 'OK',
        role: 'confirm',
        handler: () => {
          this.loading=''
    this.postsService.DeletePost(id).subscribe({
      next: data => {
        
        this.loading=1
        this.Alertas('Info', 'Eliminar Post', 'Eliminado correctamente!',0)
        this.PostsByUser();
      },
      error: err => {
        
        this.Alertas('Error', 'Eliminar Post', 'Intente luego!',0)
      }
    })
   
        },
      },
    ]:[{
      text: 'OK',
      role: 'confirm',
      handler: () => {
 
      },
    }]
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
     buttons: btn
    })
    await alert.present()
    const { role } = await alert.onDidDismiss();
    this.resultAlert=role;
  }

  addPost (form: any) {
    this.isSubmit = true
    if (!form.valid) {
      this.Alertas('Alerta', 'Campos vacios', 'Revise!',0)
    } else {
      this.loadingInsertPost = ''
      this.postsService.InsertPost(form.value).subscribe({
        next: data => {
          
          
          this.loadingInsertPost = data
          this.Alertas('Info', 'Insert Post', 'Insertado correctamente',0)
          
          //this.addPostForm.
        },
        error: err => {
          this.Alertas('Error', 'Insert Post', 'Problemas de conexion!',0)
        }
      })
    }
  }

  PostsByUser () {
    this.loading=''
    this.userService.UserById(localStorage.getItem('user_id')!).subscribe(data => {
        this.userDetail = data
      })
    this.flagUserByPost=true;
    this.postsService
      .PostsByUser(localStorage.getItem('user_id')!)
      .subscribe(data => {
        this.postUserDetails = data
        this.loading=data
      
        
      })
  }

  deletePost (post: any) {
this.Alertas('Alerta', 'Eliminar Post', `Desea eliminar el post: ${post.title}`,post.id)
   
  }
}
