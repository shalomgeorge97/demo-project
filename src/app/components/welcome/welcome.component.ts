import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit(): void {
  }

  logout():void{
    localStorage.clear();
    this._route.navigateByUrl('login')
    chrome.runtime.sendMessage('fmppnmgeadncmbhccbaabngfahbggdjb', {clearStorage:'true'},
      function (reply) {
        // chrome.storage.sync.set({'foo': 'hello', 'bar': 'hi'}, function() {
        //   console.log('Settings saved');
        // });
          if (reply) {
              if (reply.clearData) {
                  //log the response received from the chrome application
                  console.log('Selenium IDE logged out',reply.clearData);
              }
            }
      }
    );
  }

}
