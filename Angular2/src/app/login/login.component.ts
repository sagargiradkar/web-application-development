import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  signupusers:any[]=[];
  signupObj:any={
    userName:'',
    email:'',
    password:''
  };
  loginObj:any={
    userName:'',
    password:''
  }
  
constructor(private router: Router){}

ngOnInit():void{
  const localData=localStorage.getItem('signupUsers');
  if(localData!=null){
    this.signupusers=JSON.parse(localData);
  }
}

onLogin():void{
  const isUserExist=this.signupusers.find(m=>m.userName==this.loginObj.userName && m.password==this.loginObj.password);
  if(isUserExist!=undefined){
    alert("User logged in successfully");
    this.router.navigate(['Profile']);
  }
  else{
    alert("Invalid username or password");
  }
}
}
