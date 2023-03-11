import { Component, OnInit } from '@angular/core'
import { CommentsService } from '../servicios/comments.service'
import { ActivatedRoute, Route } from '@angular/router'
import { PostsService } from '../../posts/servicios/posts.service'
import { AlertController } from '@ionic/angular'
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  id_post: any
  arrayCommentsByPosts: any = []

  loading: boolean = false
  constructor (
    private commentsService: CommentsService,
    private activeRoute: ActivatedRoute,
    private postsService: PostsService,
    private alertController: AlertController,
  ) {}

  ngOnInit (): void {
    this.comments()
  }

  comments () {
    this.loading = true
    this.arrayCommentsByPosts = []
    this.postsService.PostsByUser(localStorage.getItem('user_id')!).subscribe({
      next: data => {
        data.forEach((e: any) => {
          this.commentsService.commentByPostByUser(e.id).subscribe({
            next: data => {
              e.comments = data
              this.arrayCommentsByPosts.push(e)
              this.loading = false
            },
            error: err => {}
          })
        })
      }
    })
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
          this.loading=true
    this.commentsService.deleteComment(id).subscribe({
      next: data => {
        
        this.loading=false
        this.Alertas('Info', 'Eliminar Comentario', 'Eliminado correctamente!',0)
        this.comments();
      },
      error: err => {
        
        this.Alertas('Error', 'Eliminar Comentario', 'Intente luego!',0)
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
    
  }

  deleteComment(comment:any){
    
    this.Alertas('Alerta', 'Eliminar Comentario', `Desea eliminar el comentario: ${comment.name}`,comment.id)
    /* this.commentsService.deleteComment().subscribe({
      next:data=>{

      },
      error:err=>{

      }
    }) */
  }
}
