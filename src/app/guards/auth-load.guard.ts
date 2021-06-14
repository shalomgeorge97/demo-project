// import { Injectable } from '@angular/core';
// import { CanLoad, Route } from '@angular/router';

// @Injectable({providedIn: 'root'})
// export class AuthLoadGuard implements CanLoad {
//   constructor() { }

//   canLoad(route: Route):boolean {
//     return false;
//   }
// }

import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthLoad implements CanLoad {
  constructor() { }

  canLoad() {
    return true;
  }
}