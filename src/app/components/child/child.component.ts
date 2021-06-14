///<reference types="chrome"/>
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  user
  constructor(private _user:UserService) { }

  ngOnInit(): void {
    this.user = this._user.userName
  }

  loadExt():void{
   const isLoggedIn = localStorage.getItem('isLoggedIn');
   const email = localStorage.getItem('email');
   let userData = {
    //  message:"user-data",
    //  isLoggedIn:isLoggedIn,
     email:email
   }
    chrome.runtime.sendMessage('fmppnmgeadncmbhccbaabngfahbggdjb', userData,
      function (reply) {
        // chrome.storage.sync.set({'foo': 'hello', 'bar': 'hi'}, function() {
        //   console.log('Settings saved');
        // });
          if (reply) {
              if (reply.loginMsg) {
                  //log the response received from the chrome application
                  console.log(reply.loginMsg);
              }
            }
      }
    );
  }
}
