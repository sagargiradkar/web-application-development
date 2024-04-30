import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj:any={
    name:"",
    password:""
  }
  onLogin(){
    const storedUsers=localStorage.getItem("signUpUsers")
    if(storedUsers){
      const users=JSON.parse(storedUsers)
      const oneUser=users.find((u:any)=> u.email==this.loginObj.email && u.password==this.loginObj.password)
      if(oneUser){
        alert("login successfully")
      }
      else{
        alert("invalid credentials")
      }
    }
    else{
      alert("Users Not Found")
    }
  }
}
