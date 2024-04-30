import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpUsers:any[]=[];
  signUpObj:any={
    name:"",
    email:"",
    password:""
  }


  onSignUp(){
    this.signUpUsers.push(this.signUpObj)
    localStorage.setItem("signUpUsers",JSON.stringify(this.signUpUsers))
    this.signUpObj={
      name:"",
      email:"",
      password:""
    }
  }
}
