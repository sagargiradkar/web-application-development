import { Component,OnInit } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit{
  ngOnInit(): void {
  }
  
  name=localStorage.getItem('username');
}
