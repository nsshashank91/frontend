import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private service: RegisterService, private router:Router) { 
    this.service.user()
    .subscribe(
      data=>console.log(data),
      err=>{
        this.router.navigate(['/login']);
      }
    );
  }

  ngOnInit() {
  }

  logout(){
    this.service.logout()
    .subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/login']);
      },
      err=>{
        console.log(err);
      }
    );
  }

}
