import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title="List Of Users"
  users:any
  ngOnInit(){
    const storedUsers=localStorage.getItem("signUpUsers")
    if(storedUsers){
      this.users=JSON.parse(storedUsers)
      console.log(this.users)
    }else{
      this.title="No Users Are Present In Record"
    }
  }
}
