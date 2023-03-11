import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationServiceService } from "../../shared/authentication-service.service";
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(
    public authService: AuthenticationServiceService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }
  signUp(email:any, password:any){
    this.authService.RegisterUser(email.value, password.value)      
    .then((res) => {
      // Do something here
    }).catch((error) => {
      window.alert(error.message)
    })
}

}
