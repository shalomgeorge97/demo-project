import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { P404Component } from './components/error-page/404.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthLoad } from './guards/auth-load.guard';
import { AuthServiceGuard } from './guards/auth-service.guard';


const routes: Routes = [
  {path:'',
  redirectTo:'login',
  pathMatch: 'full'
},
  {
  path:'login',
  component:LoginComponent
},
{
  path:'welcome',
  component:WelcomeComponent,
  canActivate:[AuthServiceGuard],
  children:[{
    path:'child',
    canLoad:[AuthLoad],
    component:ChildComponent
  }
  ]
},
{
  path:'**',
  component:P404Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
