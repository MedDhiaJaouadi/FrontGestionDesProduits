import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private lo:LoginService,private route:Router) { }
user:any={}
  ngOnInit(): void {
  }
  login(){
    this.lo.login(this.user).subscribe({
      next:(data:any)=>
      {
        localStorage.setItem("token",data.token)
        this.route.navigate(["home"])

        },
      error:(err:any)=>{
        alert("compte non reconnue")
      },
      complete:()=>{}
    })
  }
  

}
