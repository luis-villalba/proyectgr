import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  //vamios a crear un atributo
  userLoginOn:boolean=false;
constructor( private loginService:LoginService){}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
this.loginService.currentUserLoginOn.subscribe(
  {
    next:(userLoginOn)=>{
      this.userLoginOn=userLoginOn;
    }
  }
)
}
}
