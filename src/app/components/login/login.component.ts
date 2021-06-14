import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: FormControl;
  password: FormControl;
  loginGroup: FormGroup;

  constructor(private _route:Router,
    private _user:UserService) { }

  ngOnInit(): void {
    this.name = new FormControl('',[
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(10)
    ])
    this.password = new FormControl('',[
      Validators.required,
    ])
    this.loginGroup = new FormGroup({
      email: this.name,
      password: this.password
    });
  }
  
  login(){
    console.log(this.loginGroup)
    localStorage.setItem('isLoggedIn','true')
    localStorage.setItem('email',this.name.value)
    this._route.navigateByUrl('welcome')
    this._user.userName =this.name.value;
  }
}
