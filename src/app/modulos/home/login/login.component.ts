import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  constructor(private usersService: UsersService){
  }
  login(username: string, password: string): void{
    this.usersService.login(username, password).subscribe(
      response =>{

      },
      error =>{

      }
    );
  }
}
