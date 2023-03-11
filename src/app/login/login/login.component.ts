import { Component, OnInit,ViewChild } from '@angular/core';
import {FormControl,FormGroup,FormBuilder, Validators} from '@angular/forms'
import {ApiService} from '../../servicios/api.service'
import {LoginI} from '../modelos/login.interface'
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular'
import { IonModal } from '@ionic/angular'
import { UsersService } from '../../users/servicios/users.service'
import { NetworkService } from '../../capacitor-servicios/network/network.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  addUserForm!:FormGroup
  loginResponse:any=1
  isSubmit:boolean=false;
  networkStatus:any;
  //Variables del modal
  @ViewChild(IonModal) modal: IonModal | any
  constructor(private api:ApiService,
     public formBuilder: FormBuilder,
     private router:Router,
     private alertController: AlertController,
     private usersService:UsersService,
     private networkService:NetworkService
     ) { 
      
     }

  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({
      user_id: ['', [Validators.required, Validators.minLength(1)]],
    }) 
    this.addUserForm= this.formBuilder.group({
      "name": ['', [Validators.required, Validators.minLength(2)]],
      "email": ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      "gender": ['', [Validators.required]],
      "status": ['active'],
      
      
    }) 
  }

  async onWillDismiss (header:string,subHeader:string,message:string) {
    

    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK']
    })

    await alert.present()
  }


 async onLogin(form:any){
   

    if(form.user_id===""){
      this.onWillDismiss("Alerta","Campos vacios","Revise!")
    }else{
      this.loginResponse=""
      this.api.loginByIdUser(form.user_id).subscribe({
        next:data=>{
          
          localStorage.setItem('user_id',data.id)
          this.loginResponse=data
          this.router.navigate(['/home'])
  
  
        },
        error:err=>{
          this.onWillDismiss("Alerta","Inicio sesión","ID incorrecto o problemas de conexion!")
          this.loginResponse=1
        }
      })
    }
    
    
    
    
  
   
  }

  cancel () {
    this.modal.dismiss(null, 'cancel')
  }

  get errorControl(){
    return this.addUserForm.controls

  }

  addUser(form:any){
  this.isSubmit=true;
    
   if(!form.valid){
      this.onWillDismiss("Alerta","Campos vacios","Revise!")
     }else{
      this.loginResponse=""
       this.api.insertUser(form.value).subscribe({
         next:data=>{
          
          this.loginResponse=data
          localStorage.setItem('user_id',data.id)
          this.onWillDismiss("Info","Insertado correctamente",`ID USUARIO:${data.id}`)
          this.cancel()
          this.router.navigate(['/home'])
         },
         error:err=>{
          this.onWillDismiss("Error","Insert Usuario","Problemas de conexion!")
          this.loginResponse=1
   
   
         }
       })
       
     }


  }
 

}
