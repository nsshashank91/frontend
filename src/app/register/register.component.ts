import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email,Validators.required]),
    password: new FormControl(null, [Validators.required]),
    cpass: new FormControl(null, [Validators.required])
    
  });

  constructor(private router: Router, private service:RegisterService) { }

  ngOnInit() {

  }

  register(){
    console.log(this.registerForm.value);
    this.service.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/login']);
      },
      err => {
        console.log(err);
      }

    )
  }

  


}
