import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
msg;
  loginForm:FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email,Validators.required]),
    password: new FormControl(null, [Validators.required])
    
  });

  constructor(private router:Router, private service: RegisterService) { }

  ngOnInit() {
  }

  moveToRegister(){
    this.router.navigate(['/register']);
  }

  login(){
    console.log(this.loginForm.value);
    this.service.login(this.loginForm.value)
    .subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/user']);
      },
      err => {
        console.log(err);
        this.msg = err.message;
      }

    )
  }
}
