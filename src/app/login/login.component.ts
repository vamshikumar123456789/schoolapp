import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { FormArray,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm: FormGroup =new FormGroup({

    email:new FormControl(),
    password: new FormControl(),
  })

  constructor(private loginService:LoginService,private router:Router){
  
  }
  submit(){
    console.log(this.loginForm)
    this.loginService.doLogin(this.loginForm.value).subscribe(
      (data:any)=>{
        this.router.navigateByUrl('/dashboard');
        localStorage.setItem('Token',data.token);
      },
      (err:any)=>
      alert("login failed")
    )
  }
}
