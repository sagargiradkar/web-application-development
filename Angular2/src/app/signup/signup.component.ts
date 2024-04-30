import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupusers:any[]=[];
  signupObj:any={
    userName:'',
    email:'',
    password:''
  };

constructor(){}
ngOnInit():void{}

onSignUp(){
this.signupusers.push(this.signupObj);
this.signupObj={
  userName:'',
  email:'',
  password:''
};
localStorage.setItem('signupUsers',JSON.stringify(this.signupusers))
}
}
